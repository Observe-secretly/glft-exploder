import { ExploderUI, ExploderOptions, ProgressChangeCallback, MultiplierChangeCallback, ExposureChangeCallback, ExplosionMode, ModeChangeCallback, AxialChangeCallback, ModelChangeCallback, HelperVisibilityChangeCallback, MeasureActiveChangeCallback, EXPLODER_CONSTANTS } from '../core/types';
import { ExploderPanel } from './ExploderPanel';
import { ExploderHUD } from './ExploderHUD';
import { ExploderInfoHUD } from './ExploderInfoHUD';
import { ExploderMeasurement } from './ExploderMeasurement';
import { getContainer, isMobile } from '../core/utils';
import { Vector3, Camera, Scene, Object3D } from 'three';

/**
 * 复合 UI 类，管理面板和 HUD
 */
class CompositeUI implements ExploderUI {
  public element: HTMLElement;
  private panel?: ExploderPanel;
  private hud?: ExploderHUD;
  private infoHUD?: ExploderInfoHUD;
  private measurement?: ExploderMeasurement;
  private scrollGuide?: HTMLElement;
  private resizeHandler: () => void;

  constructor(
    container: HTMLElement,
    camera: Camera,
    scene: Scene,
    model: Object3D,
    onProgressChange: ProgressChangeCallback,
    onMultiplierChange: MultiplierChangeCallback,
    onExposureChange?: ExposureChangeCallback,
    onModeChange?: ModeChangeCallback,
    onAxialChange?: AxialChangeCallback,
    onModelChange?: ModelChangeCallback,
    onHelperVisibilityChange?: HelperVisibilityChangeCallback,
    onMeasureActiveChange?: MeasureActiveChangeCallback,
    onReset?: () => void,
    initialProgress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
    initialMultiplier = EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT,
    initialExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT,
    initialMode = ExplosionMode.RADIAL,
    initialAxial = new Vector3(0, 1, 0),
    initialHelperVisible = false,
    models?: any[],
    initialModel?: string,
    style?: any,
    showUpload = false,
    showHelpers = false,
    modelName: string = '示例模型',
    faceCount: number = 0,
    showPanel = true,
    showProgress = true
  ) {
    // 根元素使用容器
    this.element = container;

    // 创建面板 (即使是移动端也先创建，后续动态控制可见性)
    if (showPanel) {
      this.panel = new ExploderPanel(
        container,
        onMultiplierChange,
        onExposureChange,
        onModeChange,
        onAxialChange,
        onModelChange,
        onHelperVisibilityChange,
        onReset,
        initialMultiplier,
        initialExposure,
        initialMode,
        initialAxial,
        initialHelperVisible,
        models,
        initialModel,
        style,
        showUpload,
        showHelpers
      );
    }

    // 创建 HUD (进度条)
    if (showProgress) {
      this.hud = new ExploderHUD(
        container,
        onProgressChange,
        initialProgress,
        () => this.toggleMeasurement()
      );
    }

    // 创建测量组件 (默认隐藏)
    this.measurement = new ExploderMeasurement(
      container, 
      camera, 
      scene,
      (active) => {
        if (this.hud) {
          this.hud.setMeasureActive(active);
        }
        if (onMeasureActiveChange) {
          onMeasureActiveChange(active);
        }
      }
    );
    
    // 构建吸附数据结构
    if (this.measurement && model) {
      this.measurement.buildSnapStructures(model);
    }

    // 创建信息 HUD (左上角)
    if (showPanel) {
      this.infoHUD = new ExploderInfoHUD(container, modelName, faceCount);
    }

    // 创建移动端滚动引导层
    this.createScrollGuide(container);

    // 初始更新响应式状态
    this.updateResponsiveState();

    // 监听窗口大小变化
    this.resizeHandler = this.updateResponsiveState.bind(this);
    window.addEventListener('resize', this.resizeHandler);
  }

