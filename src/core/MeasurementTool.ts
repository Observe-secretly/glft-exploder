import { Vector3, Vector2, Camera, Scene, Raycaster, Object3D, BufferGeometry, Mesh, Box3 } from 'three';
import { Octree } from './Octree';
import { SnapDetector, Edge } from './SnapDetector';
import { 
  SnapMode, 
  MeasurementUnit, 
  MeasurementConfig, 
  SnapResult, 
  MeasurementResult, 
  MeasureStartCallback, 
  MeasureCompleteCallback, 
  SnapDetectedCallback, 
  DEFAULT_MEASUREMENT_CONFIG 
} from './MeasurementTypes';

export { 
  SnapMode, 
  MeasurementUnit, 
  MeasurementConfig, 
  SnapResult, 
  MeasurementResult, 
  MeasureStartCallback, 
  MeasureCompleteCallback, 
  SnapDetectedCallback, 
  DEFAULT_MEASUREMENT_CONFIG 
};

/**
 * 测量工具类
 * 负责处理 3D 模型的测量功能,包括吸附、距离计算等
 */
export class MeasurementTool {
  private config: MeasurementConfig;
  private camera: Camera;
  private raycaster: Raycaster;
  private enabled: boolean = false;
  
  // 吸附检测器和加速结构
  private snapDetector: SnapDetector;
  private octree: Octree | null = null;
  private edges: Edge[] = [];
  private holeEdges: Edge[] = [];
  
  // 目标模型 mesh 列表
  private targetMeshes: Mesh[] = [];
  
  // 测量点
  private point1: Vector3 | null = null;
  private point2: Vector3 | null = null;
  
  // 事件回调
  private onMeasureStartCallback?: MeasureStartCallback;
  private onMeasureCompleteCallback?: MeasureCompleteCallback;
  private onSnapDetectedCallback?: SnapDetectedCallback;
  
  /**
   * 构造函数
   * @param camera 相机对象
   * @param scene 场景对象
   * @param config 配置选项
   */
  constructor(camera: Camera, _scene: Scene, config: Partial<MeasurementConfig> = {}) {
    this.camera = camera;
    this.config = { ...DEFAULT_MEASUREMENT_CONFIG, ...config };
    this.raycaster = new Raycaster();
    this.snapDetector = new SnapDetector(camera);
  }

  /**
   * 启用测量模式
   */
  public enableMeasurement(): void {
    this.enabled = true;
    this.reset();
    if (this.onMeasureStartCallback) {
      this.onMeasureStartCallback();
    }
  }

  /**
   * 禁用测量模式
   */
  public disableMeasurement(): void {
    this.enabled = false;
    this.reset();
  }

  /**
   * 检查是否启用
   */
  public isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * 设置吸附模式优先级
   * @param modes 吸附模式数组,按优先级排序
   */
  public setSnapMode(modes: SnapMode[]): void {
    this.config.snapModes = modes;
  }

  /**
   * 设置显示单位
   * @param unit 单位类型
   */
  public setUnit(unit: MeasurementUnit): void {
    this.config.unit = unit;
  }

  /**
   * 获取当前配置
   */
  public getConfig(): MeasurementConfig {
    return { ...this.config };
  }

