import { Object3D, Scene, Camera, WebGLRenderer, Vector3, PerspectiveCamera, AmbientLight, DirectionalLight, Color, ACESFilmicToneMapping } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './ui/base.css';
import { ExploderCore } from './core';
import { ExploderUI, ExploderOptions, ExplosionMode, ModelChangeCallback, HelperVisibilityChangeCallback, EXPLODER_CONSTANTS, ProgressChangeCallback } from './core/types';
import { createUI } from './ui';
import { calculateFaceCount, getFileName } from './core/utils';

/**
 * GLTFExploder 类
 * 用于创建 glTF/GLB 模型的爆炸视图
 */
export class GLTFExploder {
  private core: ExploderCore | null = null;
  private ui: ExploderUI | null = null;
  private renderer: WebGLRenderer | null = null;
  private scene: Scene | null = null;
  private camera: Camera | null = null;
  private controls: OrbitControls | null = null;
  private container: HTMLElement | null = null;
  
  private onModelChangeCallback?: ModelChangeCallback;
  private onHelperVisibilityChangeCallback?: HelperVisibilityChangeCallback;
  private options: ExploderOptions;
  
  /**
   * 构造函数
   * 支持两种模式：
   * 1. 全自动模式: new GLTFExploder(options) - 自动创建场景、加载模型
   * 2. 手动集成模式: new GLTFExploder(model, scene, camera, renderer, options) - 集成到现有场景
   */
  constructor(
    arg1: Object3D | ExploderOptions,
    scene?: Scene,
    camera?: Camera,
    renderer?: WebGLRenderer,
    options: ExploderOptions = {}
  ) {
    if (arg1 instanceof Object3D && scene && camera && renderer) {
      // 模式 2: 手动集成模式
      this.options = options;
      this.renderer = renderer;
      this.scene = scene;
      this.camera = camera;
      this.initCore(arg1, scene, camera, renderer, options);
    } else {
      // 模式 1: 全自动模式
      this.options = arg1 as ExploderOptions;
      this.initializeAutoMode();
    }
  }

