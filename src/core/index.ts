import { Object3D, Scene, Camera, WebGLRenderer, Vector3, Euler, Box3, Sphere, Mesh, AmbientLight, DirectionalLight, HemisphereLight } from 'three';
import { ExploderOptions, ProgressChangeCallback, ExplosionMode, EXPLODER_CONSTANTS } from './types';
import { calculateDirection, clamp } from './utils';

/**
 * GLTFExploder 核心引擎
 * 负责处理模型爆炸逻辑
 */
export class ExploderCore {
  private model: Object3D;
  private scene: Scene;
  private camera: Camera;
  private renderer: WebGLRenderer;
  private options: Required<ExploderOptions>;
  private progress = EXPLODER_CONSTANTS.PROGRESS.DEFAULT;
  private multiplier = EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT;
  private mode: ExplosionMode = ExplosionMode.RADIAL;
  
  // 存储原始位置、方向和缩放
  private originalPositions: Map<Object3D, Vector3> = new Map();
  private originalRotations: Map<Object3D, Euler> = new Map();
  private originalScales: Map<Object3D, Vector3> = new Map();
  
  // 存储爆炸方向
  private explodeDirections: Map<Object3D, Vector3> = new Map();
  // 存储轴向投影距离（归一化到 0-1 范围，用于轴向分层模式）
  private axialDistances: Map<Object3D, number> = new Map();
  // 存储部件体积权重（用于尺寸加权模式）
  private sizeWeights: Map<Object3D, number> = new Map();
  // 存储部件在装配树中的深度（用于装配树分级模式）
  private hierarchicalDepths: Map<Object3D, number> = new Map();
  
  // 模型中心点
  private modelCenter: Vector3;
  // 模型参考半径（用于力场计算）
  private modelRadius = 1.0;
  // 模型自适应缩放比例 (影响测量真实性)
  private visualScale = 1.0;
  
  // 进度变化回调
  private onProgressChangeCallback: ProgressChangeCallback | null = null;
  
  // 可爆炸的网格列表（过滤掉空对象和辅助对象）
  private explodableMeshes: Object3D[] = [];
  
  // 内部管理的灯光组
  private internalLights: (AmbientLight | DirectionalLight | HemisphereLight)[] = [];

  /**
   * 创建一个新的 ExploderCore 实例
   * 
   * @param model - 要爆炸的 glTF/GLB 模型
   * @param scene - Three.js 场景
   * @param camera - Three.js 相机
   * @param renderer - Three.js 渲染器
   * @param options - 配置选项
   */
  constructor(
    model: Object3D,
    scene: Scene,
    camera: Camera,
    renderer: WebGLRenderer,
    options: ExploderOptions = {}
  ) {
    this.model = model;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    
    // 设置默认选项
    this.options = {
      maxDistance: options.maxDistance ?? EXPLODER_CONSTANTS.DEFAULT_MAX_DISTANCE,
      duration: options.duration ?? EXPLODER_CONSTANTS.DEFAULT_DURATION,
      createUI: options.createUI ?? true,
      viewport: options.viewport ?? document.body,
      uiStyle: options.uiStyle ?? {
        width: '200px',
        height: '30px',
        position: 'bottom'
      },
      directionStrategy: options.directionStrategy ?? calculateDirection,
      mode: options.mode ?? ExplosionMode.RADIAL,
      axialVector: options.axialVector ?? new Vector3(0, 1, 0),
      adaptModel: options.adaptModel ?? true,
      model: options.model ?? model,
      modelUrl: options.modelUrl || '',
      showUpload: options.showUpload ?? false,
      showHelpers: options.showHelpers ?? false,
      showPanel: options.showPanel ?? true,
      showProgress: options.showProgress ?? true,
      wheelControlExplosion: options.wheelControlExplosion ?? false,
      models: options.models ?? [],
      initialModel: options.initialModel ?? ''
    };
    
    this.mode = this.options.mode;

    // 如果开启了自适应模型，先执行缩放和居中
    if (this.options.adaptModel) {
      this.adaptModelToScene();
    }
    
    // 计算模型中心和参考半径
    const box = new Box3().setFromObject(this.model);
    this.modelCenter = box.getCenter(new Vector3());
    const sphere = box.getBoundingSphere(new Sphere());
    this.modelRadius = sphere.radius || 1.0;
    
    // 保存原始变换和计算爆炸方向
    this.saveOriginalTransforms(this.model);

    // 初始化 6 点位全方位光照系统
    this.setupInternalLighting();
  }
  
