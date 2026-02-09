import { Vector2, Vector3, Camera, Raycaster, BufferGeometry, Line3, Mesh } from 'three';
import { Octree, OctreeData } from './Octree';
import { SnapMode, SnapResult } from './MeasurementTypes';

/**
 * 边数据结构
 */
export interface Edge {
  /** 起点 */
  start: Vector3;
  /** 终点 */
  end: Vector3;
  /** 边所属的网格 */
  mesh?: Mesh;
  /** 边索引或其他标识 */
  index?: number;
}

/**
 * 吸附检测器
 * 实现各种吸附算法
 */
export class SnapDetector {
  private camera: Camera;
  private raycaster: Raycaster;

  constructor(camera: Camera) {
    this.camera = camera;
    this.raycaster = new Raycaster();
  }

  /**
   * 顶点吸附
   * @param mousePos 归一化鼠标坐标 (-1 到 1)
   * @param octree 八叉树结构
   * @param radiusWorld 世界空间搜索半径
   * @param radiusScreen 屏幕空间吸附半径 (像素)
   * @returns 吸附结果或 null
   */
  public snapToVertex(
    mousePos: Vector2,
    octree: Octree,
    radiusWorld: number,
    radiusScreen: number = 10
  ): SnapResult | null {
    // 从鼠标位置发射射线
    this.raycaster.setFromCamera(mousePos, this.camera);
    
    // 获取射线原点
    const rayOrigin = this.raycaster.ray.origin.clone();
    
    // 在八叉树中搜索附近的顶点
    const nearbyVertices = octree.findNearest(rayOrigin, radiusWorld);
    
    if (nearbyVertices.length === 0) {
      return null;
    }

    // 找到屏幕空间距离最近的顶点
    let closestVertex: OctreeData | null = null;
    let minScreenDist = radiusScreen;

    for (const vertex of nearbyVertices) {
      // 核心修复：检查顶点所属的网格是否可见
      const mesh = vertex.data?.mesh as Mesh;
      if (mesh && !mesh.visible) continue;

      const screenDist = this.getScreenDistance(vertex.position, mousePos);
      if (screenDist < minScreenDist) {
        minScreenDist = screenDist;
        closestVertex = vertex;
      }
    }

    if (closestVertex) {
      return {
        position: closestVertex.position.clone(),
        type: SnapMode.VERTEX,
        target: closestVertex.data,
        distance: closestVertex.position.distanceTo(rayOrigin)
      };
    }

    return null;
  }

  /**
   * 边吸附
   * @param mousePos 归一化鼠标坐标
   * @param edges 边数组
   * @param thresholdScreen 屏幕空间阈值 (像素)
   * @returns 吸附结果或 null
   */
  public snapToEdge(
    mousePos: Vector2,
    edges: Edge[],
    thresholdScreen: number = 5
  ): SnapResult | null {
    this.raycaster.setFromCamera(mousePos, this.camera);
    const ray = this.raycaster.ray;

    let closestPoint: Vector3 | null = null;
    let minDistance = Infinity;
    let closestEdge: Edge | null = null;

    for (const edge of edges) {
      // 核心修复：检查边缘所属的网格是否可见
      if (edge.mesh && !edge.mesh.visible) continue;

      // 创建线段
      const line = new Line3(edge.start, edge.end);
      
      // 计算射线到线段的最近点
      const pointOnLine = new Vector3();
      line.closestPointToPoint(ray.origin, true, pointOnLine);
      
      // 计算距离
      const distance = pointOnLine.distanceTo(ray.origin);
      
      // 检查屏幕空间距离
      const screenDist = this.getScreenDistance(pointOnLine, mousePos);
      
      if (screenDist < thresholdScreen && distance < minDistance) {
        minDistance = distance;
        closestPoint = pointOnLine;
        closestEdge = edge;
      }
    }

    if (closestPoint && closestEdge) {
      return {
        position: closestPoint,
        type: SnapMode.EDGE,
        target: closestEdge,
        distance: minDistance
      };
    }

    return null;
  }

