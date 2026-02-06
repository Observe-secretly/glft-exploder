import { Object3D, Scene, Camera, WebGLRenderer, Vector3, PerspectiveCamera, AmbientLight, DirectionalLight, Color, ACESFilmicToneMapping, GridHelper, AxesHelper, TOUCH } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './ui/base.css';
import { ExploderCore } from './core';
import { ExploderUI, ExploderOptions, ExplosionMode, ModelChangeCallback, HelperVisibilityChangeCallback, EXPLODER_CONSTANTS, ProgressChangeCallback } from './core/types';
import { createUI } from './ui';
import { createStyles } from './ui/styles';
import { ExploderZoomControls } from './ui/ExploderZoomControls';
import { calculateFaceCount, getFileName, createTextSprite } from './core/utils';

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
  private gridHelper: GridHelper | null = null;
  private axesHelper: AxesHelper | null = null;
  private axisLabels: { x: any, y: any, z: any } | null = null;
  private zoomControls: ExploderZoomControls | null = null;
  private boundOnWheel: ((event: WheelEvent) => void) | null = null;
  
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
    const { viewport, model, modelUrl } = this.options;
    
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

    this.renderer = new WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      logarithmicDepthBuffer: true // 解决深度冲突（Z-fighting）导致的闪烁问题
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT;
    
    // 启用阴影支持并优化阴影质量
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = 2; // THREE.PCFSoftShadowMap
    
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    
    // 针对移动端优化
    this.controls.enableZoom = true;
    this.controls.enableRotate = true;
    this.controls.enablePan = true;
    this.controls.touches = {
      ONE: TOUCH.ROTATE, // 单指旋转
      TWO: TOUCH.DOLLY_PAN // 双指缩放和平移
    };

    // 禁用缩放（如果开启了滚轮控制爆炸）
    if (this.options.wheelControlExplosion) {
      this.controls.enableZoom = false;
    }

    // 3. 添加灯光
    // 基础保底光 (AmbientLight)，确保全局基本亮度，防止死角纯黑
    this.scene.add(new AmbientLight(0xffffff, 0.4));
    
    // 实现“无影灯”效果：创建一组锁定在相机前方的灯光
    const cameraLightGroup = new Object3D();
    this.camera.add(cameraLightGroup);
    this.scene.add(this.camera); // 确保相机已添加到场景，其子对象才能渲染

    // 核心主灯（稍微偏移相机中心）
    const mainSun = new DirectionalLight(0xffffff, 0.8);
    mainSun.position.set(2, 5, 5); // 相机本地坐标
    mainSun.castShadow = true;
    mainSun.shadow.bias = -0.0001;
    mainSun.shadow.normalBias = 0.02;
    mainSun.shadow.mapSize.width = 2048;
    mainSun.shadow.mapSize.height = 2048;
    
    // 目标点位于相机前方
    const mainTarget = new Object3D();
    mainTarget.position.set(0, 0, -5);
    cameraLightGroup.add(mainTarget);
    mainSun.target = mainTarget;
    cameraLightGroup.add(mainSun);

    // 环绕无影灯（3 个补光点，配合核心主灯形成无影效果）
    const fillCount = 3;
    const fillRadius = 5;
    for (let i = 0; i < fillCount; i++) {
      const angle = (i / fillCount) * Math.PI * 2;
      const fillLight = new DirectionalLight(0xffffff, 0.4);
      fillLight.position.set(Math.cos(angle) * fillRadius, Math.sin(angle) * fillRadius, 2);
      
      const target = new Object3D();
      target.position.set(0, 0, -5);
      cameraLightGroup.add(target);
      fillLight.target = target;
      
      cameraLightGroup.add(fillLight);
    }

    // 增加右上角强力填充灯 (主灯 0.8 * 0.8 = 0.64)
    const extraFillLight = new DirectionalLight(0xffffff, 0.64);
    // 右上角 (X=5, Y=5)，位置锁定在相机前方 (Z=2)
    extraFillLight.position.set(5, 5, 2);
    const extraTarget = new Object3D();
    extraTarget.position.set(0, 0, -5);
    cameraLightGroup.add(extraTarget);
    extraFillLight.target = extraTarget;
    cameraLightGroup.add(extraFillLight);

    // 4. 添加辅助器 (网格和坐标轴)
    this.gridHelper = new GridHelper(10, 10, 0xcccccc, 0x888888);
    this.axesHelper = new AxesHelper(5);
    // 默认关闭，由用户通过面板或 API 开启
    this.gridHelper.visible = false;
    this.axesHelper.visible = false;
    this.scene.add(this.gridHelper);
    this.scene.add(this.axesHelper);

    // 4.1 添加坐标轴标签
    const labelX = createTextSprite('X', '#FF4444');
    const labelY = createTextSprite('Y', '#44FF44');
    const labelZ = createTextSprite('Z', '#4444FF');
    
    // 默认关闭
    labelX.visible = false;
    labelY.visible = false;
    labelZ.visible = false;
    labelX.position.set(5.5, 0, 0);
    labelY.position.set(0, 5.5, 0);
    labelZ.position.set(0, 0, 5.5);
    
    this.axisLabels = { x: labelX, y: labelY, z: labelZ };
    this.scene.add(labelX, labelY, labelZ);

    // 5. 加载模型
    // 优先级: modelUrl > model(string) > model(Object3D)
    const finalUrl = modelUrl || (typeof model === 'string' ? model : null);
    
    if (finalUrl) {
      const loader = new GLTFLoader();
      loader.load(finalUrl, (gltf) => {
        const loadedModel = gltf.scene;
        
        // 启用模型阴影
        loadedModel.traverse((node) => {
          if ((node as any).isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        this.scene?.add(loadedModel);
        this.initCore(loadedModel, this.scene!, this.camera!, this.renderer!, this.options);
      });
    } else if (model instanceof Object3D) {
      // 启用模型阴影
      model.traverse((node) => {
        if ((node as any).isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      
      this.scene.add(model);
      this.initCore(model, this.scene, this.camera, this.renderer, this.options);
    }

    // 6. 启动渲染循环
    this.animate();

    // 7. 监听窗口变化
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
    // 销毁旧核心（如果存在），但保留 UI
    if (this.core) {
      this.core.dispose();
    }
    
    this.core = new ExploderCore(model, scene, camera, renderer, options);
    
    // 计算面数和获取名称
    const faceCount = calculateFaceCount(model);
    let modelName = 'Unknown Model';
    if (this.options.modelUrl) {
      modelName = getFileName(this.options.modelUrl);
    } else if (typeof options.model === 'string') {
      modelName = getFileName(options.model);
    } else if (model.name) {
      modelName = model.name;
    }

    // 只有在 UI 不存在时才创建
    if (options.createUI !== false && !this.ui) {
      this.ui = createUI(
        options,
        this.setProgress.bind(this),
        this.setMultiplier.bind(this),
        this.setExposure.bind(this),
        this.setMode.bind(this),
        this.setAxialVector.bind(this),
        this.handleModelChange.bind(this),
        this.handleHelperVisibilityChange.bind(this),
        this.reset.bind(this),
        EXPLODER_CONSTANTS.PROGRESS.DEFAULT,
        EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT,
        renderer.toneMappingExposure,
        this.core.getMode(),
        this.core.getAxialVector(),
        false,
        modelName,
        faceCount
      );
    } else if (this.ui) {
      // 如果 UI 已存在，仅更新其显示信息
      this.ui.update(EXPLODER_CONSTANTS.PROGRESS.DEFAULT);
      if (this.ui.updateInfo) {
        this.ui.updateInfo(modelName, faceCount);
      }
    }

    // 只有在缩放控件不存在时才创建
    if (this.container && this.controls && !this.zoomControls) {
      const styles = createStyles(options.uiStyle);
      this.zoomControls = new ExploderZoomControls(this.container, this.controls, styles);
    }

    // 监听滚轮事件（如果开启了滚轮控制爆炸且尚未监听）
    if (this.options.wheelControlExplosion && this.renderer) {
      if (!this.boundOnWheel) {
        this.boundOnWheel = this.onWheel.bind(this);
      }
      // 先尝试移除，防止重复监听
      this.renderer.domElement.removeEventListener('wheel', this.boundOnWheel);
      this.renderer.domElement.addEventListener('wheel', this.boundOnWheel, { passive: false });
    }
  }

  /**
   * 滚轮事件处理
   */
  private onWheel(event: WheelEvent): void {
    if (!this.core) return;
    
    // 阻止默认缩放行为
    event.preventDefault();

    const delta = event.deltaY > 0 ? 0.05 : -0.05;
    const currentProgress = this.core.getProgress();
    const newProgress = Math.min(1, Math.max(0, currentProgress + delta));
    
    this.setProgress(newProgress);
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

      // 3. 重新初始化核心（内部会处理 UI 更新或创建）
      this.initCore(newModel, this.scene!, this.camera!, this.renderer!, this.options);

      // 4. 更新 UI 特定状态（如模型路径）
      if (this.ui && this.ui.updateModel) {
        this.ui.updateModel(modelPath);
      }

      // 5. 如果是 Blob URL，释放它以防内存泄漏
      if (modelPath.startsWith('blob:')) {
        // 延迟释放，确保加载完成
        setTimeout(() => URL.revokeObjectURL(modelPath), 1000);
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
    
    // 更新辅助器可见性
    if (this.gridHelper) this.gridHelper.visible = visible;
    if (this.axesHelper) this.axesHelper.visible = visible;
    if (this.axisLabels) {
      this.axisLabels.x.visible = visible;
      this.axisLabels.y.visible = visible;
      this.axisLabels.z.visible = visible;
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
   * 设置辅助器可见性 (网格、坐标轴等)
   * @param visible 是否可见
   */
  public setHelperVisibility(visible: boolean): void {
    this.handleHelperVisibilityChange(visible);
    // 同步更新 UI 状态
    if (this.ui && this.ui.updateHelperVisibility) {
      this.ui.updateHelperVisibility(visible);
    }
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
    // 1. 重置核心算法状态
    this.core?.reset();
    
    // 2. 重置相机视角 (全自动模式)
    if (this.controls && this.camera && this.options.adaptModel) {
      this.controls.reset();
      // 重新执行一次模型适配以确保视角正确
      if (this.core) {
        const model = (this.core as any).model;
        if (model) {
          // 这里我们简单地重置 controls 和 camera 到初始位置
          this.camera.position.set(5, 5, 5);
          this.camera.lookAt(0, 0, 0);
          this.controls.target.set(0, 0, 0);
          this.controls.update();
        }
      }
    }

    // 3. 重置渲染器参数
    this.setExposure(EXPLODER_CONSTANTS.EXPOSURE.DEFAULT);

    // 4. 重置 UI 状态
    if (this.ui) {
      this.ui.reset?.();
      // 显式调用各个更新方法以确保同步
      this.ui.update(EXPLODER_CONSTANTS.PROGRESS.DEFAULT);
      this.ui.updateMultiplier?.(EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT);
      this.ui.updateExposure?.(EXPLODER_CONSTANTS.EXPOSURE.DEFAULT);
      this.ui.updateMode?.(ExplosionMode.RADIAL);
      this.ui.updateAxialVector?.(new Vector3(0, 1, 0));
      this.ui.updateHelperVisibility?.(true);
      // 同时重置内部辅助器状态
      this.handleHelperVisibilityChange(true);
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

    if (this.zoomControls) {
      this.zoomControls.dispose();
      this.zoomControls = null;
    }
    
    // 释放辅助器
    if (this.gridHelper) {
      this.scene?.remove(this.gridHelper);
      this.gridHelper.geometry.dispose();
      if (Array.isArray(this.gridHelper.material)) {
        this.gridHelper.material.forEach(m => m.dispose());
      } else {
        this.gridHelper.material.dispose();
      }
      this.gridHelper = null;
    }
    if (this.axesHelper) {
      this.scene?.remove(this.axesHelper);
      this.axesHelper.geometry.dispose();
      if (Array.isArray(this.axesHelper.material)) {
        this.axesHelper.material.forEach(m => m.dispose());
      } else {
        this.axesHelper.material.dispose();
      }
      this.axesHelper = null;
    }

    // 释放标签
    if (this.axisLabels) {
      const { x, y, z } = this.axisLabels;
      [x, y, z].forEach(label => {
        this.scene?.remove(label);
        label.geometry.dispose();
        if (Array.isArray(label.material)) {
          label.material.forEach((m: any) => m.dispose());
        } else {
          label.material.dispose();
        }
        if (label.material.map) label.material.map.dispose();
      });
      this.axisLabels = null;
    }

    this.core?.dispose();
  }
}

// 导出类型和枚举
export type { ExploderOptions, ProgressChangeCallback } from './core/types';