  /**
   * 自动缩放和居中模型
   * @private
   */
  private adaptModelToScene(): void {
    const box = new Box3().setFromObject(this.model);
    // const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    if (maxDim > 0) {
      // 统一缩放基准：将模型缩放到约 5 个单位大小
      const scale = EXPLODER_CONSTANTS.DEFAULT_ADAPT_SIZE / maxDim;
      this.visualScale = scale;
      this.model.scale.multiplyScalar(scale);
      
      // 重新计算中心点（缩放后）
      const newBox = new Box3().setFromObject(this.model);
      const newCenter = newBox.getCenter(new Vector3());
      
      // 将模型中心移动到原点
      this.model.position.sub(newCenter);
    }
  }

  /**
   * 初始化 6 点位“无影灯”光照系统
   * 灯光锁定在相机前方，随视角同步移动，确保模型永远被均匀照射
   * @private
   */
  private setupInternalLighting(): void {
    // 1. 基础保底光 (AmbientLight)，确保没有任何死角是纯黑的
    const ambientLight = new AmbientLight(0xffffff, EXPLODER_CONSTANTS.LIGHTS.INTERNAL.AMBIENT);
    this.scene.add(ambientLight);
    this.internalLights.push(ambientLight);

    // 2. 半球光，模拟环境反射
    const hemisphereLight = new HemisphereLight(0xffffff, 0x444444, EXPLODER_CONSTANTS.LIGHTS.INTERNAL.HEMISPHERE);
    this.scene.add(hemisphereLight);
    this.internalLights.push(hemisphereLight);

    // 3. 3 点位“无影灯”系统（锁定在相机坐标系）
    // 我们将灯光添加为相机的子对象，这样它们会随相机旋转和移动
    const lightGroup = new Object3D();
    this.camera.add(lightGroup);
    
    // 环绕相机的 3 个点位，形成等边三角形无影灯阵列
    const count = 3;
    const radius = 3; 
    
    for (let i = 0; i < count; i++) {
      // 0, 120, 240 度排列
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      const light = new DirectionalLight(0xffffff, EXPLODER_CONSTANTS.LIGHTS.INTERNAL.DIRECTIONAL);
      
      // 在相机本地坐标系中
      light.position.set(x, y, 1); 
      
      const target = new Object3D();
      target.position.set(0, 0, -5); // 统一指向相机正前方中心
      lightGroup.add(target);
      light.target = target;
      
      lightGroup.add(light);
      this.internalLights.push(light);
    }

    // 4. 右上角强力填充灯 (锁定在相机坐标系，主灯强度的 80%)
    const fillLightIntensity = EXPLODER_CONSTANTS.LIGHTS.INTERNAL.DIRECTIONAL * 0.8;
    const topRightFill = new DirectionalLight(0xffffff, fillLightIntensity);
    // 放在相机右上角 (X=5, Y=5)，深度位置与主阵列一致 (Z=2)
    topRightFill.position.set(5, 5, 2); 
    const fillTarget = new Object3D();
    fillTarget.position.set(0, 0, -5); // 斜向指向相机前方中心
    lightGroup.add(fillTarget);
    topRightFill.target = fillTarget;
    lightGroup.add(topRightFill);
    this.internalLights.push(topRightFill);

    // 注意：如果使用的是全自动模式，camera 已经添加到 scene 中了
    // 如果是手动集成模式，用户需要确保 camera 在 scene 中或者其变换会被更新
  }
  
  /**
   * 设置内部灯光可见性
   * @param visible 是否可见
   */
  public setInternalLightingVisible(visible: boolean): void {
    this.internalLights.forEach(light => {
      light.visible = visible;
    });
    
    // 重新渲染
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 设置内部灯光亮度
   * @param exposure 亮度倍率
   */
  public setInternalLightingExposure(exposure: number): void {
    this.internalLights.forEach(light => {
      if (light instanceof AmbientLight) {
        light.intensity = EXPLODER_CONSTANTS.LIGHTS.INTERNAL.AMBIENT * exposure;
      } else if (light instanceof HemisphereLight) {
        light.intensity = EXPLODER_CONSTANTS.LIGHTS.INTERNAL.HEMISPHERE * exposure;
      } else if (light instanceof DirectionalLight) {
        light.intensity = EXPLODER_CONSTANTS.LIGHTS.INTERNAL.DIRECTIONAL * exposure;
      }
    });

    // 重新渲染
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 计算所有部件在当前轴向上的投影距离，并进行归一化处理
   * @private
   */
  private calculateAxialDistances(): void {
    const axialDir = this.options.axialVector.clone().normalize();
    
    // 1. 计算模型在当前轴向上的包围盒范围
    const box = new Box3().setFromObject(this.model);
    const min = box.min.dot(axialDir);
    const max = box.max.dot(axialDir);
    const axialSize = Math.abs(max - min);

    // 2. 归一化投影距离
    // 如果 axialSize 太小，说明模型在轴向上几乎没有厚度，归一化无意义
    const scale = axialSize > 0.0001 ? 1 / axialSize : 1;

    for (const mesh of this.explodableMeshes) {
      const originalPosition = this.originalPositions.get(mesh);
      if (originalPosition) {
        // 计算部件相对于模型中心的轴向投影
        const relativePos = originalPosition.clone().sub(this.modelCenter);
        const dist = relativePos.dot(axialDir);
        
        // 归一化：将投影距离映射到 -0.5 到 0.5 之间（相对于中心）
        // 这样不同轴向下的位移量将与该轴向的总尺寸解耦
        this.axialDistances.set(mesh, dist * scale);
      }
    }
  }

  /**
   * 保存模型各部分的原始位置、旋转和缩放，并计算爆炸方向
   * @private
   */
  private saveOriginalTransforms(object: Object3D): void {
    // 递归遍历所有对象并填充 explodableMeshes
    this.traverseAndSave(object);
    
    // 遍历完成后计算轴向投影
    this.calculateAxialDistances();
    // 计算部件体积权重
    this.calculateSizeWeights();
    // 计算层级深度
    this.calculateHierarchicalDepths();
  }

  /**
   * 计算所有部件在装配树中的深度
   * @private
   */
  private calculateHierarchicalDepths(): void {
    let maxDepth = 0;
    const depths = new Map<Object3D, number>();

    for (const mesh of this.explodableMeshes) {
      let depth = 0;
      let parent = mesh.parent;
      // 向上溯源直到找到模型根节点
      while (parent && parent !== this.model) {
        depth++;
        parent = parent.parent;
      }
      depths.set(mesh, depth);
      maxDepth = Math.max(maxDepth, depth);
    }

    // 归一化深度权重
    // 采用：深度越深（叶子节点/小子装配体），位移权重越大
    // 效果：内部的小零件会迅速弹出，外部的大组件位移较慢
    const scale = maxDepth > 0 ? 1 / maxDepth : 1;
    for (const [mesh, depth] of depths) {
      // 基础权重，加上深度加权
      this.hierarchicalDepths.set(mesh, EXPLODER_CONSTANTS.WEIGHTS.BASE + (depth * scale) * EXPLODER_CONSTANTS.WEIGHTS.SCALE);
    }
  }

  /**
   * 计算所有部件的体积权重
   * @private
   */
  private calculateSizeWeights(): void {
    let maxVolume = 0;
    const volumes = new Map<Object3D, number>();

    for (const mesh of this.explodableMeshes) {
      if (mesh instanceof Mesh) {
        const geometry = mesh.geometry;
        if (!geometry.boundingBox) {
          geometry.computeBoundingBox();
        }
        const box = geometry.boundingBox;
        if (box) {
          const size = new Vector3();
          box.getSize(size);
          // 计算包围盒体积
          const volume = size.x * size.y * size.z;
          volumes.set(mesh, volume);
          maxVolume = Math.max(maxVolume, volume);
        }
      }
    }

    // 归一化权重：体积越大的部件，位移权重越小（大零件通常位移慢，小零件位移快）
    // 或者根据需求：体积越大的部件，位移权重越大（更容易被推开）
    // 这里采用：体积越大，位移权重越大（符合“尺寸加权”直觉）
    const scale = maxVolume > 0 ? 1 / maxVolume : 1;
    for (const [mesh, vol] of volumes) {
      // 基础位移权重，加上体积加权部分
      this.sizeWeights.set(mesh, EXPLODER_CONSTANTS.WEIGHTS.BASE + (vol * scale) * EXPLODER_CONSTANTS.WEIGHTS.SCALE);
    }
  }

  /**
   * 递归遍历对象树并保存原始变换
   * @private
   */
  private traverseAndSave(object: Object3D): void {
    // 跳过不可见对象
    if (!object.visible) {
      return;
    }
    
    // 保存当前对象的位置
    const position = new Vector3();
    object.getWorldPosition(position);
    this.originalPositions.set(object, position.clone());
    
    // 保存旋转和缩放（如果有）
    if (object.rotation) {
      this.originalRotations.set(object, object.rotation.clone());
    }
    
    if (object.scale) {
      this.originalScales.set(object, object.scale.clone());
    }
    
    // 如果是网格对象（有几何体），则添加到可爆炸列表
    if ('isMesh' in object && object['isMesh'] === true) {
      this.explodableMeshes.push(object);
      
      // 计算爆炸方向（从中心点向外）
      const direction = this.options.directionStrategy(object, this.modelCenter);
      this.explodeDirections.set(object, direction);
    }
    
    // 递归处理子对象
    object.children.forEach(child => {
      this.traverseAndSave(child);
    });
  }
  
  /**
   * 设置新模型
   * @param model 新的模型对象
   */
  public setModel(model: Object3D): void {
    // 1. 重置当前进度
    this.reset();
    
    // 2. 更新模型引用
    this.model = model;

    // 如果开启了自适应模型，执行缩放和居中
    if (this.options.adaptModel) {
      this.adaptModelToScene();
    } else {
      this.visualScale = 1.0;
    }
    
    // 3. 计算新模型的中心和半径
    const box = new Box3().setFromObject(this.model);
    this.modelCenter = box.getCenter(new Vector3());
    const sphere = box.getBoundingSphere(new Sphere());
    this.modelRadius = sphere.radius || 1.0;
    
    // 4. 清理旧缓存
    this.originalPositions.clear();
    this.originalRotations.clear();
    this.originalScales.clear();
    this.explodeDirections.clear();
    this.sizeWeights.clear();
    this.axialDistances.clear();
    this.hierarchicalDepths.clear();
    this.explodableMeshes = [];
    
    // 5. 重新保存变换
    this.saveOriginalTransforms(this.model);
    
    // 6. 更新灯光位置
    this.updateInternalLighting();
    
    // 7. 重新渲染
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 更新内部灯光位置和目标
   * @private
   */
  private updateInternalLighting(): void {
    const lightDist = this.modelRadius * 3;
    const directions = [
      [1, 0, 0], [-1, 0, 0],
      [0, 1, 0], [0, -1, 0],
      [0, 0, 1], [0, 0, -1]
    ];
    
    // 获取所有的平行光
    const dirLights = this.internalLights.filter(l => l instanceof DirectionalLight) as DirectionalLight[];
    
    if (dirLights.length === directions.length) {
      // 如果灯光数量一致，只更新位置和目标
      dirLights.forEach((light, i) => {
        const [x, y, z] = directions[i];
        light.position.set(
          this.modelCenter.x + x * lightDist,
          this.modelCenter.y + y * lightDist,
          this.modelCenter.z + z * lightDist
        );
        light.target = this.model;
      });
    } else {
      // 否则重新初始化
      this.internalLights.forEach(light => {
        this.scene.remove(light);
        if (light.dispose) light.dispose();
      });
      this.internalLights = [];
      this.setupInternalLighting();
    }
  }

  /**
   * 设置爆炸进度（0-1 之间的值）
   * 
   * @param progress - 爆炸进度，0 表示未爆炸，1 表示完全爆炸
   */
  public setProgress(progress: number): void {
    // 确保进度值在 0-1 之间
    this.progress = clamp(progress, EXPLODER_CONSTANTS.PROGRESS.MIN, EXPLODER_CONSTANTS.PROGRESS.MAX);
    
    // 更新模型位置
    this.updateExplodedPositions();
    
    // 触发进度变化回调
    if (this.onProgressChangeCallback) {
      this.onProgressChangeCallback(this.progress);
    }
    
    // 重新渲染场景
    this.renderer.render(this.scene, this.camera);
  }
  
  /**
   * 根据当前进度更新爆炸后的位置
   * @private
   */
  private updateExplodedPositions(): void {
    // 只处理可爆炸的网格
    for (const mesh of this.explodableMeshes) {
      const originalPosition = this.originalPositions.get(mesh);
      const direction = this.explodeDirections.get(mesh);
      
      if (originalPosition && direction) {
        // 计算基础爆炸距离
        // 改进：位移量应该与模型半径挂钩，确保不同尺寸的模型表现一致
        // 基础距离 = 模型半径 * 最大距离系数 * 进度 * 倍率
        const baseDistance = this.modelRadius * this.options.maxDistance * this.progress * this.multiplier;
        
        const targetWorldPosition = originalPosition.clone();
        
        // 根据不同模式计算位置和旋转
        switch (this.mode) {
          case ExplosionMode.RADIAL:
            // 径向爆炸：基于中心点的散度位移
            targetWorldPosition.add(direction.clone().multiplyScalar(baseDistance));
            break;
            
          case ExplosionMode.AXIAL: {
            // 轴向分层爆炸：沿特定轴线按投影距离偏移
            const axialDistance = this.axialDistances.get(mesh) || 0;
            const axialDir = this.options.axialVector.clone().normalize();
            // 位移量 = 轴向投影值 * 进度 * 系数 * 基础位移参考
            // 这里 axialDistance 已经是归一化到 -0.5 到 0.5 的，所以乘以半径和 maxDistance 比较合理
            targetWorldPosition.add(axialDir.multiplyScalar(axialDistance * this.modelRadius * this.options.maxDistance * this.progress * this.multiplier));
            break;
          }
            
          case ExplosionMode.NORMALIZED_RADIAL: {
            // 归一化径向爆炸：按距离中心的比例拉开
            // 计算原始相对位移向量
            const relativePos = originalPosition.clone().sub(this.modelCenter);
            // 改进：不再直接使用 relativePos，而是将其与 progress * multiplier * maxDistance 结合
            // 效果：整体像气球一样膨胀，位移量与模型原始尺寸成比例，但受 maxDistance 约束
            targetWorldPosition.add(relativePos.multiplyScalar(this.options.maxDistance * this.progress * this.multiplier));
            break;
          }
            
          case ExplosionMode.SIZE_WEIGHTED: {
            // 尺寸加权爆炸：位移距离与零件体积正相关
            const weight = this.sizeWeights.get(mesh) || 1.0;
            // 位移 = 基础距离 * 体积权重
            targetWorldPosition.add(direction.clone().multiplyScalar(baseDistance * weight));
            break;
          }
            
          case ExplosionMode.HIERARCHICAL: {
            // 装配树分级爆炸：位移距离与层级深度正相关
            const depthWeight = this.hierarchicalDepths.get(mesh) || 1.0;
            // 位移 = 基础距离 * 深度权重
            targetWorldPosition.add(direction.clone().multiplyScalar(baseDistance * depthWeight));
            break;
          }
            
          case ExplosionMode.FORCE_FIELD: {
            // 力场式爆炸：模拟从中心向外的势场衰减效果
            const originalPos = this.originalPositions.get(mesh);
            if (originalPos) {
              const relativePos = originalPos.clone().sub(this.modelCenter);
              const r = relativePos.length();
              const rNorm = r / this.modelRadius;
              // 模拟力场强度：随距离增加而衰减
              const forceMagnitude = 1.0 / (rNorm + EXPLODER_CONSTANTS.WEIGHTS.FORCE_FIELD_OFFSET);
              targetWorldPosition.add(direction.clone().multiplyScalar(baseDistance * forceMagnitude));
            }
            break;
          }
        }
        
        // 将世界坐标转换为父对象的局部坐标
        if (mesh.parent) {
          mesh.parent.worldToLocal(targetWorldPosition);
        }
        
        // 更新对象位置
        mesh.position.copy(targetWorldPosition);
      }
    }
  }

  /**
   * 设置爆炸模式
   * @param mode 爆炸模式
   */
  public setMode(mode: ExplosionMode): void {
    this.mode = mode;
    this.updateExplodedPositions();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 获取当前爆炸模式
   * @returns 当前模式
   */
  public getMode(): ExplosionMode {
    return this.mode;
  }
  
  /**
   * 设置轴向向量
   * @param vector 轴向向量
   */
  public setAxialVector(vector: Vector3): void {
    this.options.axialVector.copy(vector);
    // 重新计算并归一化投影距离
    this.calculateAxialDistances();
    
    this.updateExplodedPositions();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 获取当前轴向向量
   * @returns 轴向向量
   */
  public getAxialVector(): Vector3 {
    return this.options.axialVector;
  }

  /**
   * 重置模型到原始状态
   */
  public reset(): void {
    this.progress = 0;
    
    // 恢复所有网格到原始位置
    this.resetToOriginalPositions();
    
    // 触发进度变化回调
    if (this.onProgressChangeCallback) {
      this.onProgressChangeCallback(this.progress);
    }
  }
  
  /**
   * 将所有网格恢复到原始位置
   * @private
   */
  private resetToOriginalPositions(): void {
    // 恢复所有可爆炸网格的原始变换
    for (const mesh of this.explodableMeshes) {
      const originalPosition = this.originalPositions.get(mesh);
      const originalRotation = this.originalRotations.get(mesh);
      const originalScale = this.originalScales.get(mesh);
      
      if (originalPosition) {
        // 同样需要考虑局部坐标转换
        const targetPosition = originalPosition.clone();
        if (mesh.parent) {
          mesh.parent.worldToLocal(targetPosition);
        }
        mesh.position.copy(targetPosition);
      }
      
      if (originalRotation && mesh.rotation) {
        mesh.rotation.set(originalRotation.x, originalRotation.y, originalRotation.z);
      }
      
      if (originalScale && mesh.scale) {
        mesh.scale.set(originalScale.x, originalScale.y, originalScale.z);
      }
    }
  }
  
  /**
   * 设置进度变化回调
   * @param callback 回调函数
   */
  public setProgressChangeCallback(callback: ProgressChangeCallback): void {
    this.onProgressChangeCallback = callback;
  }
  
  /**
   * 设置爆炸系数（控制爆炸程度的倍率）
   * 
   * @param multiplier - 爆炸系数，默认值为 1
   */
  public setMultiplier(multiplier: number): void {
    this.multiplier = clamp(multiplier, EXPLODER_CONSTANTS.MULTIPLIER.MIN, EXPLODER_CONSTANTS.MULTIPLIER.MAX);
    
    // 始终更新模型位置（即使进度为 0，因为之后进度变化会用到这个系数）
    this.updateExplodedPositions();
    
    // 重新渲染场景
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * 获取当前爆炸系数
   * @returns 当前爆炸系数
   */
  public getMultiplier(): number {
    return this.multiplier;
  }

  /**
   * 获取当前进度
   * @returns 当前进度值（0-1）
   */
  public getProgress(): number {
    return this.progress;
  }
  
  /**
   * 获取模型中心点
   * @returns 模型中心点坐标
   */
  public getModelCenter(): Vector3 {
    return this.modelCenter.clone();
  }
  
  /**
   * 获取配置选项
   * @returns 配置选项
   */
  public getOptions(): Required<ExploderOptions> {
    return this.options;
  }

  /**
   * 获取视觉缩放比例
   */
  public getVisualScale(): number {
    return this.visualScale;
  }
  
  /**
   * 销毁实例，清理资源
   */
  public dispose(): void {
    // 1. 移除所有内部灯光
    this.internalLights.forEach(light => {
      this.scene.remove(light);
      if (light.dispose) {
        light.dispose();
      }
    });
    this.internalLights = [];

    // 2. 重置模型到原始状态
    this.reset();
    
    // 3. 清空所有缓存的数据
    this.originalPositions.clear();
    this.originalRotations.clear();
    this.originalScales.clear();
    this.explodeDirections.clear();
    this.sizeWeights.clear();
    this.axialDistances.clear();
    this.hierarchicalDepths.clear();
    this.explodableMeshes = [];
    
    // 4. 移除回调
    this.onProgressChangeCallback = null;
  }
}