  /**
   * 面吸附 (射线-三角形相交)
   * @param intersectObjects 可相交的对象数组
   * @returns 吸附结果或 null
   */
  public snapToFace(intersectObjects: any[]): SnapResult | null {
    const intersects = this.raycaster.intersectObjects(intersectObjects, true);
    
    if (intersects.length > 0) {
      const intersection = intersects[0];
      return {
        position: intersection.point,
        type: SnapMode.FACE,
        target: {
          object: intersection.object,
          faceIndex: intersection.faceIndex
        },
        distance: intersection.distance
      };
    }
    
    return null;
  }

  /**
   * 检测几何体中的孔边缘
   * @param geometry 缓冲几何体
   * @returns 孔边缘数组
   */
  public detectHoles(geometry: BufferGeometry): Edge[] {
    const holes: Edge[] = [];
    
    if (!geometry.index) {
      return holes; // 需要索引几何体
    }

    const positions = geometry.attributes.position;
    const indices = geometry.index.array;
    
    // 构建边-面映射
    const edgeMap = new Map<string, number>();
    
    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i];
      const i1 = indices[i + 1];
      const i2 = indices[i + 2];
      
      // 三角形的三条边
      const edges = [
        [i0, i1],
        [i1, i2],
        [i2, i0]
      ];
      
      for (const [a, b] of edges) {
        // 边的唯一键 (排序以确保一致性)
        const key = a < b ? `${a}-${b}` : `${b}-${a}`;
        
        // 计数边被多少个面共享
        edgeMap.set(key, (edgeMap.get(key) || 0) + 1);
      }
    }
    
    // 只被一个面共享的边可能是孔边缘或外边缘
    for (const [key, count] of edgeMap.entries()) {
      if (count === 1) {
        const [a, b] = key.split('-').map(Number);
        
        const start = new Vector3(
          positions.getX(a),
          positions.getY(a),
          positions.getZ(a)
        );
        
        const end = new Vector3(
          positions.getX(b),
          positions.getY(b),
          positions.getZ(b)
        );
        
        holes.push({ start, end, index: holes.length });
      }
    }
    
    return holes;
  }

  /**
   * 从几何体提取所有边
   * @param geometry 缓冲几何体
   * @returns 边数组
   */
  public extractEdges(geometry: BufferGeometry): Edge[] {
    const edges: Edge[] = [];
    
    if (!geometry.index) {
      return edges;
    }

    const positions = geometry.attributes.position;
    const indices = geometry.index.array;
    const edgeSet = new Set<string>();
    
    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i];
      const i1 = indices[i + 1];
      const i2 = indices[i + 2];
      
      const edgePairs = [
        [i0, i1],
        [i1, i2],
        [i2, i0]
      ];
      
      for (const [a, b] of edgePairs) {
        const key = a < b ? `${a}-${b}` : `${b}-${a}`;
        
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          
          const start = new Vector3(
            positions.getX(a),
            positions.getY(a),
            positions.getZ(a)
          );
          
          const end = new Vector3(
            positions.getX(b),
            positions.getY(b),
            positions.getZ(b)
          );
          
          edges.push({ start, end, index: edges.length });
        }
      }
    }
    
    return edges;
  }

  /**
   * 计算3D点到屏幕坐标的距离
   * @param worldPos 世界坐标
   * @param mousePos 归一化鼠标坐标
   * @returns 屏幕空间距离 (像素)
   */
  private getScreenDistance(worldPos: Vector3, mousePos: Vector2): number {
    // 将世界坐标投影到屏幕
    const screenPos = worldPos.clone().project(this.camera);
    
    // 计算与鼠标位置的距离
    const dx = screenPos.x - mousePos.x;
    const dy = screenPos.y - mousePos.y;
    
    // 转换为像素距离 (假设视口宽度为参考)
    const pixelDistance = Math.sqrt(dx * dx + dy * dy) * (window.innerWidth / 2);
    
    return pixelDistance;
  }

  /**
   * 更新相机引用
   * @param camera 新的相机对象
   */
  public setCamera(camera: Camera): void {
    this.camera = camera;
  }
}
