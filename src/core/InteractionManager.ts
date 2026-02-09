import { Raycaster, Vector2, Scene, Camera, WebGLRenderer, Mesh, MeshStandardMaterial, Color, GridHelper, AxesHelper } from 'three';
import { EXPLODER_CONSTANTS } from './types';
import { createTextSprite } from './utils';

/**
 * 交互管理器
 * 负责处理 3D 场景中的交互逻辑，如网格选中、高亮、显示/隐藏控制等
 */
export class InteractionManager {
  private scene: Scene;
  private camera: Camera;
  private renderer: WebGLRenderer;
  private raycaster: Raycaster;
  private mouse: Vector2;
  private mouseDownPos: Vector2 = new Vector2();
  private readonly dragThreshold: number = 2; // 阈值，单位为像素
  
  private gridHelper: GridHelper | null = null;
  private axesHelper: AxesHelper | null = null;
  private axisLabels: { x: any, y: any, z: any } | null = null;

  // 当前选中的网格
  private selectedMesh: Mesh | null = null;
  private hoveredMesh: Mesh | null = null;
  // 原始材质属性缓存
  private originalMaterialState: Map<string, { emissive: Color, emissiveIntensity: number, color?: Color }> = new Map();
  private onSelect: ((mesh: Mesh | null) => void) | null = null;

  constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.raycaster = new Raycaster();
    this.mouse = new Vector2();

