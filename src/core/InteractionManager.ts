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
  private isolatedMesh: Mesh | null = null; // 当前处于隔离显隐状态的网格
  // private hoveredMesh: Mesh | null = null; // 移除悬停状态
  private enabled: boolean = true; // 是否启用交互控制
  // 原始材质属性缓存
  private originalMaterialState: Map<string, { emissive: Color, emissiveIntensity: number, color?: Color }> = new Map();
  private onSelect: ((mesh: Mesh | null) => void) | null = null;
  private onFitToView: ((meshes: Mesh[]) => void) | null = null;
  private onContextMenu: ((event: MouseEvent | TouchEvent, mesh: Mesh | null) => void) | null = null;

  private longPressTimer: any = null;
  private readonly longPressDuration: number = 600; // 长按触发时长 (ms)
  private isLongPressTriggered: boolean = false;
  private lastTouchTime: number = 0; // 记录最后一次触摸时间以屏蔽冗余鼠标事件

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
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);

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
   * 设置适配视图回调
   */
  public setOnFitToView(callback: (meshes: Mesh[]) => void): void {
    this.onFitToView = callback;
  }

  /**
   * 设置右键菜单回调
   */
  public setOnContextMenu(callback: (event: MouseEvent | TouchEvent, mesh: Mesh | null) => void): void {
    this.onContextMenu = callback;
  }

  /**
   * 设置交互是否启用
   * 当进行其他高优先级操作（如测量）时，可以禁用网格选中
   */
  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      // 禁用时清理当前悬停和选中状态（可选，根据需求决定是否取消选中）
      // this.deselectMesh(); 
    }
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
    canvas.addEventListener('contextmenu', (e) => {
      // 如果是刚触发过长按，并且是移动端，通常不需要处理系统右键事件（已有 preventDefault）
      if (!this.enabled) return;
      e.preventDefault();
      // 注意：某些环境下长按后还会触发 contextmenu
      if (this.isLongPressTriggered) return;
      
      if (this.onContextMenu) {
        this.onContextMenu(e, this.selectedMesh);
      }
    });

    // 移动端长按支持
    canvas.addEventListener('touchstart', this.onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', this.onTouchMove, { passive: false });
    canvas.addEventListener('touchend', this.onTouchEnd, { passive: false });
  }

  private onMouseDown(event: MouseEvent): void {
    if (Date.now() - this.lastTouchTime < 500) return; // 屏蔽触摸后的模拟点击
    this.mouseDownPos.set(event.clientX, event.clientY);
  }

  private onTouchStart(event: TouchEvent): void {
    if (!this.enabled || event.touches.length > 1) return;
    
    this.lastTouchTime = Date.now();
    
    // 阻止默认行为以防止放大镜及背景滚动干扰逻辑
    if (event.cancelable) {
      event.preventDefault();
    }
    
    const touch = event.touches[0];
    this.mouseDownPos.set(touch.clientX, touch.clientY);
    this.isLongPressTriggered = false;

    // 启动长按计时器
    this.clearLongPressTimer();
    this.longPressTimer = setTimeout(() => {
      this.handleLongPress(event);
    }, this.longPressDuration);
  }

  private onTouchMove(event: TouchEvent): void {
    if (!this.longPressTimer) return;
    
    const touch = event.touches[0];
    const moveDistance = Math.sqrt(
      Math.pow(touch.clientX - this.mouseDownPos.x, 2) +
      Math.pow(touch.clientY - this.mouseDownPos.y, 2)
    );

    // 如果移动距离超过阈值，取消长按计时
    if (moveDistance > this.dragThreshold * 2) {
      this.clearLongPressTimer();
    }
  }

  private onTouchEnd(event: TouchEvent): void {
    this.clearLongPressTimer();
    this.lastTouchTime = Date.now();
    
    // 如果长按已触发，不需要处理点击
    if (this.isLongPressTriggered) {
      return;
    }

    // 处理移动端点击（Tap）
    const touch = event.changedTouches[0];
    const moveDistance = Math.sqrt(
      Math.pow(touch.clientX - this.mouseDownPos.x, 2) +
      Math.pow(touch.clientY - this.mouseDownPos.y, 2)
    );

    // 如果移动距离小于阈值，视为点击
    if (moveDistance <= this.dragThreshold * 2) {
      this.handleSelectAt(touch.clientX, touch.clientY);
    }
  }

  /**
   * 在指定位置执行选中逻辑
   */
  private handleSelectAt(clientX: number, clientY: number): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
    const meshIntersect = intersects.find(intersect => {
      const obj = intersect.object as Mesh;
      return (obj as any).isMesh && this.isGloballyVisible(obj);
    });

    if (meshIntersect) {
      this.selectMesh(meshIntersect.object as Mesh);
    } else {
      this.deselectMesh();
    }
  }

  private clearLongPressTimer(): void {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  private handleLongPress(event: TouchEvent): void {
    if (!this.enabled) return;
    
    this.isLongPressTriggered = true;
    const touch = event.touches[0];
    
    // 构建射线检测鼠标位置（针对 touch）
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
    const meshIntersect = intersects.find(intersect => {
      const obj = intersect.object as Mesh;
      return (obj as any).isMesh && this.isGloballyVisible(obj);
    });

    // 触发右键菜单回调
    if (this.onContextMenu) {
      // 传递对应的 Mesh (如果是长按的地方有 Mesh，则选中它)
      const targetMesh = meshIntersect ? (meshIntersect.object as Mesh) : null;
      
      // 如果长按到了新网格，先选中它
      if (targetMesh && targetMesh !== this.selectedMesh) {
        this.selectMesh(targetMesh);
      }
      
      this.onContextMenu(event, targetMesh || this.selectedMesh);
    }
  }

  /**
   * 处理双击事件
   */
  private onDoubleClick(event: MouseEvent): void {
    if (!this.enabled) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    const meshIntersect = intersects.find(intersect => (intersect.object as any).isMesh);

    if (meshIntersect) {
      const mesh = meshIntersect.object as Mesh;
      this.isolateMesh(mesh);
    }
  }

  /**
   * 隔离显示某个网格
   * @param mesh 要隔离的网格
   */
  public isolateMesh(mesh: Mesh): void {
    // 如果已经在隔离当前网格，则恢复全显
    if (this.isolatedMesh === mesh) {
      this.showAllMeshes();
      this.isolatedMesh = null;
    } else {
      // 否则进入隔离模式
      this.scene.traverse((obj) => {
        if ((obj as any).isMesh) {
          obj.visible = (obj === mesh);
        }
      });
      this.isolatedMesh = mesh;
    }

    // 无论进入还是退出隔离，都触发视图适配
    if (this.onFitToView) {
      const visibleMeshes: Mesh[] = [];
      this.scene.traverse((obj) => {
        if ((obj as any).isMesh && obj.visible) {
          visibleMeshes.push(obj as Mesh);
        }
      });
      this.onFitToView(visibleMeshes);
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
    const visibleMeshes: Mesh[] = [];
    this.scene.traverse((obj) => {
      if ((obj as any).isMesh) {
        obj.visible = true;
        visibleMeshes.push(obj as Mesh);
      }
    });
    this.isolatedMesh = null;

    if (this.onFitToView) {
      this.onFitToView(visibleMeshes);
    }
  }

  /**
   * 隐藏指定网格
   */
  public hideMesh(mesh: Mesh): void {
    mesh.visible = false;
    if (this.selectedMesh === mesh) {
      this.deselectMesh();
    }
    
    // 如果是隔离状态下的唯一网格被隐藏，则清除隔离状态
    if (this.isolatedMesh === mesh) {
      this.isolatedMesh = null;
    }
  }

  /**
   * 检查是否有隐藏的网格
   */
  public hasHiddenMeshes(): boolean {
    let hasHidden = false;
    this.scene.traverse((obj) => {
      if ((obj as any).isMesh && !obj.visible) {
        hasHidden = true;
      }
    });
    return hasHidden;
  }

  /**
   * 检查对象是否全局可见（自身及所有父级都可见）
   */
  private isGloballyVisible(obj: any): boolean {
    let current = obj;
    while (current) {
      if (!current.visible) return false;
      if (current === this.scene) break; // 核心修复：止于场景根节点
      current = current.parent;
    }
    return true;
  }

  /**
   * 处理鼠标移动事件（移除悬停效果）
   */
  private onMouseMove(event: MouseEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // 禁用悬停高亮逻辑，只需更新鼠标位置即可
    /*
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
    */
  }

  /*
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
  */

  /**
   * 处理点击事件
   */
  private onClick(event: MouseEvent): void {
    if (!this.enabled) return;
    if (Date.now() - this.lastTouchTime < 500) return; // 屏蔽触摸后的模拟点击

    // 检测是否是拖拽：计算按下和松开时的位移
    const moveDistance = Math.sqrt(
      Math.pow(event.clientX - this.mouseDownPos.x, 2) +
      Math.pow(event.clientY - this.mouseDownPos.y, 2)
    );

    // 如果移动距离超过阈值，认为是旋转/平移操作，不触发选中逻辑
    if (moveDistance > this.dragThreshold) {
      return;
    }

    this.handleSelectAt(event.clientX, event.clientY);
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
   * 获取当前选中的网格
   */
  public getSelectedMesh(): Mesh | null {
    return this.selectedMesh;
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
    canvas.removeEventListener('touchstart', this.onTouchStart);
    canvas.removeEventListener('touchmove', this.onTouchMove);
    canvas.removeEventListener('touchend', this.onTouchEnd);
    
    this.clearLongPressTimer();
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
