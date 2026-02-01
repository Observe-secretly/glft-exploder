import { ExploderUI, ExploderOptions, ProgressChangeCallback, MultiplierChangeCallback, ExposureChangeCallback, ExplosionMode, ModeChangeCallback, AxialChangeCallback, ModelChangeCallback, HelperVisibilityChangeCallback, EXPLODER_CONSTANTS } from '../core/types';
import { ExploderSlider } from './ExploderSlider';
import { ExploderPanel } from './ExploderPanel';
import { ExploderHUD } from './ExploderHUD';
import { ExploderInfoHUD } from './ExploderInfoHUD';
import { getContainer } from '../core/utils';
import { Vector3 } from 'three';

/**
 * UI 类型
 */
export enum UIType {
  SLIDER = 'slider',
  PANEL = 'panel'
}

/**
 * 复合 UI 类，管理面板和 HUD
 */
class CompositeUI implements ExploderUI {
  public element: HTMLElement;
  private panel: ExploderPanel;
  private hud: ExploderHUD;
  private infoHUD?: ExploderInfoHUD;

  constructor(
    container: HTMLElement,
    hudContainer: HTMLElement,
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
    models?: any[],
    initialModel?: string,
    style?: any
  ) {
    // 根元素使用容器
    this.element = container;

    // 创建面板
    this.panel = new ExploderPanel(
      container,
      onMultiplierChange,
      onExposureChange,
      onModeChange,
      onAxialChange,
      onModelChange,
      onHelperVisibilityChange,
      initialMultiplier,
      initialExposure,
      initialMode,
      initialAxial,
      initialHelperVisible,
      models,
      initialModel,
      style
    );

    // 创建 HUD (进度条)
    this.hud = new ExploderHUD(
      hudContainer,
      onProgressChange,
      initialProgress
    );

    // 创建信息 HUD (左上角)
    // 如果 hudContainer 是视口容器，我们就在这里挂载信息 HUD
    if (hudContainer) {
      const modelName = initialModel ? initialModel.split('/').pop() || initialModel : '示例模型';
      this.infoHUD = new ExploderInfoHUD(hudContainer, modelName);
    }
  }

  show() {
    this.panel.show();
    this.hud.show();
    this.infoHUD?.element && (this.infoHUD.element.style.display = 'flex');
  }

  hide() {
    this.panel.hide();
    this.hud.hide();
    this.infoHUD?.element && (this.infoHUD.element.style.display = 'none');
  }

  update(progress: number) {
    this.panel.update(progress);
    this.hud.update(progress);
  }

  updateMultiplier(multiplier: number) {
    this.panel.updateMultiplier(multiplier);
  }

  updateExposure(exposure: number) {
    this.panel.updateExposure(exposure);
  }

  updateMode(mode: ExplosionMode) {
    this.panel.updateMode(mode);
  }

  updateAxialVector(vector: Vector3) {
    this.panel.updateAxialVector(vector);
  }

  updateHelperVisibility(visible: boolean) {
    this.panel.updateHelperVisibility(visible);
  }

  updateModel(modelPath: string) {
    if (this.infoHUD) {
      const modelName = modelPath.split('/').pop() || modelPath;
      this.infoHUD.setModelName(modelName);
    }
    // Panel 内部可能也需要更新选中的模型
    if ((this.panel as any).updateModel) {
      (this.panel as any).updateModel(modelPath);
    }
  }

  dispose() {
    this.panel.dispose();
    this.hud.dispose();
    this.infoHUD?.dispose();
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
  initialHelperVisible = true
): ExploderUI | null {
  // 如果不创建 UI，则返回 null
  if (options.createUI === false) {
    return null;
  }
  
  // 获取容器元素
  const container = options.container ? getContainer(options.container) : document.body;
  
  // 确定 UI 类型
  const uiType = options.uiType || UIType.SLIDER;
  
  // 创建对应类型的 UI
  switch (uiType) {
    case UIType.PANEL:
      // 如果是面板模式，默认 HUD 放在 body (除非指定了 hudContainer)
      const hudContainer = options.hudContainer ? getContainer(options.hudContainer) : document.body;
      return new CompositeUI(
        container,
        hudContainer,
        onProgressChange,
        onMultiplierChange,
        onExposureChange,
        onModeChange,
        onAxialChange,
        onModelChange,
        onHelperVisibilityChange,
        initialProgress,
        initialMultiplier,
        initialExposure,
        initialMode,
        initialAxial,
        initialHelperVisible,
        options.models,
        options.initialModel,
        options.uiStyle
      );
    case UIType.SLIDER:
    default:
      return new ExploderSlider(container, onProgressChange, initialProgress, options.uiStyle);
  }
}

// 导出 UI 组件
export { ExploderSlider, ExploderPanel, ExploderHUD };
