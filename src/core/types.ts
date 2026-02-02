import { Object3D, Vector3 } from 'three';

/**
 * 爆炸模式
 */
export enum ExplosionMode {
  /** 径向爆炸：基于中心点的散度位移 */
  RADIAL = 'radial',
  /** 轴向分层爆炸：沿特定轴线按层级偏移 */
  AXIAL = 'axial',
  /** 归一化径向爆炸：忽略距离差异的均匀发散 */
  NORMALIZED_RADIAL = 'normalized_radial',
  /** 尺寸加权爆炸：根据部件大小计算位移权重 */
  SIZE_WEIGHTED = 'size_weighted',
  /** 装配树分级爆炸：基于模型层级结构的嵌套爆炸 */
  HIERARCHICAL = 'hierarchical',
  /** 力场式爆炸：模拟物理斥力场的效果 */
  FORCE_FIELD = 'force_field'
}

/**
 * 进度变化回调函数
 */
export type ProgressChangeCallback = (progress: number) => void;

/**
 * 系数变化回调函数
 */
export type MultiplierChangeCallback = (multiplier: number) => void;

/**
 * 亮度变化回调函数
 */
export type ExposureChangeCallback = (exposure: number) => void;

/**
 * 模式变化回调函数
 */
export type ModeChangeCallback = (mode: ExplosionMode) => void;

/**
 * 轴向变化回调函数
 */
export type AxialChangeCallback = (vector: Vector3) => void;

/**
 * 辅助显示状态变化回调函数
 */
export type HelperVisibilityChangeCallback = (visible: boolean) => void;

/**
 * UI 样式配置接口
 */
export interface ExploderUIStyle {
  width?: string;
  height?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * 模型变化回调函数
 */
export type ModelChangeCallback = (modelPath: string) => void;

/**
 * 重置回调函数
 */
export type ResetCallback = () => void;

/**
 * 模型选项接口
 */
export interface ModelOption {
  label: string;
  value: string;
}

/**
 * 爆炸器常量配置
 */
export const EXPLODER_CONSTANTS = {
  // 爆炸进度 (Progress)
  PROGRESS: {
    DEFAULT: 0,
    MIN: 0,
    MAX: 1,
    STEP: 0.01
  },
  // 爆炸系数 (Multiplier)
  MULTIPLIER: {
    DEFAULT: 1,
    MIN: 0.1,
    MAX: 5.0,
    STEP: 0.1
  },
  // 渲染亮度 (Exposure)
  EXPOSURE: {
    DEFAULT: 1.0,
    MIN: 0.1,
    MAX: 6.0,
    STEP: 0.1
  },
  // 默认动画时长
  DEFAULT_DURATION: 1000,
  // 默认最大爆炸距离倍率
  DEFAULT_MAX_DISTANCE: 2.0,
  // 默认模型自适应尺寸（归一化后的参考尺寸）
  DEFAULT_ADAPT_SIZE: 5.0,
  // 算法权重常量
  WEIGHTS: {
    BASE: 0.5,
    SCALE: 1.5,
    FORCE_FIELD_OFFSET: 0.2
  },
  // 灯光强度配置
  LIGHTS: {
    // 场景灯光
    SCENE: {
      AMBIENT: 0.2,
      HEMISPHERE: 0.3,
      MAIN_DIRECTIONAL: 0.5,
      BACK_DIRECTIONAL: 0.3,
      SIDE_DIRECTIONAL: 0.2
    },
    // 内部灯光（8点位全方位照射）
    INTERNAL: {
      AMBIENT: 0.4,
      HEMISPHERE: 0.4,
      DIRECTIONAL: 0.8
    }
  },
  // 方向计算相关常量
  DIRECTION: {
    // 最小方向向量长度阈值
    MIN_LENGTH: 0.001,
    // 角度因子 (约等于 PI/180)
    ANGLE_FACTOR: 0.017453292519943295,
    // Z轴因子
    Z_FACTOR: 0.5,
    // 索引角度因子
    INDEX_ANGLE: 0.7853981633974483, // PI/4
    // XY偏移量
    XY_OFFSET: 0.2,
    // Z偏移量
    Z_OFFSET: 0.1
  }
};

/**
 * 爆炸器配置选项
 */
export interface ExploderOptions {
  /** 爆炸的最大距离（倍率） */
  maxDistance?: number;
  /** 动画持续时间（毫秒） */
  duration?: number;
  /** 是否自动创建 UI */
  createUI?: boolean;
  /** 当 createUI 为 true 时，是否显示控制面板 (默认为 true) */
  showPanel?: boolean;
  /** 当 createUI 为 true 时，是否显示进度条 (默认为 true) */
  showProgress?: boolean;
  /** 是否自动缩放和居中模型（自适应视图） */
  adaptModel?: boolean;
  /** 模型对象 (Object3D) 或模型路径 (string) */
  model?: Object3D | string;
  /** 网络模型 URL (优先级高于 model) */
  modelUrl?: string;
  /** 3D 视口容器（全自动模式下必填，可以是选择器或 HTMLElement） */
  viewport?: HTMLElement | string;
  /** 是否在控制面板中显示本地上传按钮 (默认为 false) */
  showUpload?: boolean;
  /** 是否开启鼠标滚轮控制爆炸进度 (默认为 false，开启后将禁用相机缩放) */
  wheelControlExplosion?: boolean;
  /** UI 样式配置 */
  uiStyle?: ExploderUIStyle;
  /** 爆炸方向计算策略 */
  directionStrategy?: (object: Object3D, center: Vector3) => Vector3;
  /** 爆炸模式 */
  mode?: ExplosionMode;
  /** 轴向分层爆炸的主轴（默认为 Y 轴） */
  axialVector?: Vector3;
  /** 可选的模型列表 */
  models?: string[] | ModelOption[];
  /** 初始选中的模型 */
  initialModel?: string;
}

/**
 * UI 接口定义
 */
export interface ExploderUI {
  /** 根元素 */
  element: HTMLElement;
  /** 显示 UI */
  show(): void;
  /** 隐藏 UI */
  hide(): void;
  /** 更新进度状态 */
  update(progress: number): void;
  /** 更新系数状态 */
  updateMultiplier?(multiplier: number): void;
  /** 更新亮度状态 */
  updateExposure?(exposure: number): void;
  /** 更新模式状态 */
  updateMode?(mode: ExplosionMode): void;
  /** 更新轴向状态 */
  updateAxialVector?(vector: Vector3): void;
  /** 更新模型信息 */
  updateModel?(modelPath: string): void;
  /** 更新模型展示信息（名称和面数） */
  updateInfo?(name: string, faceCount: number): void;
  /** 更新辅助显示状态 */
  updateHelperVisibility?(visible: boolean): void;
  /** 重置 UI 状态 */
  reset?(): void;
  /** 释放资源 */
  dispose(): void;
}