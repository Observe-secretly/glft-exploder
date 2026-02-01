import { ProgressChangeCallback, EXPLODER_CONSTANTS } from '../core/types';

/**
 * 爆炸视图底部 HUD (播放进度条)
 * 采用 Pro GLB Viewer 风格
 */
export class ExploderHUD {
  public element: HTMLElement;
  private slider: HTMLInputElement;
  private valueDisplay: HTMLSpanElement;
  private onProgressChange: ProgressChangeCallback;

  constructor(
    container: HTMLElement | string,
    onProgressChange: ProgressChangeCallback,
    initialProgress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT
  ) {
    this.onProgressChange = onProgressChange;

    // 1. 创建 HUD 容器
    this.element = document.createElement('div');
    this.element.className = 'exploder-hud-root';
    this.applyStyle(this.element, `
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      max-width: 600px;
      z-index: 100;
      pointer-events: auto;
    `);

    // 2. 创建内部卡片
    const card = document.createElement('div');
    card.className = 'exploder-card';
    this.applyStyle(card, `
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 12px 24px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(229, 231, 235, 0.5);
    `);
    this.element.appendChild(card);

    // 3. 进度条容器
    const progressContainer = document.createElement('div');
    this.applyStyle(progressContainer, `
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
    `);
    card.appendChild(progressContainer);

    // 5. 进度条头部 (文本和百分比)
    const header = document.createElement('div');
    this.applyStyle(header, `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `);
    
    const label = document.createElement('span');
    label.textContent = '当前播放进度';
    this.applyStyle(label, `
      font-size: 10px;
      font-weight: 700;
      color: var(--exploder-text-sub);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `);
    
    this.valueDisplay = document.createElement('span');
    this.valueDisplay.textContent = `${Math.round(initialProgress * 100)}%`;
    this.applyStyle(this.valueDisplay, `
      font-size: 11px;
      font-weight: 700;
      color: var(--exploder-accent);
    `);
    
    header.appendChild(label);
    header.appendChild(this.valueDisplay);
    progressContainer.appendChild(header);

    // 6. 范围滑块
    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.className = 'exploder-slider';
    this.slider.min = EXPLODER_CONSTANTS.PROGRESS.MIN.toString();
    this.slider.max = EXPLODER_CONSTANTS.PROGRESS.MAX.toString();
    this.slider.step = EXPLODER_CONSTANTS.PROGRESS.STEP.toString();
    this.slider.value = initialProgress.toString();
    this.applyStyle(this.slider, `
      width: 100%;
      height: 4px;
      cursor: pointer;
    `);
    progressContainer.appendChild(this.slider);

    // 事件绑定
    this.slider.oninput = (e) => {
      const v = parseFloat((e.target as HTMLInputElement).value);
      this.update(v);
      this.onProgressChange(v);
    };

    // 挂载
    const target = typeof container === 'string' ? document.querySelector(container) : container;
    (target || document.body).appendChild(this.element);
  }

  public update(progress: number): void {
    this.slider.value = progress.toString();
    this.valueDisplay.textContent = `${Math.round(progress * 100)}%`;
  }

  public show(): void {
    this.element.style.display = 'block';
  }

  public hide(): void {
    this.element.style.display = 'none';
  }

  public dispose(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  private applyStyle(el: HTMLElement, style: string) {
    const old = el.getAttribute('style') || '';
    el.setAttribute('style', old + style);
  }
}
