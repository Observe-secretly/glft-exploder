import { ExploderUI, ProgressChangeCallback, ExploderUIStyle, EXPLODER_CONSTANTS } from '../core/types';
import { createStyles } from './styles';

/**
 * 爆炸视图滑块控件
 */
export class ExploderSlider implements ExploderUI {
  /**
   * UI 元素
   */
  public element: HTMLElement;
  
  private slider: HTMLInputElement;
  private label: HTMLLabelElement;
  private resetButton: HTMLButtonElement;
  private onProgressChange: ProgressChangeCallback;
  private styles: Record<string, string>;
  
  /**
   * 构造函数
   * @param container 容器元素或选择器
   * @param onProgressChange 进度变化回调
   * @param initialProgress 初始进度值
   * @param style 自定义样式
   */
  constructor(
    container: HTMLElement | string,
    onProgressChange: ProgressChangeCallback,
    initialProgress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
    style: Partial<ExploderUIStyle> = {}
  ) {
    this.onProgressChange = onProgressChange;
    this.styles = createStyles(style);
    
    // 创建容器
    this.element = document.createElement('div');
    
    // 统一使用深色背景，确保文字可见
    const isBody = !container || container === document.body || container === 'body';
    if (isBody) {
      this.applyStyle(this.element, this.styles.container);
    } else {
      // 如果嵌入到自定义容器，保留背景和内边距，但去掉绝对定位
      this.applyStyle(this.element, `
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        padding: 12px 16px;
        color: #ffffff;
        font-family: -apple-system, sans-serif;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 12px;
      `);
    }
    
    // 创建标签
    this.label = document.createElement('label');
    this.label.textContent = '爆炸视图';
    this.applyStyle(this.label, this.styles.label);
    this.element.appendChild(this.label);
    
    // 创建滑块
    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.min = EXPLODER_CONSTANTS.PROGRESS.MIN.toString();
    this.slider.max = EXPLODER_CONSTANTS.PROGRESS.MAX.toString();
    this.slider.step = EXPLODER_CONSTANTS.PROGRESS.STEP.toString();
    this.slider.value = initialProgress.toString();
    this.applyStyle(this.slider, this.styles.slider);
    this.element.appendChild(this.slider);
    
    // 创建重置按钮
    this.resetButton = document.createElement('button');
    this.resetButton.textContent = '重置';
    this.applyStyle(this.resetButton, this.styles.button);
    this.element.appendChild(this.resetButton);
    
    // 添加事件监听
    this.slider.addEventListener('input', this.handleSliderChange);
    this.resetButton.addEventListener('click', this.handleReset);
    
    // 添加到容器
    const targetContainer = typeof container === 'string'
      ? document.querySelector(container)
      : container;
      
    if (targetContainer) {
      targetContainer.appendChild(this.element);
    } else {
      document.body.appendChild(this.element);
    }
  }
  
  /**
   * 显示 UI
   */
  public show(): void {
    this.element.style.display = 'block';
  }
  
  /**
   * 隐藏 UI
   */
  public hide(): void {
    this.element.style.display = 'none';
  }
  
  /**
   * 更新 UI 状态
   * @param progress 爆炸进度（0-1）
   */
  public update(progress: number): void {
    this.slider.value = progress.toString();
  }
  
  /**
   * 释放资源
   */
  public dispose(): void {
    this.slider.removeEventListener('input', this.handleSliderChange);
    this.resetButton.removeEventListener('click', this.handleReset);
    
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
  
  /**
   * 处理滑块变化
   */
  private handleSliderChange = (event: Event): void => {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.onProgressChange(value);
  }
  
  /**
   * 处理重置按钮点击
   */
  private handleReset = (): void => {
    this.update(0);
    this.onProgressChange(0);
  }
  
  /**
   * 应用样式
   */
  private applyStyle(element: HTMLElement, cssText: string): void {
    const cleanCss = cssText.replace(/\s+/g, ' ').trim();
    element.style.cssText = cleanCss;
  }
}