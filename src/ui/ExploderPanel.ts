import { ExploderUI, ProgressChangeCallback, MultiplierChangeCallback, ExposureChangeCallback, ExplosionMode, ModeChangeCallback, AxialChangeCallback, ModelChangeCallback, HelperVisibilityChangeCallback, ModelOption, ExploderUIStyle, EXPLODER_CONSTANTS } from '../core/types';
import { createStyles } from './styles';
import { Vector3 } from 'three';

/**
 * 爆炸视图面板控件
 * 提供更丰富的控制选项和信息显示
 */
export class ExploderPanel implements ExploderUI {
  /**
   * UI 元素
   */
  public element: HTMLElement;
  
  private slider: HTMLInputElement;
  private multiplierSlider: HTMLInputElement;
  private exposureSlider: HTMLInputElement;
  private modeSelect: HTMLSelectElement;
  private modelSelect: HTMLSelectElement;
  private axialSelect: HTMLSelectElement;
  private helperToggle: HTMLInputElement;
  private modelContainer: HTMLElement;
  private axialContainer: HTMLElement;
  private valueDisplay: HTMLSpanElement;
  private multiplierDisplay: HTMLSpanElement;
  private exposureDisplay: HTMLSpanElement;
  private resetButton: HTMLButtonElement;
  private onProgressChange: ProgressChangeCallback;
  private onMultiplierChange: MultiplierChangeCallback;
  private onExposureChange?: ExposureChangeCallback;
  private onModeChange?: ModeChangeCallback;
  private onAxialChange?: AxialChangeCallback;
  private onModelChange?: ModelChangeCallback;
  private onHelperVisibilityChange?: HelperVisibilityChangeCallback;
  private styles: Record<string, string>;
  
