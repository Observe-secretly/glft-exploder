import { Scene, Camera, WebGLRenderer, Mesh, Object3D, Vector3 } from 'three';

/**
 * 交互管理器
 * 负责处理 3D 场景中的交互逻辑，如网格选中、高亮、显示/隐藏控制等
 */
declare class InteractionManager {
    private scene;
    private camera;
    private renderer;
    private raycaster;
    private mouse;
    private mouseDownPos;
    private readonly dragThreshold;
    private gridHelper;
    private axesHelper;
    private axisLabels;
    private selectedMesh;
    private enabled;
    private originalMaterialState;
    private onSelect;
    constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer);
    /**
     * 设置选中回调
     */
    setOnSelect(callback: (mesh: Mesh | null) => void): void;
    /**
     * 设置交互是否启用
     * 当进行其他高优先级操作（如测量）时，可以禁用网格选中
     */
    setEnabled(enabled: boolean): void;
    /**
     * 初始化辅助器 (网格、轴等)
     */
    private initHelpers;
    /**
     * 设置辅助器可见性
     */
    setHelperVisibility(visible: boolean): void;
    /**
     * 初始化事件监听
     */
    private initEventListeners;
    private onMouseDown;
    /**
     * 处理双击事件
     */
    private onDoubleClick;
    /**
     * 切换网格可见性
     */
    toggleMeshVisibility(mesh: Mesh): void;
    /**
     * 显示所有被隐藏的网格
     */
    showAllMeshes(): void;
    /**
     * 处理鼠标移动事件（移除悬停效果）
     */
    private onMouseMove;
    /**
     * 处理点击事件
     */
    private onClick;
    /**
     * 选中网格并高亮
     * @param mesh 要选中的网格
     */
    selectMesh(mesh: Mesh): void;
    /**
     * 取消选中
     */
    deselectMesh(): void;
    /**
     * 高亮网格
     * @param mesh 网格对象
     */
    private highlightMesh;
    /**
     * 恢复网格原始材质
     * @param mesh 网格对象
     */
    private restoreMesh;
    /**
     * 销毁管理器
     */
    dispose(): void;
}

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
    /** 是否在控制面板中显示辅助视图选项 (默认为 false) */
    showHelpers?: boolean;
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
 * GLTFExploder 类
 * 用于创建 glTF/GLB 模型的爆炸视图
 */
declare class GLTFExploder {
    private core;
    private ui;
    private renderer;
    private scene;
    private camera;
    private controls;
    private container;
    private zoomControls;
    private interactionManager;
    private boundOnWheel;
    private onModelChangeCallback?;
    private onHelperVisibilityChangeCallback?;
    private options;
    /**
     * 构造函数
     * 支持两种模式：
     * 1. 全自动模式: new GLTFExploder(options) - 自动创建场景、加载模型
     * 2. 手动集成模式: new GLTFExploder(model, scene, camera, renderer, options) - 集成到现有场景
     */
    constructor(arg1: Object3D | ExploderOptions, scene?: Scene, camera?: Camera, renderer?: WebGLRenderer, options?: ExploderOptions);
    /**
     * 初始化全自动模式
     */
    private initializeAutoMode;
    private onResize;
    private animate;
    /**
     * 初始化核心引擎和 UI
     */
    private initCore;
    /**
     * 滚轮事件处理
     */
    private onWheel;
    /**
     * 处理模型切换
     * @param modelPath 模型路径
     */
    private handleModelChange;
    /**
     * 内部自动加载模型方法
     */
    private loadModelAuto;
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
     * 设置新模型
     * @param model 新的模型对象
     */
    setModel(model: Object3D): void;
    /**
     * 设置辅助器可见性 (网格、坐标轴等)
     * @param visible 是否可见
     */
    setHelperVisibility(visible: boolean): void;
    /**
     * 设置内部灯光可见性
     * @param visible 是否可见
     */
    setInternalLightingVisible(visible: boolean): void;
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
     * 获取交互管理器
     */
    getInteractionManager(): InteractionManager | null;
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

export { ExploderOptions, GLTFExploder, ProgressChangeCallback };