  /**
   * 初始化全自动模式
   */
  private async initializeAutoMode(): Promise<void> {
    const { viewport, model } = this.options;
    
    // 1. 获取视口容器
    const containerElement = typeof viewport === 'string' ? document.querySelector(viewport) as HTMLElement : viewport as HTMLElement;
    this.container = containerElement;
    
    if (!this.container) {
      console.warn('GLTFExploder: 未找到视口容器 (viewport)，将使用 body 作为默认容器');
      this.container = document.body;
    }

    // 2. 初始化 Three.js 基础场景
    this.scene = new Scene();
    this.scene.background = new Color(0xFFFFFF);

    this.camera = new PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(5, 5, 5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    // 3. 添加灯光
    this.scene.add(new AmbientLight(0xffffff, 0.6));
    const sun = new DirectionalLight(0xffffff, 1);
    sun.position.set(5, 10, 7.5);
    this.scene.add(sun);

    // 4. 加载模型或使用传入的模型
    if (typeof model === 'string') {
      const loader = new GLTFLoader();
      loader.load(model, (gltf) => {
        const loadedModel = gltf.scene;
        this.scene?.add(loadedModel);
        this.initCore(loadedModel, this.scene!, this.camera!, this.renderer!, this.options);
      });
    } else if (model instanceof Object3D) {
      this.scene.add(model);
      this.initCore(model, this.scene, this.camera, this.renderer, this.options);
    }

    // 5. 启动渲染循环
    this.animate();

    // 6. 监听窗口变化
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    if (!this.container || !this.camera || !this.renderer) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    if (this.camera instanceof PerspectiveCamera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
    this.renderer.setSize(width, height);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 初始化核心引擎和 UI
   */
  private initCore(model: Object3D, scene: Scene, camera: Camera, renderer: WebGLRenderer, options: ExploderOptions): void {
    this.core = new ExploderCore(model, scene, camera, renderer, options);
    
    // 计算面数和获取名称
    const faceCount = calculateFaceCount(model);
    let modelName = 'Unknown Model';
    if (typeof options.model === 'string') {
      modelName = getFileName(options.model);
    } else if (model.name) {
      modelName = model.name;
    }

    if (options.createUI !== false) {
      this.ui = createUI(
        options,
        this.setProgress.bind(this),
        this.setMultiplier.bind(this),
        this.setExposure.bind(this),
        this.setMode.bind(this),
        this.setAxialVector.bind(this),
        this.handleModelChange.bind(this),
        this.handleHelperVisibilityChange.bind(this),
        EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
        EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT,
        renderer.toneMappingExposure,
        this.core.getMode(),
        this.core.getAxialVector(),
        true,
        modelName,
        faceCount
      );
    }
  }

  /**
   * 处理模型切换
   * @param modelPath 模型路径
   */
  private handleModelChange(modelPath: string): void {
    if (this.onModelChangeCallback) {
      this.onModelChangeCallback(modelPath);
    } else if (this.container && this.scene) {
      // 如果是全自动模式且没有自定义回调，则自动加载新模型
      this.loadModelAuto(modelPath);
    }
  }

  /**
   * 内部自动加载模型方法
   */
  private loadModelAuto(modelPath: string): void {
    if (!this.scene) return;
    
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      // 1. 移除旧核心和模型
      if (this.core) {
        const oldModel = (this.core as any).model;
        if (oldModel) this.scene?.remove(oldModel);
        this.core.dispose();
      }
      
      // 2. 添加新模型
      const newModel = gltf.scene;
      this.scene?.add(newModel);
      
      // 3. 重新初始化核心
      this.initCore(newModel, this.scene!, this.camera!, this.renderer!, this.options);
      
      // 4. 同步 UI (如果存在)
      if (this.ui) {
        this.ui.update(EXPLODER_CONSTANTS.PROGRESS.DEFAULT);
        if (this.ui.updateModel) {
          this.ui.updateModel(modelPath);
        }
        // 更新模型名称和面数
        if (this.ui.updateInfo) {
          const faceCount = calculateFaceCount(newModel);
          const name = getFileName(modelPath);
          this.ui.updateInfo(name, faceCount);
        }
      }
    });
  }

  /**
   * 处理辅助显示状态变化
   * @param visible 是否显示
   */
  private handleHelperVisibilityChange(visible: boolean): void {
    if (this.onHelperVisibilityChangeCallback) {
      this.onHelperVisibilityChangeCallback(visible);
    }
  }

  /**
   * 设置模型切换回调
   * @param callback 回调函数
   */
  public setModelChangeCallback(callback: ModelChangeCallback): void {
    this.onModelChangeCallback = callback;
  }

  /**
   * 设置辅助显示变化回调
   * @param callback 回调函数
   */
  public setHelperVisibilityChangeCallback(callback: HelperVisibilityChangeCallback): void {
    this.onHelperVisibilityChangeCallback = callback;
  }
  
  /**
   * 设置新模型
   * @param model 新的模型对象
   */
  public setModel(model: Object3D): void {
    this.core?.setModel(model);
  }

  /**
   * 设置内部灯光可见性
   * @param visible 是否可见
   */
  public setInternalLightingVisible(visible: boolean): void {
    this.core?.setInternalLightingVisible(visible);
    if (this.ui && this.ui.updateHelperVisibility) {
      this.ui.updateHelperVisibility(visible);
    }
  }

  /**
   * 设置爆炸进度
   * @param progress 进度值（0-1）
   */
  public setProgress(progress: number): void {
    this.core?.setProgress(progress);
    
    // 更新 UI
    if (this.ui) {
      this.ui.update(progress);
    }
  }

  /**
   * 设置爆炸系数
   * @param multiplier 系数
   */
  public setMultiplier(multiplier: number): void {
    this.core?.setMultiplier(multiplier);
    
    // 更新 UI
    if (this.ui && this.ui.updateMultiplier) {
      this.ui.updateMultiplier(multiplier);
    }
  }

  /**
   * 设置渲染亮度
   * @param exposure 亮度
   */
  public setExposure(exposure: number): void {
    if (this.renderer) {
      // 1. 确保渲染器启用了色调映射，否则 toneMappingExposure 无效
      if (this.renderer.toneMapping === 0) { // THREE.NoToneMapping
        this.renderer.toneMapping = 3; // THREE.ACESFilmicToneMapping
      }
      this.renderer.toneMappingExposure = exposure;
      
      // 2. 同时更新内部灯光的强度，这样即使用户没有开启 toneMapping，也能看到亮度变化
      this.core?.setInternalLightingExposure(exposure);
      
      // 更新 UI
      if (this.ui && this.ui.updateExposure) {
        this.ui.updateExposure(exposure);
      }
    }
  }

  /**
   * 设置爆炸模式
   * @param mode 模式
   */
  public setMode(mode: ExplosionMode): void {
    this.core?.setMode(mode);
    
    // 更新 UI
    if (this.ui && this.ui.updateMode) {
      this.ui.updateMode(mode);
    }
  }
  
  /**
   * 设置轴向向量
   * @param vector 轴向向量
   */
  public setAxialVector(vector: Vector3): void {
    this.core?.setAxialVector(vector);
    
    // 更新 UI
    if (this.ui && this.ui.updateAxialVector) {
      this.ui.updateAxialVector(vector);
    }
  }

  /**
   * 重置爆炸视图
   */
  public reset(): void {
    this.core?.reset();
    
    // 更新 UI
    if (this.ui) {
      this.ui.update(EXPLODER_CONSTANTS.PROGRESS.DEFAULT);
      if (this.ui.updateMultiplier) {
        this.ui.updateMultiplier(EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT);
      }
      if (this.ui.updateMode) {
        this.ui.updateMode(ExplosionMode.RADIAL);
      }
    }
  }
  
  /**
   * 设置进度变化回调
   * @param callback 回调函数
   */
  public setProgressChangeCallback(callback: ProgressChangeCallback): void {
    this.core?.setProgressChangeCallback(callback);
  }
  
  /**
   * 获取当前进度
   * @returns 当前进度值（0-1）
   */
  public getProgress(): number {
    return this.core?.getProgress() || 0;
  }
  
  /**
   * 显示 UI
   */
  public showUI(): void {
    if (this.ui) {
      this.ui.show();
    }
  }
  
  /**
   * 隐藏 UI
   */
  public hideUI(): void {
    if (this.ui) {
      this.ui.hide();
    }
  }
  
  /**
   * 释放资源
   */
  public dispose(): void {
    if (this.ui) {
      this.ui.dispose();
      this.ui = null;
    }
    this.core?.dispose();
  }
}

// 导出类型和枚举
export type { ExploderOptions, ProgressChangeCallback } from './core/types';
export { UIType } from './ui';