  /**
   * 构造函数
   * @param container 容器元素或选择器
   * @param onProgressChange 进度变化回调
   * @param onMultiplierChange 系数变化回调
   * @param onExposureChange 亮度变化回调
   * @param onModeChange 模式变化回调
   * @param onAxialChange 轴向变化回调
   * @param onModelChange 模型变化回调
   * @param onHelperVisibilityChange 辅助显示变化回调
   * @param initialProgress 初始进度值
   * @param initialMultiplier 初始系数
   * @param initialExposure 初始亮度
   * @param initialMode 初始模式
   * @param initialAxial 初始轴向
   * @param initialHelperVisible 初始辅助显示状态
   * @param models 可选模型列表
   * @param initialModel 初始模型
   * @param style 自定义样式
   */
  constructor(
    container: HTMLElement | string,
    onProgressChange: ProgressChangeCallback,
    onMultiplierChange: MultiplierChangeCallback,
    onExposureChange?: ExposureChangeCallback,
    onModeChange?: ModeChangeCallback,
    onAxialChange?: AxialChangeCallback,
    onModelChange?: ModelChangeCallback,
    onHelperVisibilityChange?: HelperVisibilityChangeCallback,
    initialProgress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
    initialMultiplier = EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT,
    initialExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT,
    initialMode = ExplosionMode.RADIAL,
    initialAxial = new Vector3(0, 1, 0),
    initialHelperVisible = true,
    models: string[] | ModelOption[] = [],
    initialModel?: string,
    style: Partial<ExploderUIStyle> = {}
  ) {
    this.onProgressChange = onProgressChange;
    this.onMultiplierChange = onMultiplierChange;
    this.onExposureChange = onExposureChange;
    this.onModeChange = onModeChange;
    this.onAxialChange = onAxialChange;
    this.onModelChange = onModelChange;
    this.onHelperVisibilityChange = onHelperVisibilityChange;
    this.styles = createStyles(style);
    
    // 创建面板容器
    this.element = document.createElement('div');
    
    // 统一使用深色背景，确保文字可见
    const isBody = !container || container === document.body || container === 'body';
    if (isBody) {
      this.applyStyle(this.element, this.styles.container);
    } else {
      // 如果嵌入到自定义容器，保留背景和内边距，但去掉绝对定位
      this.applyStyle(this.element, `
        width: 100%;
        border-radius: 4px;
        padding: 16px;
        font-family: -apple-system, sans-serif;
        box-sizing: border-box;
      `);
    }
    
    // 创建标题
    const title = document.createElement('h3');
    title.textContent = '模型爆炸视图控制';
    this.applyStyle(title, `
      margin: 0 0 16px 0;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `);
    this.element.appendChild(title);
    
    // 创建控制区域
    const controlArea = document.createElement('div');
    this.applyStyle(controlArea, `
      display: flex;
      flex-direction: column;
      gap: 15px;
      ${isBody ? '' : 'padding-top: 5px;'}
    `);
    this.element.appendChild(controlArea);
    
    // --- 模型选择下拉框 ---
    this.modelContainer = document.createElement('div');
    this.applyStyle(this.modelContainer, `
      display: ${models && models.length > 0 ? 'flex' : 'none'};
      flex-direction: column;
      width: 100%;
    `);
    controlArea.appendChild(this.modelContainer);
    
    const modelLabel = document.createElement('label');
    modelLabel.textContent = '选择模型:';
    this.applyStyle(modelLabel, this.styles.label);
    this.modelContainer.appendChild(modelLabel);
    
    this.modelSelect = document.createElement('select');
    this.applyStyle(this.modelSelect, this.styles.select);
    
    models.forEach(model => {
      const option = document.createElement('option');
      const modelPath = typeof model === 'string' ? model : model.value;
      const label = typeof model === 'string' 
        ? (model.split('/').pop() || model) 
        : model.label;
        
      option.value = modelPath;
      option.textContent = label;
      if (modelPath === initialModel) option.selected = true;
      this.modelSelect.appendChild(option);
    });
    
    this.modelContainer.appendChild(this.modelSelect);
    
    // --- 爆炸程度滑块 ---
    const sliderContainer = document.createElement('div');
    this.applyStyle(sliderContainer, `
      display: flex;
      flex-direction: column;
      width: 100%;
    `);
    controlArea.appendChild(sliderContainer);
    
    const sliderLabelContainer = document.createElement('div');
    this.applyStyle(sliderLabelContainer, `
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    `);
    sliderContainer.appendChild(sliderLabelContainer);
    
    const sliderLabel = document.createElement('label');
    sliderLabel.textContent = '爆炸进度:';
    this.applyStyle(sliderLabel, this.styles.label);
    sliderLabelContainer.appendChild(sliderLabel);
    
    this.valueDisplay = document.createElement('span');
    this.valueDisplay.textContent = `${Math.round(initialProgress * 100)}%`;
    this.applyStyle(this.valueDisplay, this.styles.label);
    sliderLabelContainer.appendChild(this.valueDisplay);
    
    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.min = EXPLODER_CONSTANTS.PROGRESS.MIN.toString();
    this.slider.max = EXPLODER_CONSTANTS.PROGRESS.MAX.toString();
    this.slider.step = EXPLODER_CONSTANTS.PROGRESS.STEP.toString();
    this.slider.value = initialProgress.toString();
    this.applyStyle(this.slider, this.styles.slider);
    sliderContainer.appendChild(this.slider);

    // --- 爆炸系数滑块 ---
    const multiplierContainer = document.createElement('div');
    this.applyStyle(multiplierContainer, `
      display: flex;
      flex-direction: column;
      width: 100%;
    `);
    controlArea.appendChild(multiplierContainer);
    
    const multiplierLabelContainer = document.createElement('div');
    this.applyStyle(multiplierLabelContainer, `
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    `);
    multiplierContainer.appendChild(multiplierLabelContainer);
    
    const multiplierLabel = document.createElement('label');
    multiplierLabel.textContent = '爆炸系数:';
    this.applyStyle(multiplierLabel, this.styles.label);
    multiplierLabelContainer.appendChild(multiplierLabel);
    
    this.multiplierDisplay = document.createElement('span');
    this.multiplierDisplay.textContent = initialMultiplier.toFixed(1);
    this.applyStyle(this.multiplierDisplay, this.styles.label);
    multiplierLabelContainer.appendChild(this.multiplierDisplay);
    
    this.multiplierSlider = document.createElement('input');
    this.multiplierSlider.type = 'range';
    this.multiplierSlider.min = EXPLODER_CONSTANTS.MULTIPLIER.MIN.toString();
    this.multiplierSlider.max = EXPLODER_CONSTANTS.MULTIPLIER.MAX.toString();
    this.multiplierSlider.step = EXPLODER_CONSTANTS.MULTIPLIER.STEP.toString();
    this.multiplierSlider.value = initialMultiplier.toString();
    this.applyStyle(this.multiplierSlider, this.styles.slider);
    multiplierContainer.appendChild(this.multiplierSlider);
    
    // --- 渲染亮度滑块 ---
    const exposureContainer = document.createElement('div');
    this.applyStyle(exposureContainer, `
      display: flex;
      flex-direction: column;
      width: 100%;
    `);
    controlArea.appendChild(exposureContainer);
    
    const exposureLabelContainer = document.createElement('div');
    this.applyStyle(exposureLabelContainer, `
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    `);
    exposureContainer.appendChild(exposureLabelContainer);
    
    const exposureLabel = document.createElement('label');
    exposureLabel.textContent = '渲染亮度:';
    this.applyStyle(exposureLabel, this.styles.label);
    exposureLabelContainer.appendChild(exposureLabel);
    
    this.exposureDisplay = document.createElement('span');
    this.exposureDisplay.textContent = initialExposure.toFixed(1);
    this.applyStyle(this.exposureDisplay, this.styles.label);
    exposureLabelContainer.appendChild(this.exposureDisplay);
    
    this.exposureSlider = document.createElement('input');
    this.exposureSlider.type = 'range';
    this.exposureSlider.min = EXPLODER_CONSTANTS.EXPOSURE.MIN.toString();
    this.exposureSlider.max = EXPLODER_CONSTANTS.EXPOSURE.MAX.toString();
    this.exposureSlider.step = EXPLODER_CONSTANTS.EXPOSURE.STEP.toString();
    this.exposureSlider.value = initialExposure.toString();
    this.applyStyle(this.exposureSlider, this.styles.slider);
    exposureContainer.appendChild(this.exposureSlider);
    
    // --- 爆炸模式下拉框 ---
    const modeContainer = document.createElement('div');
    this.applyStyle(modeContainer, `
      display: flex;
      flex-direction: column;
      width: 100%;
    `);
    controlArea.appendChild(modeContainer);
    
    const modeLabel = document.createElement('label');
    modeLabel.textContent = '爆炸模式:';
    this.applyStyle(modeLabel, this.styles.label);
    modeContainer.appendChild(modeLabel);
    
    this.modeSelect = document.createElement('select');
    this.applyStyle(this.modeSelect, this.styles.select);
    
    const modes = [
      { value: ExplosionMode.RADIAL, label: '径向爆炸' },
      { value: ExplosionMode.AXIAL, label: '轴向分层' },
      { value: ExplosionMode.NORMALIZED_RADIAL, label: '归一化径向' },
      { value: ExplosionMode.SIZE_WEIGHTED, label: '尺寸加权' },
      { value: ExplosionMode.HIERARCHICAL, label: '装配树分级' },
      { value: ExplosionMode.FORCE_FIELD, label: '力场式爆炸' }
    ];
    
    modes.forEach(mode => {
      const option = document.createElement('option');
      option.value = mode.value;
      option.textContent = mode.label;
      if (mode.value === initialMode) option.selected = true;
      this.modeSelect.appendChild(option);
    });
    
    modeContainer.appendChild(this.modeSelect);
    
    // --- 轴向选择下拉框 (仅在轴向模式显示) ---
    this.axialContainer = document.createElement('div');
    this.applyStyle(this.axialContainer, `
      display: ${initialMode === ExplosionMode.AXIAL ? 'flex' : 'none'};
      flex-direction: column;
      width: 100%;
      margin-top: 10px;
    `);
    controlArea.appendChild(this.axialContainer);
    
    const axialLabel = document.createElement('label');
    axialLabel.textContent = '爆炸轴向:';
    this.applyStyle(axialLabel, this.styles.label);
    this.axialContainer.appendChild(axialLabel);
    
    this.axialSelect = document.createElement('select');
    this.applyStyle(this.axialSelect, this.styles.select);
    
    const axials = [
      { value: '0,1,0', label: 'Y 轴 (垂直)' },
      { value: '1,0,0', label: 'X 轴 (横向)' },
      { value: '0,0,1', label: 'Z 轴 (纵向)' }
    ];
    
    axials.forEach(axis => {
      const option = document.createElement('option');
      option.value = axis.value;
      option.textContent = axis.label;
      const currentAxialStr = `${initialAxial.x},${initialAxial.y},${initialAxial.z}`;
      if (axis.value === currentAxialStr) option.selected = true;
      this.axialSelect.appendChild(option);
    });
    
    this.axialContainer.appendChild(this.axialSelect);
    
    // --- 辅助显示切换 (网格/轴标签) ---
    const helperContainer = document.createElement('div');
    this.applyStyle(helperContainer, `
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 5px;
      margin-bottom: 5px;
    `);
    controlArea.appendChild(helperContainer);

    this.helperToggle = document.createElement('input');
    this.helperToggle.type = 'checkbox';
    this.helperToggle.id = 'helper-visibility-toggle';
    this.helperToggle.checked = initialHelperVisible;
    this.applyStyle(this.helperToggle, `
      margin-right: 8px;
      cursor: pointer;
    `);
    helperContainer.appendChild(this.helperToggle);

    const helperLabel = document.createElement('label');
    helperLabel.htmlFor = 'helper-visibility-toggle';
    helperLabel.textContent = '显示网格和轴标签';
    this.applyStyle(helperLabel, `
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    `);
    helperContainer.appendChild(helperLabel);
    
    // --- 按钮区域 ---
    const buttonContainer = document.createElement('div');
    this.applyStyle(buttonContainer, `
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    `);
    controlArea.appendChild(buttonContainer);
    
    this.resetButton = document.createElement('button');
    this.resetButton.textContent = '重置视图';
    this.applyStyle(this.resetButton, `
      ${this.styles.button}
      flex: 1;
      margin-right: 8px;
    `);
    buttonContainer.appendChild(this.resetButton);
    
    const maxButton = document.createElement('button');
    maxButton.textContent = '最大化';
    this.applyStyle(maxButton, `
      ${this.styles.button}
      flex: 1;
    `);
    buttonContainer.appendChild(maxButton);
    
    // 添加事件监听
    this.slider.addEventListener('input', this.handleSliderChange);
    this.multiplierSlider.addEventListener('input', this.handleMultiplierChange);
    this.exposureSlider.addEventListener('input', this.handleExposureChange);
    this.modeSelect.addEventListener('change', this.handleModeChange);
    this.modelSelect.addEventListener('change', this.handleModelChange);
    this.axialSelect.addEventListener('change', this.handleAxialChange);
    this.helperToggle.addEventListener('change', this.handleHelperToggle);
    this.resetButton.addEventListener('click', this.handleReset);
    maxButton.addEventListener('click', this.handleMax);
    
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
    this.valueDisplay.textContent = `${Math.round(progress * 100)}%`;
  }
  