    // 绑定事件处理函数，确保可以正确移除
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.initEventListeners();
    this.initHelpers();
  }

  /**
   * 设置选中回调
   */
  public setOnSelect(callback: (mesh: Mesh | null) => void): void {
    this.onSelect = callback;
  }

  /**
   * 初始化辅助器 (网格、轴等)
   */
  private initHelpers(): void {
    // 1. 网格辅助器
    this.gridHelper = new GridHelper(10, 20, 0xBBBBBB, 0xEEEEEE);
    this.scene.add(this.gridHelper);

    // 2. 坐标轴辅助器
    this.axesHelper = new AxesHelper(5);
    this.scene.add(this.axesHelper);

    // 3. 轴标签
    const labelX = createTextSprite('X', '#FF4444');
    const labelY = createTextSprite('Y', '#44FF44');
    const labelZ = createTextSprite('Z', '#4444FF');
    
    labelX.position.set(5.5, 0, 0);
    labelY.position.set(0, 5.5, 0);
    labelZ.position.set(0, 0, 5.5);
    
    this.axisLabels = { x: labelX, y: labelY, z: labelZ };
    this.scene.add(labelX, labelY, labelZ);
  }

  /**
   * 设置辅助器可见性
   */
  public setHelperVisibility(visible: boolean): void {
    if (this.gridHelper) this.gridHelper.visible = visible;
    if (this.axesHelper) this.axesHelper.visible = visible;
    if (this.axisLabels) {
      this.axisLabels.x.visible = visible;
      this.axisLabels.y.visible = visible;
      this.axisLabels.z.visible = visible;
    }
  }

  /**
   * 初始化事件监听
   */
  private initEventListeners(): void {
    const canvas = this.renderer.domElement;
    canvas.addEventListener('mousedown', this.onMouseDown);
    canvas.addEventListener('click', this.onClick);
    canvas.addEventListener('dblclick', this.onDoubleClick);
    canvas.addEventListener('mousemove', this.onMouseMove);
  }

  private onMouseDown(event: MouseEvent): void {
    this.mouseDownPos.set(event.clientX, event.clientY);
  }

  /**
   * 处理双击事件
   */
  private onDoubleClick(event: MouseEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    const meshIntersect = intersects.find(intersect => (intersect.object as any).isMesh);

    if (meshIntersect) {
      const mesh = meshIntersect.object as Mesh;
      this.toggleMeshVisibility(mesh);
    }
  }

  /**
   * 切换网格可见性
   */
  public toggleMeshVisibility(mesh: Mesh): void {
    mesh.visible = !mesh.visible;
    
    // 如果隐藏了当前选中的网格，则取消选中
    if (!mesh.visible && this.selectedMesh === mesh) {
      this.deselectMesh();
    }
  }

  /**
   * 显示所有被隐藏的网格
   */
  public showAllMeshes(): void {
    this.scene.traverse((obj) => {
      if ((obj as any).isMesh) {
        obj.visible = true;
      }
    });
  }

  /**
   * 处理鼠标移动事件（悬停效果）
   */
  private onMouseMove(event: MouseEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    const meshIntersect = intersects.find(intersect => (intersect.object as any).isMesh);

    if (meshIntersect) {
      const mesh = meshIntersect.object as Mesh;
      if (this.hoveredMesh !== mesh && this.selectedMesh !== mesh) {
        this.unhoverMesh();
        this.hoverMesh(mesh);
      }
    } else {
      this.unhoverMesh();
    }
  }

  private hoverMesh(mesh: Mesh): void {
    this.hoveredMesh = mesh;
    if (!mesh.material) return;
    
    // 处理材质共享问题：确保当前网格拥有独立材质实例
    const key0 = `${mesh.uuid}_0`;
    if (!this.originalMaterialState.has(key0)) {
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map(mat => mat.clone());
      } else {
        mesh.material = mesh.material.clone();
      }
    }

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    materials.forEach((mat, index) => {
      if (mat instanceof MeshStandardMaterial) {
        // 缓存原始状态（如果尚未缓存）
        const key = `${mesh.uuid}_${index}`;
        if (!this.originalMaterialState.has(key)) {
          this.originalMaterialState.set(key, {
            emissive: mat.emissive.clone(),
            emissiveIntensity: mat.emissiveIntensity,
            color: mat.color.clone()
          });
        }

        // 悬停效果：轻微增加自发光
        mat.emissive.set(EXPLODER_CONSTANTS.INTERACTION?.HIGHLIGHT_COLOR || 0x64B5F6);
        mat.emissiveIntensity = 0.2;
      }
    });
    
    this.renderer.domElement.style.cursor = 'pointer';
  }

  private unhoverMesh(): void {
    if (!this.hoveredMesh) return;
    
    // 如果不是当前选中的网格，则恢复原始状态
    if (this.hoveredMesh !== this.selectedMesh) {
      this.restoreMesh(this.hoveredMesh);
    }
    
    this.hoveredMesh = null;
    this.renderer.domElement.style.cursor = 'auto';
  }

  /**
   * 处理点击事件
   */
  private onClick(event: MouseEvent): void {
    // 检测是否是拖拽：计算按下和松开时的位移
    const moveDistance = Math.sqrt(
      Math.pow(event.clientX - this.mouseDownPos.x, 2) +
      Math.pow(event.clientY - this.mouseDownPos.y, 2)
    );

    // 如果移动距离超过阈值，认为是旋转/平移操作，不触发选中逻辑
    if (moveDistance > this.dragThreshold) {
      return;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    // 寻找相交的对象，只检测 Mesh
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
    const meshIntersect = intersects.find(intersect => (intersect.object as any).isMesh);

    if (meshIntersect) {
      const mesh = meshIntersect.object as Mesh;
      this.selectMesh(mesh);
    } else {
      this.deselectMesh();
    }
  }

  /**
   * 选中网格并高亮
   * @param mesh 要选中的网格
   */
  public selectMesh(mesh: Mesh): void {
    // 如果点击的是当前已选中的，则取消选中
    if (this.selectedMesh === mesh) {
      this.deselectMesh();
      return;
    }

    // 先取消之前的选中
    this.deselectMesh();

    this.selectedMesh = mesh;
    this.highlightMesh(mesh);

    // 触发回调
    if (this.onSelect) {
      this.onSelect(mesh);
    }
  }

  /**
   * 取消选中
   */
  public deselectMesh(): void {
    if (this.selectedMesh) {
      this.restoreMesh(this.selectedMesh);
      this.selectedMesh = null;

      // 触发回调
      if (this.onSelect) {
        this.onSelect(null);
      }
    }
  }

  /**
   * 高亮网格
   * @param mesh 网格对象
   */
  private highlightMesh(mesh: Mesh): void {
    if (!mesh.material) return;

    // 处理材质共享问题：确保当前网格拥有独立材质实例
    const key0 = `${mesh.uuid}_0`;
    if (!this.originalMaterialState.has(key0)) {
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map(mat => mat.clone());
      } else {
        mesh.material = mesh.material.clone();
      }
    }

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    
    materials.forEach((mat, index) => {
      if (mat instanceof MeshStandardMaterial) {
        // 缓存原始状态（如果尚未缓存）
        const key = `${mesh.uuid}_${index}`;
        if (!this.originalMaterialState.has(key)) {
          this.originalMaterialState.set(key, {
            emissive: mat.emissive.clone(),
            emissiveIntensity: mat.emissiveIntensity,
            color: mat.color.clone() // 缓存原始颜色
          });
        }

        // 设置纯蓝色高亮，完全覆盖原始颜色
        // 1. 将漫反射颜色设为黑色，防止与高亮色混合
        mat.color.set(0x000000);
        
        // 2. 将自发光设为目标蓝色
        mat.emissive.set(EXPLODER_CONSTANTS.INTERACTION?.HIGHLIGHT_COLOR || 0x64B5F6);
        mat.emissiveIntensity = 1.0; 
      }
    });
  }

  /**
   * 恢复网格原始材质
   * @param mesh 网格对象
   */
  private restoreMesh(mesh: Mesh): void {
    if (!mesh.material) return;

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    
    materials.forEach((mat, index) => {
      if (mat instanceof MeshStandardMaterial) {
        const key = `${mesh.uuid}_${index}`;
        const original = this.originalMaterialState.get(key);
        
        if (original) {
          // 恢复所有属性
          mat.emissive.copy(original.emissive);
          mat.emissiveIntensity = original.emissiveIntensity;
          
          if (original.color && mat.color) {
            mat.color.copy(original.color);
          }
          
          this.originalMaterialState.delete(key);
        }
      }
    });
  }

  /**
   * 销毁管理器
   */
  public dispose(): void {
    const canvas = this.renderer.domElement;
    
    canvas.removeEventListener('mousedown', this.onMouseDown); 
    canvas.removeEventListener('click', this.onClick);
    canvas.removeEventListener('dblclick', this.onDoubleClick);
    canvas.removeEventListener('mousemove', this.onMouseMove);
    
    this.deselectMesh();
    this.originalMaterialState.clear();
    
    // 释放辅助器资源
    if (this.gridHelper) {
      this.scene.remove(this.gridHelper);
      this.gridHelper.geometry.dispose();
      if (Array.isArray(this.gridHelper.material)) {
        this.gridHelper.material.forEach(m => m.dispose());
      } else {
        this.gridHelper.material.dispose();
      }
      this.gridHelper = null;
    }
    if (this.axesHelper) {
      this.scene.remove(this.axesHelper);
      this.axesHelper.geometry.dispose();
      if (Array.isArray(this.axesHelper.material)) {
        this.axesHelper.material.forEach(m => m.dispose());
      } else {
        this.axesHelper.material.dispose();
      }
      this.axesHelper = null;
    }
    if (this.axisLabels) {
      const { x, y, z } = this.axisLabels;
      [x, y, z].forEach(label => {
        this.scene.remove(label);
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
  }
}
