import { ProgressChangeCallback, EXPLODER_CONSTANTS } from '../core/types';
import { LiquidGlass } from './LiquidGlass';

/**
 * 爆炸视图底部 HUD (播放进度条)
 * 采用 Pro GLB Viewer 风格
 */
export class ExploderHUD {
  public element: HTMLElement;
  private liquidGlass?: LiquidGlass;
  private slider: HTMLInputElement;
  private valueDisplay: HTMLSpanElement;
  private measureButton: HTMLButtonElement;
  private onProgressChange: ProgressChangeCallback;
  private onMeasureToggle?: () => void;
  private isMeasureActive: boolean = false;

  constructor(
    container: HTMLElement | string,
    onProgressChange: ProgressChangeCallback,
    initialProgress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
    onMeasureToggle?: () => void
  ) {
    this.onProgressChange = onProgressChange;
    this.onMeasureToggle = onMeasureToggle;

    // 1. 创建 HUD 容器
    this.element = document.createElement('div');
    this.element.className = 'exploder-hud-root';
    this.applyStyle(this.element, `
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 72%;
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
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
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
    label.textContent = '当前爆炸进度';
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

    // 7. 分隔线 (仅在桌面端显示)
    const divider = document.createElement('div');
    this.applyStyle(divider, `
      height: 32px;
      width: 1px;
      background: rgba(229, 231, 235, 0.6);
      display: none;
    `);
    // 桌面端显示分隔线
    if (window.matchMedia('(min-width: 640px)').matches) {
      divider.style.display = 'block';
    }
    card.appendChild(divider);

    // 8. 测量按钮
    this.measureButton = document.createElement('button');
    this.measureButton.className = 'exploder-measure-button';
    this.measureButton.title = '测量';
    this.applyStyle(this.measureButton, `
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      background: #2563EB;
      color: white;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(229, 231, 235, 0.5);
    `);
    
    // 初始颜色为灰色/浅色
    this.updateMeasureButtonStyle();
    
    this.measureButton.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s;">
        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
        <path d="m14.5 12.5 2-2"></path>
        <path d="m11.5 9.5 2-2"></path>
        <path d="m8.5 6.5 2-2"></path>
        <path d="m17.5 15.5 2-2"></path>
      </svg>
    `;

    // 测量按钮悬停效果
    this.measureButton.addEventListener('mouseenter', () => {
      this.measureButton.style.transform = 'scale(1.08)';
      if (!this.isMeasureActive) {
        this.measureButton.style.background = 'rgba(243, 244, 246, 1)';
        this.measureButton.style.color = '#3B82F6';
      }
      const svg = this.measureButton.querySelector('svg');
      if (svg) svg.style.transform = 'rotate(12deg)';
    });
    this.measureButton.addEventListener('mouseleave', () => {
      this.measureButton.style.transform = 'scale(1)';
      if (!this.isMeasureActive) {
        this.measureButton.style.background = 'rgba(255, 255, 255, 0.6)';
        this.measureButton.style.color = '#6B7280';
      }
      const svg = this.measureButton.querySelector('svg');
      if (svg) svg.style.transform = 'rotate(0deg)';
    });
    this.measureButton.addEventListener('mousedown', () => {
      this.measureButton.style.transform = 'scale(0.95)';
    });
    this.measureButton.addEventListener('mouseup', () => {
      this.measureButton.style.transform = 'scale(1.05)';
    });

    // 测量按钮点击事件
    this.measureButton.addEventListener('click', () => {
      if (this.onMeasureToggle) {
        this.onMeasureToggle();
      }
    });

    card.appendChild(this.measureButton);

    // 事件绑定
    this.slider.oninput = (e) => {
      const v = parseFloat((e.target as HTMLInputElement).value);
      this.update(v);
      this.onProgressChange(v);
    };

    // 挂载
    const target = typeof container === 'string' ? document.querySelector(container) : container;
    (target || document.body).appendChild(this.element);

    // 应用液态玻璃效果
    this.liquidGlass = new LiquidGlass(card, {
      width: 600,
      height: 80
    });
  }

  /**
   * 设置测量模式激活状态
   * @param active 是否激活
   */
  public setMeasureActive(active: boolean): void {
    this.isMeasureActive = active;
    this.updateMeasureButtonStyle();
  }

  /**
   * 更新测量按钮样式
   */
  private updateMeasureButtonStyle(): void {
    if (this.isMeasureActive) {
      this.applyStyle(this.measureButton, `
        background: #2563EB;
        color: white;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      `);
    } else {
      this.applyStyle(this.measureButton, `
        background: rgba(255, 255, 255, 0.6);
        color: #6B7280;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      `);
    }
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
    this.liquidGlass?.dispose();
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  private applyStyle(el: HTMLElement, style: string) {
    const old = el.getAttribute('style') || '';
    el.setAttribute('style', old + style);
  }
}
