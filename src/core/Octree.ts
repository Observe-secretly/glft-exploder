import { Vector3, Box3 } from 'three';

/**
 * 八叉树节点数据
 */
export interface OctreeData {
  /** 顶点位置 */
  position: Vector3;
  /** 关联的数据 (如顶点索引、对象引用等) */
  data: any;
}

/**
 * 八叉树节点
 */
class OctreeNode {
  public bounds: Box3;
  public children: OctreeNode[] | null = null;
  public points: OctreeData[] = [];
  public depth: number;

  constructor(bounds: Box3, depth: number) {
    this.bounds = bounds;
    this.depth = depth;
  }

  /**
   * 判断是否为叶子节点
   */
  isLeaf(): boolean {
    return this.children === null;
  }

  /**
   * 分裂节点为8个子节点
   */
  subdivide(): void {
    const center = new Vector3();
    this.bounds.getCenter(center);
    const min = this.bounds.min;
    const max = this.bounds.max;

    this.children = [
      // 前下左
      new OctreeNode(new Box3(
        new Vector3(min.x, min.y, min.z),
        new Vector3(center.x, center.y, center.z)
      ), this.depth + 1),
      // 前下右
      new OctreeNode(new Box3(
        new Vector3(center.x, min.y, min.z),
        new Vector3(max.x, center.y, center.z)
      ), this.depth + 1),
      // 前上左
      new OctreeNode(new Box3(
        new Vector3(min.x, center.y, min.z),
        new Vector3(center.x, max.y, center.z)
      ), this.depth + 1),
      // 前上右
      new OctreeNode(new Box3(
        new Vector3(center.x, center.y, min.z),
        new Vector3(max.x, max.y, center.z)
      ), this.depth + 1),
      // 后下左
      new OctreeNode(new Box3(
        new Vector3(min.x, min.y, center.z),
        new Vector3(center.x, center.y, max.z)
      ), this.depth + 1),
      // 后下右
      new OctreeNode(new Box3(
        new Vector3(center.x, min.y, center.z),
        new Vector3(max.x, center.y, max.z)
      ), this.depth + 1),
      // 后上左
      new OctreeNode(new Box3(
        new Vector3(min.x, center.y, center.z),
        new Vector3(center.x, max.y, max.z)
      ), this.depth + 1),
      // 后上右
      new OctreeNode(new Box3(
        new Vector3(center.x, center.y, center.z),
        new Vector3(max.x, max.y, max.z)
      ), this.depth + 1)
    ];
  }
}

/**
 * 八叉树空间分割结构
 * 用于加速最近邻顶点搜索
 */
export class Octree {
  private root: OctreeNode;
  private maxDepth: number;
  private maxPointsPerNode: number;

  /**
   * 构造函数
   * @param bounds 空间边界
   * @param maxDepth 最大深度
   * @param maxPointsPerNode 每个节点最大点数
   */
  constructor(bounds: Box3, maxDepth: number = 8, maxPointsPerNode: number = 8) {
    this.root = new OctreeNode(bounds, 0);
    this.maxDepth = maxDepth;
    this.maxPointsPerNode = maxPointsPerNode;
  }

  /**
   * 插入顶点
   * @param position 顶点位置
   * @param data 关联数据
   */
  public insert(position: Vector3, data: any): void {
    this.insertIntoNode(this.root, { position, data });
  }

  /**
   * 递归插入到节点
   */
  private insertIntoNode(node: OctreeNode, octreeData: OctreeData): void {
    // 如果点不在节点边界内,忽略
    if (!node.bounds.containsPoint(octreeData.position)) {
      return;
    }

    // 如果是叶子节点
    if (node.isLeaf()) {
      node.points.push(octreeData);

      // 如果超过容量且未达到最大深度,分裂节点
      if (node.points.length > this.maxPointsPerNode && node.depth < this.maxDepth) {
        node.subdivide();
        
        // 重新分配点到子节点
        const points = node.points;
        node.points = [];
        
        for (const point of points) {
          for (const child of node.children!) {
            this.insertIntoNode(child, point);
          }
        }
      }
    } else {
      // 插入到合适的子节点
      for (const child of node.children!) {
        this.insertIntoNode(child, octreeData);
      }
    }
  }

  /**
   * 查找指定半径内的最近点
   * @param point 查询点
   * @param radius 搜索半径
   * @returns 范围内的所有点数据
   */
  public findNearest(point: Vector3, radius: number): OctreeData[] {
    const results: OctreeData[] = [];
    const radiusSq = radius * radius;
    
    this.searchNode(this.root, point, radiusSq, results);
    
    // 按距离排序
    results.sort((a, b) => {
      const distA = a.position.distanceToSquared(point);
      const distB = b.position.distanceToSquared(point);
      return distA - distB;
    });
    
    return results;
  }

  /**
   * 递归搜索节点
   */
  private searchNode(
    node: OctreeNode,
    point: Vector3,
    radiusSq: number,
    results: OctreeData[]
  ): void {
    // 检查节点边界是否与搜索球体相交
    const closestPoint = new Vector3();
    node.bounds.clampPoint(point, closestPoint);
    const distSq = closestPoint.distanceToSquared(point);
    
    if (distSq > radiusSq) {
      return; // 节点太远,跳过
    }

    // 如果是叶子节点,检查所有点
    if (node.isLeaf()) {
      for (const octreeData of node.points) {
        const d = octreeData.position.distanceToSquared(point);
        if (d <= radiusSq) {
          results.push(octreeData);
        }
      }
    } else {
      // 递归搜索子节点
      for (const child of node.children!) {
        this.searchNode(child, point, radiusSq, results);
      }
    }
  }

  /**
   * 清空八叉树
   */
  public clear(): void {
    this.root = new OctreeNode(this.root.bounds, 0);
  }

  /**
   * 从几何体构建八叉树
   * @param positions 顶点位置数组 (Float32Array)
   * @returns 八叉树实例
   */
  public static fromPositions(positions: Float32Array): Octree {
    // 计算边界
    const bounds = new Box3();
    for (let i = 0; i < positions.length; i += 3) {
      const vertex = new Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      );
      bounds.expandByPoint(vertex);
    }

    // 扩展边界以避免边界问题
    const size = new Vector3();
    bounds.getSize(size);
    const expansion = Math.max(size.x, size.y, size.z) * 0.01;
    bounds.expandByScalar(expansion);

    // 创建八叉树
    const octree = new Octree(bounds);

    // 插入所有顶点
    for (let i = 0; i < positions.length; i += 3) {
      const vertex = new Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      );
      octree.insert(vertex, i / 3); // 存储顶点索引
    }

    return octree;
  }

  /**
   * 获取八叉树统计信息
   */
  public getStats(): {
    totalNodes: number;
    leafNodes: number;
    maxDepth: number;
    totalPoints: number;
  } {
    const stats = {
      totalNodes: 0,
      leafNodes: 0,
      maxDepth: 0,
      totalPoints: 0
    };

    const traverse = (node: OctreeNode) => {
      stats.totalNodes++;
      stats.maxDepth = Math.max(stats.maxDepth, node.depth);
      
      if (node.isLeaf()) {
        stats.leafNodes++;
        stats.totalPoints += node.points.length;
      } else {
        for (const child of node.children!) {
          traverse(child);
        }
      }
    };

    traverse(this.root);
    return stats;
  }
}
