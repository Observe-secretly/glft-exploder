import { LiquidGlass } from './LiquidGlass';

/**
 * 缩放控件类
 * 提供放大和缩小按钮
 */
export class ExploderZoomControls {
  private container: HTMLElement;
  private controls: any; // 兼容 OrbitControls, ArcballControls 等
  private liquidGlass: LiquidGlass | null = null;
  private zoomStep: number = 0.9; // 缩放系数

  constructor(parent: HTMLElement, controls: any, styles: Record<string, string>) {
    this.controls = controls;
    
    // 创建容器
    this.container = document.createElement('div');
    this.container.className = 'exploder-zoom-controls';
    this.container.setAttribute('style', styles.zoomContainer);
    
    // 创建放大按钮
    const zoomInBtn = document.createElement('button');
    zoomInBtn.className = 'exploder-zoom-button';
    zoomInBtn.setAttribute('style', styles.zoomButton);
    zoomInBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
    zoomInBtn.onclick = () => this.zoom(this.zoomStep);
    
    // 创建缩小按钮
    const zoomOutBtn = document.createElement('button');
    zoomOutBtn.className = 'exploder-zoom-button';
    zoomOutBtn.setAttribute('style', styles.zoomButton);
    zoomOutBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
    zoomOutBtn.onclick = () => this.zoom(1 / this.zoomStep);
    
    this.container.appendChild(zoomInBtn);
    this.container.appendChild(zoomOutBtn);
    parent.appendChild(this.container);
    
    // 应用液态玻璃效果
    this.applyLiquidGlass();

    // 悬停效果
    this.addHoverEffects(zoomInBtn, styles);
    this.addHoverEffects(zoomOutBtn, styles);
  }

  /**
   * 执行缩放
   * @param factor 缩放因子
   */
  private zoom(factor: number): void {
    const camera = this.controls.object;
    const target = this.controls.target;
    
    // 计算当前距离
    const distance = camera.position.distanceTo(target);
    const newDistance = distance * factor;
    
    // 限制最小距离
    if (newDistance < 0.1) return;
    
    // 计算新位置
    const direction = camera.position.clone().sub(target).normalize();
    camera.position.copy(target).add(direction.multiplyScalar(newDistance));
    
    this.controls.update();
  }

  /**
   * 添加悬停效果
   */
  private addHoverEffects(btn: HTMLElement, styles: Record<string, string>): void {
    btn.onmouseenter = () => {
      const currentStyle = btn.getAttribute('style') || '';
      btn.setAttribute('style', currentStyle + styles.zoomButtonHover);
    };
    btn.onmouseleave = () => {
      btn.setAttribute('style', styles.zoomButton);
    };
    btn.onmousedown = () => {
      const currentStyle = btn.getAttribute('style') || '';
      btn.setAttribute('style', currentStyle + styles.zoomButtonActive);
    };
    btn.onmouseup = () => {
      const currentStyle = btn.getAttribute('style') || '';
      btn.setAttribute('style', currentStyle.replace(styles.zoomButtonActive, ''));
    };
  }

  /**
   * 应用液态玻璃效果
   */
  private applyLiquidGlass(): void {
    this.liquidGlass = new LiquidGlass(this.container, {
      width: 100,
      height: 52
    });
  }

  /**
   * 销毁
   */
  public dispose(): void {
    if (this.liquidGlass) {
      this.liquidGlass.dispose();
    }
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
