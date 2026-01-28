import { ExploderUI, ExploderOptions, ProgressChangeCallback, MultiplierChangeCallback, ExposureChangeCallback, ExplosionMode, ModeChangeCallback, AxialChangeCallback, ModelChangeCallback, HelperVisibilityChangeCallback, EXPLODER_CONSTANTS } from '../core/types';
import { ExploderSlider } from './ExploderSlider';
import { ExploderPanel } from './ExploderPanel';
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
      return new ExploderPanel(
        container,
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
export { ExploderSlider, ExploderPanel };