  /**
   * 创建移动端滚动引导层
   * 允许用户在移动端通过侧边栏滚动页面，而不是操作 3D 模型
   */
  private createScrollGuide(container: HTMLElement) {
    this.scrollGuide = document.createElement('div');
    this.scrollGuide.className = 'exploder-scroll-guide';
    
    // 创建触感纹理 (Tactile Texture)
    const texture = document.createElement('div');
    texture.className = 'exploder-scroll-texture';
    for (let i = 0; i < 10; i++) {
      const dot = document.createElement('div');
      dot.className = 'exploder-scroll-dot';
      texture.appendChild(dot);
    }
    
    const label = document.createElement('div');
    label.className = 'exploder-scroll-guide-label';
    label.innerText = '滑动区域';
    
    this.scrollGuide.appendChild(texture);
    this.scrollGuide.appendChild(label);
    container.appendChild(this.scrollGuide);
    
    // 阻止 touchstart 冒泡到渲染器容器，从而允许原生滚动
    this.scrollGuide.addEventListener('touchstart', (e) => {
      e.stopPropagation();
    }, { passive: true });
    
    this.scrollGuide.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });
  }

  /**
   * 更新响应式状态，根据屏幕尺寸显示/隐藏组件
   */
  private updateResponsiveState() {
    const mobile = isMobile();
    
    if (mobile) {
      this.panel?.hide();
      this.infoHUD?.hide();
    } else {
      this.panel?.show();
      this.infoHUD?.show();
    }
  }

  show() {
    if (!isMobile()) {
      this.panel?.show();
      this.infoHUD?.show();
    }
    this.hud?.show();
  }

  hide() {
    this.panel?.hide();
    this.hud?.hide();
    this.infoHUD?.hide();
  }

  update(progress: number) {
    this.panel?.update(progress);
    this.hud?.update(progress);
  }

  updateMultiplier(multiplier: number) {
    this.panel?.updateMultiplier(multiplier);
  }

  updateExposure(exposure: number) {
    this.panel?.updateExposure(exposure);
  }

  updateMode(mode: ExplosionMode) {
    this.panel?.updateMode(mode);
  }

  updateAxialVector(vector: Vector3) {
    this.panel?.updateAxialVector(vector);
  }

  updateHelperVisibility(visible: boolean) {
    this.panel?.updateHelperVisibility(visible);
  }

  updateModelScale(scale: number) {
    this.measurement?.setModelScale(scale);
  }

  updateModel(modelPath: string) {
    // Note: This only updates the selection, the actual info update happens via updateInfo
    if (this.panel && (this.panel as any).updateModel) {
      (this.panel as any).updateModel(modelPath);
    }
  }

  updateInfo(name: string, faceCount: number) {
    this.infoHUD?.update(name, faceCount);
  }

  reset() {
    this.panel?.updateMultiplier(EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT);
    this.panel?.updateExposure(EXPLODER_CONSTANTS.EXPOSURE.DEFAULT);
    this.panel?.updateMode(ExplosionMode.RADIAL);
    this.panel?.updateAxialVector(new Vector3(0, 1, 0));
    this.panel?.updateHelperVisibility(true);
    this.hud?.update(EXPLODER_CONSTANTS.PROGRESS.DEFAULT);
  }

  render() {
    if (this.measurement) {
      this.measurement.update();
    }
  }

  toggleMeasurement() {
    this.measurement?.toggle();
  }

  dispose() {
    window.removeEventListener('resize', this.resizeHandler);
    this.panel?.dispose();
    this.hud?.dispose();
    this.infoHUD?.dispose();
    this.measurement?.dispose();
  }
}

/**
 * 创建 UI 控件
 * @param options 配置选项
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
 * @returns UI 控件实例
 */
export function createUI(
  options: ExploderOptions,
  camera: Camera,
  scene: Scene,
  model: Object3D,
  onProgressChange: ProgressChangeCallback,
  onMultiplierChange: MultiplierChangeCallback,
  onExposureChange?: ExposureChangeCallback,
  onModeChange?: ModeChangeCallback,
  onAxialChange?: AxialChangeCallback,
  onModelChange?: ModelChangeCallback,
  onHelperVisibilityChange?: HelperVisibilityChangeCallback,
  onMeasureActiveChange?: MeasureActiveChangeCallback,
  onReset?: () => void,
  initialProgress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
  initialMultiplier = EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT,
  initialExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT,
  initialMode = ExplosionMode.RADIAL,
  initialAxial = new Vector3(0, 1, 0),
  initialHelperVisible = false,
  modelName: string = '示例模型',
  faceCount: number = 0
): ExploderUI | null {
  // 如果不创建 UI，则返回 null
  if (options.createUI === false) {
    return null;
  }
  
  // 获取容器元素
  const viewport = options.viewport ? getContainer(options.viewport) : null;
  const container = viewport || document.body;
  
  // 确保容器有定位属性，以便 UI 能够正确相对于其定位
  if (container instanceof HTMLElement) {
    const style = window.getComputedStyle(container);
    if (style.position === 'static') {
      container.style.position = 'relative';
    }
  }

  return new CompositeUI(
    container,
    camera,
    scene,
    model,
    onProgressChange,
    onMultiplierChange,
    onExposureChange,
    onModeChange,
    onAxialChange,
    onModelChange,
    onHelperVisibilityChange,
    onMeasureActiveChange,
    onReset,
    initialProgress,
    initialMultiplier,
    initialExposure,
    initialMode,
    initialAxial,
    initialHelperVisible,
    options.models as any[],
    options.initialModel || (typeof options.model === 'string' ? options.model : ''),
    options.uiStyle,
    options.showUpload,
    options.showHelpers,
    modelName,
    faceCount,
    options.showPanel ?? true,
    options.showProgress ?? true
  );
}

// 导出 UI 组件
export { ExploderPanel, ExploderHUD };