  /**
   * 更新爆炸系数 UI
   * @param multiplier 爆炸系数
   */
  public updateMultiplier(multiplier: number): void {
    this.multiplierSlider.value = multiplier.toString();
    this.multiplierDisplay.textContent = multiplier.toFixed(1);
  }

  /**
   * 更新渲染亮度 UI
   * @param exposure 亮度
   */
  public updateExposure(exposure: number): void {
    this.exposureSlider.value = exposure.toString();
    this.exposureDisplay.textContent = exposure.toFixed(1);
  }

  /**
   * 更新爆炸模式 UI
   * @param mode 模式
   */
  public updateMode(mode: ExplosionMode): void {
    this.modeSelect.value = mode;
    // 同步显示/隐藏轴向选择
    if (this.axialContainer) {
      this.axialContainer.style.display = mode === ExplosionMode.AXIAL ? 'flex' : 'none';
    }
  }

  /**
   * 更新轴向状态
   * @param vector 轴向向量
   */
  public updateAxialVector(vector: Vector3): void {
    if (this.axialSelect) {
      this.axialSelect.value = `${vector.x},${vector.y},${vector.z}`;
    }
  }

  /**
   * 释放资源
   */
  public dispose(): void {
    this.slider.removeEventListener('input', this.handleSliderChange);
    this.multiplierSlider.removeEventListener('input', this.handleMultiplierChange);
    this.exposureSlider.removeEventListener('input', this.handleExposureChange);
    this.modeSelect.removeEventListener('change', this.handleModeChange);
    this.modelSelect.removeEventListener('change', this.handleModelChange);
    this.axialSelect.removeEventListener('change', this.handleAxialChange);
    this.resetButton.removeEventListener('click', this.handleReset);
    
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
  
  /**
   * 处理模型变化
   */
  private handleModelChange = (event: Event): void => {
    const value = (event.target as HTMLSelectElement).value;
    if (this.onModelChange) {
      this.onModelChange(value);
    }
  }

  /**
   * 处理滑块变化
   */
  private handleSliderChange = (event: Event): void => {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.valueDisplay.textContent = `${Math.round(value * 100)}%`;
    this.onProgressChange(value);
  }
  
  /**
   * 处理系数变化
   */
  private handleMultiplierChange = (event: Event): void => {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.multiplierDisplay.textContent = value.toFixed(1);
    this.onMultiplierChange(value);
  }

  /**
   * 处理亮度变化
   */
  private handleExposureChange = (event: Event): void => {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.exposureDisplay.textContent = value.toFixed(1);
    if (this.onExposureChange) {
      this.onExposureChange(value);
    }
  }

  /**
   * 处理模式变化
   */
  private handleModeChange = (event: Event): void => {
    const value = (event.target as HTMLSelectElement).value as ExplosionMode;
    
    // 显示/隐藏轴向选择
    if (this.axialContainer) {
      this.axialContainer.style.display = value === ExplosionMode.AXIAL ? 'flex' : 'none';
    }

    if (this.onModeChange) {
      this.onModeChange(value);
    }
  }

  /**
   * 处理轴向变化
   */
  private handleAxialChange = (event: Event): void => {
    const value = (event.target as HTMLSelectElement).value;
    const [x, y, z] = value.split(',').map(Number);
    if (this.onAxialChange) {
      this.onAxialChange(new Vector3(x, y, z));
    }
  }

  /**
   * 处理辅助显示切换
   */
  private handleHelperToggle = (event: Event): void => {
    const checked = (event.target as HTMLInputElement).checked;
    if (this.onHelperVisibilityChange) {
      this.onHelperVisibilityChange(checked);
    }
  }
  
  /**
   * 处理重置按钮点击
   */
  private handleReset = (): void => {
    this.update(0);
    this.onProgressChange(0);
  }
  
  /**
   * 处理最大化按钮点击
   */
  private handleMax = (): void => {
    this.update(1);
    this.onProgressChange(1);
  }
  
  /**
   * 应用样式
   */
  private applyStyle(element: HTMLElement, cssText: string): void {
    const cleanCss = cssText.replace(/\s+/g, ' ').trim();
    element.style.cssText = cleanCss;
  }
}