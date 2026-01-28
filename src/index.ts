import { Object3D, Scene, Camera, WebGLRenderer, Vector3 } from 'three';
import { ExploderCore } from './core';
import { ExploderUI, ExploderOptions, ProgressChangeCallback, ExplosionMode, ModelChangeCallback, HelperVisibilityChangeCallback, EXPLODER_CONSTANTS } from './core/types';
import { createUI } from './ui';

/**
 * GLTFExploder 类
 * 用于创建 glTF/GLB 模型的爆炸视图
 */
export class GLTFExploder {
  private core: ExploderCore;
  private ui: ExploderUI | null = null;
  private renderer: WebGLRenderer;
  private onModelChangeCallback?: ModelChangeCallback;
  private onHelperVisibilityChangeCallback?: HelperVisibilityChangeCallback;
  
  /**
   * 构造函数
   * @param model 模型对象
   * @param scene 场景
   * @param camera 相机
   * @param renderer 渲染器
   * @param options 配置选项
   */
  constructor(
    model: Object3D,
    scene: Scene,
    camera: Camera,
    renderer: WebGLRenderer,
    options: ExploderOptions = {}
  ) {
    this.renderer = renderer;
    // 创建核心引擎
    this.core = new ExploderCore(model, scene, camera, renderer, options);
    
    // 创建 UI
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
        true // 初始辅助显示为 true
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
    }
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
   * 设置爆炸进度
   * @param progress 进度值（0-1）
   */
  public setProgress(progress: number): void {
    this.core.setProgress(progress);
    
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
    this.core.setMultiplier(multiplier);
    
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
      this.renderer.toneMappingExposure = exposure;
      
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
    this.core.setMode(mode);
    
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
    this.core.setAxialVector(vector);
    
    // 更新 UI
    if (this.ui && this.ui.updateAxialVector) {
      this.ui.updateAxialVector(vector);
    }
  }

  /**
   * 重置爆炸视图
   */
  public reset(): void {
    this.core.reset();
    
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
    this.core.setProgressChangeCallback(callback);
  }
  
  /**
   * 获取当前进度
   * @returns 当前进度值（0-1）
   */
  public getProgress(): number {
    return this.core.getProgress();
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
    this.core.dispose();
    
    if (this.ui) {
      this.ui.dispose();
      this.ui = null;
    }
  }
}

// 导出类型和枚举
export type { ExploderOptions, ProgressChangeCallback } from './core/types';
export { UIType } from './ui';