  /**
   * 更新配置
   * @param config 部分配置
   */
  public updateConfig(config: Partial<MeasurementConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * 计算两点之间的距离
   * @param point1 第一个点
   * @param point2 第二个点
   * @returns 距离 (米)
   */
  public getDistance(point1: Vector3, point2: Vector3): number {
    return point1.distanceTo(point2);
  }

  /**
   * 格式化距离为指定单位
   * @param distance 距离 (米)
   * @param unit 目标单位
   * @returns 格式化的距离字符串
   */
  public formatDistance(distance: number, unit?: MeasurementUnit): string {
    const targetUnit = unit || this.config.unit;
    let value: number;
    
    switch (targetUnit) {
      case 'm':
        value = distance;
        break;
      case 'cm':
        value = distance * 100;
        break;
      case 'mm':
        value = distance * 1000;
        break;
      default:
        value = distance;
    }
    
    return `${value.toFixed(2)} ${targetUnit}`;
  }

  /**
   * 设置第一个测量点
   * @param point 点坐标
   */
  public setPoint1(point: Vector3): void {
    this.point1 = point.clone();
  }

  /**
   * 设置第二个测量点并完成测量
   * @param point 点坐标
   */
  public setPoint2(point: Vector3): void {
    this.point2 = point.clone();
    
    if (this.point1 && this.point2) {
      const distance = this.getDistance(this.point1, this.point2);
      const result: MeasurementResult = {
        point1: this.point1,
        point2: this.point2,
        distance,
        formattedDistance: this.formatDistance(distance),
        unit: this.config.unit
      };
      
      if (this.onMeasureCompleteCallback) {
        this.onMeasureCompleteCallback(result);
      }
    }
  }

  /**
   * 获取当前测量点
   */
  public getPoints(): { point1: Vector3 | null; point2: Vector3 | null } {
    return {
      point1: this.point1 ? this.point1.clone() : null,
      point2: this.point2 ? this.point2.clone() : null
    };
  }

  /**
   * 重置测量点
   */
  public reset(): void {
    this.point1 = null;
    this.point2 = null;
  }

  /**
   * 检测鼠标位置的吸附点
   * @param mousePos 归一化的鼠标坐标 (-1 到 1)
   * @returns 吸附结果,如果没有吸附则返回 null
   */
  public detectSnap(mousePos: Vector2): SnapResult | null {
    // 更新射线投射器
    this.raycaster.setFromCamera(mousePos, this.camera);
    
    // 按优先级尝试各种吸附模式
    for (const mode of this.config.snapModes) {
      let result: SnapResult | null = null;
      
      switch (mode) {
        case SnapMode.VERTEX:
          result = this.snapToVertex(mousePos);
          break;
        case SnapMode.EDGE:
          result = this.snapToEdge(mousePos);
          break;
        case SnapMode.FACE:
          result = this.snapToFace();
          break;
        case SnapMode.HOLE_EDGE:
          result = this.snapToHoleEdge(mousePos);
          break;
      }
      
      if (result) {
        if (this.onSnapDetectedCallback) {
          this.onSnapDetectedCallback(result);
        }
        return result;
      }
    }
    
    return null;
  }

  /**
   * 顶点吸附
   */
  private snapToVertex(mousePos: Vector2): SnapResult | null {
    if (!this.octree) {
      return null;
    }
    
    // 动态计算世界空间搜索半径
    // 根据相机到原点的距离计算一个合理的比例
    const cameraDist = this.camera.position.length();
    const radiusWorld = cameraDist * 0.1; // 搜索半径设为距离的 10%
    
    return this.snapDetector.snapToVertex(
      mousePos,
      this.octree,
      radiusWorld,
      this.config.snapRadius
    );
  }

  /**
   * 边吸附
   */
  private snapToEdge(mousePos: Vector2): SnapResult | null {
    if (this.edges.length === 0) {
      return null;
    }
    
    return this.snapDetector.snapToEdge(
      mousePos,
      this.edges,
      this.config.edgeThreshold
    );
  }

  /**
   * 面吸附 - 只吸附到模型 mesh
   */
  private snapToFace(): SnapResult | null {
    // 只检测目标模型的 mesh，不检测场景中的其他对象
    if (this.targetMeshes.length === 0) {
      return null;
    }
    
    const intersects = this.raycaster.intersectObjects(this.targetMeshes, false);
    
    if (intersects.length > 0) {
      const intersection = intersects[0];
      return {
        position: intersection.point,
        type: SnapMode.FACE,
        target: intersection.object,
        distance: intersection.distance
      };
    }
    
    return null;
  }

  /**
   * 孔边缘吸附
   */
  private snapToHoleEdge(mousePos: Vector2): SnapResult | null {
    if (this.holeEdges.length === 0) {
      return null;
    }
    
    return this.snapDetector.snapToEdge(
      mousePos,
      this.holeEdges,
      this.config.edgeThreshold
    );
  }

  /**
   * 设置测量开始回调
   * @param callback 回调函数
   */
  public onMeasureStart(callback: MeasureStartCallback): void {
    this.onMeasureStartCallback = callback;
  }

  /**
   * 设置测量完成回调
   * @param callback 回调函数
   */
  public onMeasureComplete(callback: MeasureCompleteCallback): void {
    this.onMeasureCompleteCallback = callback;
  }

  /**
   * 设置吸附检测回调
   * @param callback 回调函数
   */
  public onSnapDetected(callback: SnapDetectedCallback): void {
    this.onSnapDetectedCallback = callback;
  }

  public buildSnapStructures(model: Object3D): void {
    // 重置吸附数据结构
    this.targetMeshes = [];
    this.edges = [];
    this.holeEdges = [];
    
    // 收集所有世界空间下的顶点用于构建八叉树
    const allWorldVertices: Vector3[] = [];
    
    // 确保模型的世界矩阵是最新的
    model.updateMatrixWorld(true);
    
    model.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        this.targetMeshes.push(mesh);
        
        if (mesh.geometry instanceof BufferGeometry) {
          const geometry = mesh.geometry;
          const positions = geometry.attributes.position;
          
          if (positions) {
            // 1. 处理顶点，转换到世界空间
            for (let i = 0; i < positions.count; i++) {
              const vertex = new Vector3(
                positions.getX(i),
                positions.getY(i),
                positions.getZ(i)
              );
              // 应用网格的世界变换矩阵
              vertex.applyMatrix4(mesh.matrixWorld);
              allWorldVertices.push(vertex);
            }
            
            // 2. 提取边并转换到世界空间
            const localEdges = this.snapDetector.extractEdges(geometry);
            for (const edge of localEdges) {
              const startWorld = edge.start.clone().applyMatrix4(mesh.matrixWorld);
              const endWorld = edge.end.clone().applyMatrix4(mesh.matrixWorld);
              this.edges.push({ start: startWorld, end: endWorld, index: this.edges.length });
            }
            
            // 3. 提取孔边缘并转换到世界空间
            const localHoleEdges = this.snapDetector.detectHoles(geometry);
            for (const edge of localHoleEdges) {
              const startWorld = edge.start.clone().applyMatrix4(mesh.matrixWorld);
              const endWorld = edge.end.clone().applyMatrix4(mesh.matrixWorld);
              this.holeEdges.push({ start: startWorld, end: endWorld, index: this.holeEdges.length });
            }
          }
        }
      }
    });
    
    if (allWorldVertices.length === 0) {
      this.octree = null;
      return;
    }
    
    // 构建全局八叉树
    this.octree = new Octree(
      this.calculateBoundingBox(allWorldVertices)
    );
    for (const v of allWorldVertices) {
      this.octree.insert(v, null);
    }
    
    console.log(`[MeasurementTool] Built snap structures:`);
    console.log(`  - Target meshes: ${this.targetMeshes.length}`);
    console.log(`  - Total vertices: ${allWorldVertices.length}`);
    console.log(`  - Octree nodes: ${this.octree?.getStats().totalNodes || 0}`);
    console.log(`  - Edges: ${this.edges.length}`);
    console.log(`  - Hole edges: ${this.holeEdges.length}`);
  }

  /**
   * 计算一组点的包围盒
   */
  private calculateBoundingBox(points: Vector3[]): Box3 {
    const bbox = new Box3();
    if (points.length === 0) return bbox;
    
    for (const p of points) {
      bbox.expandByPoint(p);
    }
    
    // 稍微扩大一点以防边界问题
    bbox.expandByScalar(0.1);
    return bbox;
  }

  /**
   * 渲染测量结果 (由 UI 层实现)
   * @param result 测量结果
   */
  public renderMeasurement(_result: MeasurementResult): void {
    // 此方法由外部 UI 组件实现
    // 这里只是接口定义
  }

  /**
   * 销毁资源
   */
  public dispose(): void {
    this.reset();
    this.enabled = false;
    this.onMeasureStartCallback = undefined;
    this.onMeasureCompleteCallback = undefined;
    this.onSnapDetectedCallback = undefined;
  }
}
