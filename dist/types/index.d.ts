import { Object3D, Vector3, Scene, Camera, WebGLRenderer } from 'three';

/**
 * 爆炸模式
 */
declare enum ExplosionMode {
    /** 径向爆炸：基于中心点的散度位移 */
    RADIAL = "radial",
    /** 轴向分层爆炸：沿特定轴线按层级偏移 */
    AXIAL = "axial",
    /** 归一化径向爆炸：忽略距离差异的均匀发散 */
    NORMALIZED_RADIAL = "normalized_radial",
    /** 尺寸加权爆炸：根据部件大小计算位移权重 */
    SIZE_WEIGHTED = "size_weighted",
    /** 装配树分级爆炸：基于模型层级结构的嵌套爆炸 */
    HIERARCHICAL = "hierarchical",
    /** 力场式爆炸：模拟物理斥力场的效果 */
    FORCE_FIELD = "force_field"
}
/**
 * 进度变化回调函数
 */
type ProgressChangeCallback = (progress: number) => void;
/**
 * 辅助显示状态变化回调函数
 */
type HelperVisibilityChangeCallback = (visible: boolean) => void;
/**
 * UI 样式配置接口
 */
interface ExploderUIStyle {
    width?: string;
    height?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}
/**
 * 模型变化回调函数
 */
type ModelChangeCallback = (modelPath: string) => void;
/**
 * 模型选项接口
 */
interface ModelOption {
    label: string;
    value: string;
}
/**
 * 爆炸器配置选项
 */
interface ExploderOptions {
    /** 爆炸的最大距离（倍率） */
    maxDistance?: number;
    /** 动画持续时间（毫秒） */
    duration?: number;
    /** 是否自动创建 UI */
    createUI?: boolean;
    /** UI 容器（可以是选择器或 HTMLElement） */
    container?: HTMLElement | string;
    /** UI 类型 */
    uiType?: 'slider' | 'panel';
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
 * UI 类型
 */
declare enum UIType {
    SLIDER = "slider",
    PANEL = "panel"
}

/**
 * GLTFExploder 类
 * 用于创建 glTF/GLB 模型的爆炸视图
 */
declare class GLTFExploder {
    private core;
    private ui;
    private renderer;
    private onModelChangeCallback?;
    private onHelperVisibilityChangeCallback?;
    /**
     * 构造函数
     * @param model 模型对象
     * @param scene 场景
     * @param camera 相机
     * @param renderer 渲染器
     * @param options 配置选项
     */
    constructor(model: Object3D, scene: Scene, camera: Camera, renderer: WebGLRenderer, options?: ExploderOptions);
    /**
     * 处理模型切换
     * @param modelPath 模型路径
     */
    private handleModelChange;
    /**
     * 处理辅助显示状态变化
     * @param visible 是否显示
     */
    private handleHelperVisibilityChange;
    /**
     * 设置模型切换回调
     * @param callback 回调函数
     */
    setModelChangeCallback(callback: ModelChangeCallback): void;
    /**
     * 设置辅助显示变化回调
     * @param callback 回调函数
     */
    setHelperVisibilityChangeCallback(callback: HelperVisibilityChangeCallback): void;
    /**
     * 设置爆炸进度
     * @param progress 进度值（0-1）
     */
    setProgress(progress: number): void;
    /**
     * 设置爆炸系数
     * @param multiplier 系数
     */
    setMultiplier(multiplier: number): void;
    /**
     * 设置渲染亮度
     * @param exposure 亮度
     */
    setExposure(exposure: number): void;
    /**
     * 设置爆炸模式
     * @param mode 模式
     */
    setMode(mode: ExplosionMode): void;
    /**
     * 设置轴向向量
     * @param vector 轴向向量
     */
    setAxialVector(vector: Vector3): void;
    /**
     * 重置爆炸视图
     */
    reset(): void;
    /**
     * 设置进度变化回调
     * @param callback 回调函数
     */
    setProgressChangeCallback(callback: ProgressChangeCallback): void;
    /**
     * 获取当前进度
     * @returns 当前进度值（0-1）
     */
    getProgress(): number;
    /**
     * 显示 UI
     */
    showUI(): void;
    /**
     * 隐藏 UI
     */
    hideUI(): void;
    /**
     * 释放资源
     */
    dispose(): void;
}

export { ExploderOptions, GLTFExploder, ProgressChangeCallback, UIType };
