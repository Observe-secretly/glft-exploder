/**
 * Liquid Glass Effect - Refactored for gltf-exploder
 * Original by Shu Ding (https://github.com/shuding/liquid-glass)
 */

export interface LiquidGlassOptions {
  width: number;
  height: number;
  fragment?: (uv: { x: number; y: number }, mouse: { x: number; y: number }) => { type: string; x: number; y: number };
}

function smoothStep(a: number, b: number, t: number) {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function length(x: number, y: number) {
  return Math.sqrt(x * x + y * y);
}

function roundedRectSDF(x: number, y: number, width: number, height: number, radius: number) {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return Math.min(Math.max(qx, qy), 0) + length(Math.max(qx, 0), Math.max(qy, 0)) - radius;
}

function texture(x: number, y: number) {
  return { type: 't', x, y };
}

function generateId() {
  return 'lg-' + Math.random().toString(36).substr(2, 5);
}

export class LiquidGlass {
  private id: string;
  private width: number;
  private height: number;
  private fragment: (uv: { x: number; y: number }, mouse: { x: number; y: number }) => { type: string; x: number; y: number };
  
  private svg!: SVGSVGElement;
  private feImage!: SVGFEImageElement;
  private feDisplacementMap!: SVGFEDisplacementMapElement;
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  
  private mouse = { x: 0, y: 0 };
  private mouseUsed = false;
  private canvasDPI = window.devicePixelRatio || 1;

  constructor(targetElement: HTMLElement, options: LiquidGlassOptions) {
    this.id = generateId();
    this.width = options.width;
    this.height = options.height;
    this.fragment = options.fragment || ((uv) => {
      const ix = uv.x - 0.5;
      const iy = uv.y - 0.5;
      const distanceToEdge = roundedRectSDF(
        ix,
        iy,
        0.3,
        0.2,
        0.6
      );
      const displacement = smoothStep(0.8, 0, distanceToEdge - 0.30);
      const scaled = smoothStep(0, 1, displacement);
      return texture(ix * scaled + 0.5, iy * scaled + 0.5);
    });

    this.init(targetElement);
  }

  private init(target: HTMLElement) {
    // 1. Setup SVG Filter
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('style', 'position:absolute; width:0; height:0; pointer-events:none;');
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', `${this.id}_filter`);
    filter.setAttribute('filterUnits', 'userSpaceOnUse');
    filter.setAttribute('colorInterpolationFilters', 'sRGB');
    filter.setAttribute('x', '0');
    filter.setAttribute('y', '0');
    filter.setAttribute('width', this.width.toString());
    filter.setAttribute('height', this.height.toString());

    this.feImage = document.createElementNS('http://www.w3.org/2000/svg', 'feImage');
    this.feImage.setAttribute('id', `${this.id}_map`);
    this.feImage.setAttribute('result', 'map');
    this.feImage.setAttribute('width', this.width.toString());
    this.feImage.setAttribute('height', this.height.toString());

    this.feDisplacementMap = document.createElementNS('http://www.w3.org/2000/svg', 'feDisplacementMap');
    this.feDisplacementMap.setAttribute('in', 'SourceGraphic');
    this.feDisplacementMap.setAttribute('in2', 'map');
    this.feDisplacementMap.setAttribute('xChannelSelector', 'R');
    this.feDisplacementMap.setAttribute('yChannelSelector', 'G');

    filter.appendChild(this.feImage);
    filter.appendChild(this.feDisplacementMap);
    defs.appendChild(filter);
    this.svg.appendChild(defs);
    document.body.appendChild(this.svg);

    // 2. Setup Canvas
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d')!;
    this.updateSize(this.width, this.height);

    // 3. Apply to target
    (target.style as any).backdropFilter = `url(#${this.id}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`;
    (target.style as any).webkitBackdropFilter = `url(#${this.id}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`;
    
    // 4. Initial Render
    this.render();

    // 5. Mouse Interaction
    target.addEventListener('mousemove', (e) => {
      const rect = target.getBoundingClientRect();
      this.mouse.x = (e.clientX - rect.left) / rect.width;
      this.mouse.y = (e.clientY - rect.top) / rect.height;
      if (this.mouseUsed) this.render();
    });
  }

  public updateSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.canvas.width = width * this.canvasDPI;
    this.canvas.height = height * this.canvasDPI;
    this.render();
  }

  private render() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    if (w <= 0 || h <= 0) return;

    const mouseProxy = new Proxy(this.mouse, {
      get: (target, prop: keyof typeof this.mouse) => {
        this.mouseUsed = true;
        return target[prop];
      }
    });

    this.mouseUsed = false;
    const data = new Uint8ClampedArray(w * h * 4);

    let maxScale = 0;
    const rawValues = [];

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);
      const pos = this.fragment(
        { x: x / w, y: y / h },
        mouseProxy
      );
      const dx = pos.x * w - x;
      const dy = pos.y * h - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
    }

    maxScale *= 0.5;
    if (maxScale < 1) maxScale = 1;

    let index = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5;
      const g = rawValues[index++] / maxScale + 0.5;
      data[i] = r * 255;
      data[i + 1] = g * 255;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }

    this.context.putImageData(new ImageData(data, w, h), 0, 0);
    this.feImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.canvas.toDataURL());
    this.feDisplacementMap.setAttribute('scale', (maxScale / this.canvasDPI).toString());
  }

  public dispose() {
    this.svg.remove();
    this.canvas.remove();
  }
}
