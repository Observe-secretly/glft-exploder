import { MeasurementTool } from '../core/MeasurementTool';
import { MeasurementResult, SnapResult, MeasurementUnit, MeasurementType, SnapMode } from '../core/MeasurementTypes';
import { MeasurementFormatter } from '../core/MeasurementFormatter';
import { Vector2, Vector3, Camera, Scene, Object3D } from 'three';

/**
 * 单次测量数据
 */
interface MeasurementData {
  pinA: HTMLElement;
  pinB: HTMLElement;
  line: HTMLElement;
  label: HTMLElement;
  point1: Vector3;
  point2: Vector3;
  worldDistance: number;
  unit: MeasurementUnit; // 记录测量的显示单位
  type: MeasurementType;
}

/**
 * 测量 UI 组件
 * 在 3D 视口中显示测量点、连线和距离标签,支持多个测量
 */
export class ExploderMeasurement {
  public element: HTMLElement;
  private visible: boolean = false;
  
  // 预览小蓝点
  private previewDot: HTMLElement;
  
  // 多个测量数据
  private measurements: MeasurementData[] = [];
  
  // 当前正在创建的测量
  private currentPinA: HTMLElement | null = null;
  private currentPoint1: Vector3 | null = null;
  
  // 测量工具
  private measurementTool: MeasurementTool;
  private camera: Camera;
  private container: HTMLElement;
  
  // 交互状态
  private isActive: boolean = false;
  private clickCount: number = 0;
  private currentSnap: SnapResult | null = null;
  
  // 预览线
  private previewLine: HTMLElement;
  
  // 拖拽检测
  private mouseDownPos: Vector2 = new Vector2();
  private readonly dragThreshold: number = 3; // 像素阈值
  
  // 鼠标事件绑定
  private boundMouseMove: (e: MouseEvent) => void;
  private boundMouseDown: (e: MouseEvent) => void;
  private boundMouseClick: (e: MouseEvent) => void;
  
  // 激活状态回调
  private onActiveChange?: (active: boolean) => void;

  // 节流处理 (10Hz)
  private lastMouseMoveUpdateTime: number = 0;
  private lastStaticUpdateTime: number = 0;
  private readonly THROTTLE_MS: number = 100; // 100ms = 10Hz
  private previewLabel: HTMLElement | null = null;
  private currentPreviewUnit: MeasurementUnit = 'mm';

  constructor(
    container: HTMLElement | string,
    camera: Camera,
    scene: Scene,
    onActiveChange?: (active: boolean) => void
  ) {
    this.camera = camera;
    this.onActiveChange = onActiveChange;
    
    // 创建测量工具
    this.measurementTool = new MeasurementTool(camera, scene);
    
    // 创建根容器
    this.element = document.createElement('div');
    this.element.className = 'exploder-measurement-root';
    this.applyStyle(this.element, `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      display: none;
    `);

    // 创建预览小蓝点
    this.previewDot = this.createPreviewDot();
    this.element.appendChild(this.previewDot);
    
    // 创建预览线
    this.previewLine = document.createElement('div');
    this.applyStyle(this.previewLine, `
      position: absolute;
      height: 2px;
      border-top: 2px dashed rgba(37, 99, 235, 0.5);
      pointer-events: none;
      display: none;
    `);
    this.element.appendChild(this.previewLine);

    // 挂载到容器
    const target = typeof container === 'string' ? document.querySelector(container) : container;
    this.container = (target || document.body) as HTMLElement;
    this.container.appendChild(this.element);
    
    // 创建预览标签
    this.previewLabel = this.createPreviewLabel();
    this.element.appendChild(this.previewLabel);
    
    // 绑定事件处理器
    this.boundMouseMove = this.handleMouseMove.bind(this);
    this.boundMouseDown = this.handleMouseDown.bind(this);
    this.boundMouseClick = this.handleMouseClick.bind(this);
    
    // 设置测量工具回调
    this.setupMeasurementCallbacks();
  }

  /**
   * 设置测量工具回调
   */
  private setupMeasurementCallbacks(): void {
    this.measurementTool.onMeasureStart(() => {
      console.log('[ExploderMeasurement] Measurement started');
    });
    
    this.measurementTool.onMeasureComplete((result: MeasurementResult) => {
      console.log('[ExploderMeasurement] Measurement complete:', result);
    });
    
    this.measurementTool.onSnapDetected((snap: SnapResult) => {
      this.currentSnap = snap;
    });
  }

  /**
   * 处理鼠标移动
   */
  private handleMouseMove(event: MouseEvent): void {
    if (!this.isActive) return;
    
    // 转换为归一化设备坐标
    const rect = this.container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    const mousePos = new Vector2(x, y);

    // 核心修复：如果鼠标移到了 UI 元素上（非 canvas），隐藏预览
    const target = event.target as HTMLElement;
    if (target.tagName !== 'CANVAS' && !target.classList.contains('exploder-measurement-root')) {
      this.previewDot.style.display = 'none';
      this.previewLine.style.display = 'none';
      this.previewLabel!.style.display = 'none';
      this.currentSnap = null;
      return;
    }
    
    // 检测吸附
    const snap = this.measurementTool.detectSnap(mousePos);
    
    if (snap) {
      this.currentSnap = snap;
      this.updatePreviewDotPosition(snap.position);
      this.previewDot.style.display = 'block';
      
      const now = Date.now();
      const shouldUpdateValue = now - this.lastMouseMoveUpdateTime > this.THROTTLE_MS;

      if (this.clickCount === 1 && this.currentPoint1) {
        this.updateLineElement(this.previewLine, this.currentPoint1, snap.position);
        this.previewLine.style.display = 'block';

        if (shouldUpdateValue) {
          const distance = this.currentPoint1.distanceTo(snap.position);
          const modelScale = this.measurementTool.getConfig().modelScale;
          const physicalDistance = distance / modelScale;
          
          console.log(`[ExploderMeasurement] Move - WorldDist: ${distance.toFixed(4)}, Scale: ${modelScale.toFixed(4)}, Physical: ${physicalDistance.toFixed(4)}`);
          
          const isApproximate = snap.type === SnapMode.FACE || snap.type === SnapMode.HOLE_EDGE;
          const format = MeasurementFormatter.formatLength(
            physicalDistance,
            this.currentPreviewUnit,
            MeasurementType.LINEAR,
            isApproximate
          );
          this.currentPreviewUnit = format.unit;
          this.updateLabelContent(this.previewLabel!, format.value, format.unit, format.prefix);
          this.lastMouseMoveUpdateTime = now;
        }
        
        this.updateLabelPosition(this.previewLabel!, this.currentPoint1, snap.position);
        this.previewLabel!.style.display = 'flex';
      } else {
        this.previewLabel!.style.display = 'none';
      }
    } else {
      // 没有吸附点,隐藏预览
      this.previewDot.style.display = 'none';
      this.currentSnap = null;
      this.previewLabel!.style.display = 'none';
      
      if (this.clickCount === 1) {
        this.previewLine.style.display = 'none';
      }
    }
  }

  private handleMouseDown(event: MouseEvent): void {
    this.mouseDownPos.set(event.clientX, event.clientY);
  }

  /**
   * 处理鼠标点击
   */
  private handleMouseClick(event: MouseEvent): void {
    if (!this.isActive) return;

    // 核心修复：防止点击 UI 元素触发测量
    const target = event.target as HTMLElement;
    if (target.tagName !== 'CANVAS') {
      return;
    }

    // 检测拖动位移
    const moveDistance = Math.sqrt(
      Math.pow(event.clientX - this.mouseDownPos.x, 2) +
      Math.pow(event.clientY - this.mouseDownPos.y, 2)
    );

    // 如果位移超过阈值,认为是操作相机,不触发测量
    if (moveDistance > this.dragThreshold) {
      return;
    }

    if (!this.currentSnap) {
      return;
    }
    
    const snap = this.currentSnap;
    
    if (this.clickCount === 0) {
      // 第一次点击 - 设置起点
      this.currentPoint1 = snap.position.clone();
      this.currentPinA = this.createPin();
      this.updatePinPosition3D(this.currentPinA, snap.position);
      this.currentPinA.style.display = 'flex';
      this.element.appendChild(this.currentPinA);
      this.previewDot.style.display = 'none';
      this.clickCount = 1;

      // 重置预览单位为默认或当前测量工具配置的单位
      this.currentPreviewUnit = this.measurementTool.getConfig().unit as MeasurementUnit;
    } else if (this.clickCount === 1 && this.currentPoint1 && this.currentPinA) {
      // 第二次点击 - 完成测量
      const point2 = snap.position.clone();
      const distance = this.currentPoint1.distanceTo(point2);
      const modelScale = this.measurementTool.getConfig().modelScale;
      const physicalDistance = distance / modelScale;
      
      // 判断是否是近似值 (比如面吸附)
      const isApproximate = snap.type === SnapMode.FACE || snap.type === SnapMode.HOLE_EDGE;
      const type = MeasurementType.LINEAR;

      // 使用格式化器获取最终精确值
      const format = MeasurementFormatter.formatLength(
        physicalDistance,
        this.currentPreviewUnit,
        type,
        isApproximate
      );
      
      // 创建第二个大头针
      const pinB = this.createPin();
      this.updatePinPosition3D(pinB, point2);
      pinB.style.display = 'flex';
      this.element.appendChild(pinB);
      
      // 创建连接线
      const line = document.createElement('div');
      this.applyStyle(line, `
        position: absolute;
        height: 2px;
        border-top: 2px dashed rgba(37, 99, 235, 0.8);
        pointer-events: none;
      `);
      this.updateLineElement(line, this.currentPoint1, point2);
      this.element.appendChild(line);
      
      // 创建标签
      const label = this.createCompactLabel(format.value, format.unit, format.prefix, this.measurements.length);
      this.updateLabelPosition(label, this.currentPoint1, point2);
      this.element.appendChild(label);
      
      // 保存测量数据
      const measurement: MeasurementData = {
        pinA: this.currentPinA,
        pinB: pinB,
        line: line,
        label: label,
        point1: this.currentPoint1,
        point2: point2,
        worldDistance: distance,
        unit: format.unit,
        type: type
      };
      this.measurements.push(measurement);
      
      // 重置状态,准备下一次测量
      this.previewDot.style.display = 'none';
      this.previewLine.style.display = 'none';
      this.previewLabel!.style.display = 'none';
      this.currentPinA = null;
      this.currentPoint1 = null;
      this.clickCount = 0;
      
      console.log(`[ExploderMeasurement] Measurement #${this.measurements.length} complete: ${format.value} ${format.unit}`);
    }
  }

  /**
   * 创建预览大头针 (替代原来的小蓝点)
   */
  private createPreviewDot(): HTMLElement {
    const pin = document.createElement('div');
    pin.className = 'exploder-preview-pin';
    this.applyStyle(pin, `
      position: absolute;
      transform: translate(-50%, -100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      display: none;
      z-index: 100;
      opacity: 0.6;
    `);

    // SVG 图标 (调整路径以消除间隙，优化比例)
    pin.innerHTML = `
      <svg width="21" height="27" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3)); display: block;">
        <path d="M14 36L8 22H20L14 36Z" fill="#2563EB"/>
        <circle cx="14" cy="14" r="10" fill="#2563EB" stroke="white" stroke-width="2.5"/>
        <circle cx="14" cy="14" r="3.5" fill="white" opacity="0.9"/>
      </svg>
    `;

    return pin;
  }

  /**
   * 设置模型缩放比例
   */
  public setModelScale(scale: number): void {
    console.log(`[ExploderMeasurement] Received model scale: ${scale}`);
    this.measurementTool.updateConfig({ modelScale: scale });
    
    // 如果有已完成的测量，可能需要重新计算 (可选，这里先简单更新已有测量的单位显示)
    this.update();
  }

  /**
   * 创建大头针
   */
  private createPin(): HTMLElement {
    const pin = document.createElement('div');
    pin.className = 'exploder-measure-pin';
    this.applyStyle(pin, `
      position: absolute;
      transform: translate(-50%, -100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      z-index: 1;
    `);

    // SVG 图标 (调整路径以消除间隙，优化比例)
    pin.innerHTML = `
      <svg width="21" height="27" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3)); display: block;">
        <path d="M14 36L8 22H20L14 36Z" fill="#2563EB"/>
        <circle cx="14" cy="14" r="10" fill="#2563EB" stroke="white" stroke-width="2.5"/>
        <circle cx="14" cy="14" r="3.5" fill="white" opacity="0.9"/>
      </svg>
    `;

    return pin;
  }

  /**
   * 创建预览标签 (移动过程中显示)
   */
  private createPreviewLabel(): HTMLElement {
    const label = document.createElement('div');
    label.className = 'exploder-measure-preview-label';
    this.applyStyle(label, `
      position: absolute;
      z-index: 90;
      pointer-events: none;
      background: rgba(37, 99, 235, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 3px 8px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      color: white;
      display: none;
    `);

    label.innerHTML = `
      <span class="exploder-measure-prefix" style="font-weight: 700;"></span>
      <span class="exploder-measure-value" style="font-weight: 700; font-family: 'Courier New', monospace;">0.00</span>
      <span class="exploder-measure-unit" style="font-size: 9px; opacity: 0.9;">mm</span>
    `;

    return label;
  }

  /**
   * 创建紧凑型距离标签
   */
  private createCompactLabel(valueStr: string, unit: string, prefix: string, index: number): HTMLElement {
    const label = document.createElement('div');
    label.className = 'exploder-measure-label';
    this.applyStyle(label, `
      position: absolute;
      z-index: 2;
      pointer-events: auto;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 4px 10px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      transition: all 0.2s;
    `);

    // 含有前缀的容器
    const valueWrapper = document.createElement('div');
    this.applyStyle(valueWrapper, `display: flex; align-items: center; gap: 2px;`);

    const prefixEl = document.createElement('span');
    prefixEl.className = 'exploder-measure-prefix';
    prefixEl.textContent = prefix;
    this.applyStyle(prefixEl, `font-weight: 700; color: #2563EB; display: ${prefix ? 'inline' : 'none'};`);
    valueWrapper.appendChild(prefixEl);

    // 距离值
    const value = document.createElement('span');
    value.className = 'exploder-measure-value';
    value.textContent = valueStr;
    this.applyStyle(value, `
      font-weight: 700;
      color: #1F2937;
      font-family: 'Courier New', monospace;
    `);
    valueWrapper.appendChild(value);

    // 单位
    const unitEl = document.createElement('span');
    unitEl.className = 'exploder-measure-unit';
    unitEl.textContent = unit;
    this.applyStyle(unitEl, `
      font-weight: 600;
      color: #2563EB;
      font-size: 10px;
    `);

    // 删除按钮 (默认隐藏)
    const deleteBtn = document.createElement('button');
    deleteBtn.title = '删除';
    this.applyStyle(deleteBtn, `
      width: 16px;
      height: 16px;
      border: none;
      background: transparent;
      color: #9CA3AF;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-left: 2px;
      border-radius: 4px;
      transition: all 0.15s;
    `);
    deleteBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6L6 18"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    `;

    // 悬停显示删除按钮
    label.addEventListener('mouseenter', () => {
      deleteBtn.style.display = 'flex';
      label.style.paddingRight = '6px';
    });
    label.addEventListener('mouseleave', () => {
      deleteBtn.style.display = 'none';
      label.style.paddingRight = '10px';
    });

    // 点击 label 也要停止冒泡，并针对移动端显示/隐藏删除按钮
    label.addEventListener('click', (e) => {
      e.stopPropagation();
      // 在移动端或某些环境下，点击可以切换显示删除按钮
      const isVisible = deleteBtn.style.display === 'flex';
      if (isVisible) {
        deleteBtn.style.display = 'none';
        label.style.paddingRight = '10px';
      } else {
        deleteBtn.style.display = 'flex';
        label.style.paddingRight = '6px';
      }
    });

    // 阻止 mousedown 冒泡，防止触发 3D 旋转等
    label.addEventListener('mousedown', (e) => e.stopPropagation());

    // 删除按钮悬停效果
    deleteBtn.addEventListener('mouseenter', () => {
      deleteBtn.style.color = '#EF4444';
      deleteBtn.style.background = 'rgba(239, 68, 68, 0.1)';
    });
    deleteBtn.addEventListener('mouseleave', () => {
      deleteBtn.style.color = '#9CA3AF';
      deleteBtn.style.background = 'transparent';
    });

    // 删除点击事件
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.deleteMeasurement(index);
    });

    label.appendChild(valueWrapper);
    label.appendChild(unitEl);
    label.appendChild(deleteBtn);

    return label;
  }

  /**
   * 更新标签内容
   */
  private updateLabelContent(label: HTMLElement, value: string, unit: string, prefix: string): void {
    const valueEl = label.querySelector('.exploder-measure-value');
    const unitEl = label.querySelector('.exploder-measure-unit');
    const prefixEl = label.querySelector('.exploder-measure-prefix');
    
    if (valueEl) valueEl.textContent = value;
    if (unitEl) unitEl.textContent = unit;
    if (prefixEl) {
      prefixEl.textContent = prefix;
      (prefixEl as HTMLElement).style.display = prefix ? 'inline' : 'none';
    }
  }

  /**
   * 删除指定测量
   */
  private deleteMeasurement(index: number): void {
    const measurement = this.measurements[index];
    if (!measurement) return;
    
    // 移除 DOM 元素
    measurement.pinA.remove();
    measurement.pinB.remove();
    measurement.line.remove();
    measurement.label.remove();
    
    // 从数组中移除
    this.measurements.splice(index, 1);
    
    // 更新剩余标签的索引
    this.measurements.forEach((m, i) => {
      const deleteBtn = m.label.querySelector('button');
      if (deleteBtn) {
        deleteBtn.onclick = (e) => {
          e.stopPropagation();
          this.deleteMeasurement(i);
        };
      }
    });
    
    console.log(`[ExploderMeasurement] Deleted measurement, ${this.measurements.length} remaining`);
  }

  /**
   * 更新预览点位置
   */
  private updatePreviewDotPosition(worldPos: Vector3): void {
    const screenPos = worldPos.clone().project(this.camera);
    const rect = this.container.getBoundingClientRect();
    const x = (screenPos.x * 0.5 + 0.5) * rect.width;
    const y = (-screenPos.y * 0.5 + 0.5) * rect.height;
    
    this.previewDot.style.left = `${x}px`;
    this.previewDot.style.top = `${y}px`;
  }

  /**
   * 更新大头针位置
   */
  private updatePinPosition3D(pin: HTMLElement, worldPos: Vector3): void {
    const screenPos = worldPos.clone().project(this.camera);
    const rect = this.container.getBoundingClientRect();
    const x = (screenPos.x * 0.5 + 0.5) * rect.width;
    const y = (-screenPos.y * 0.5 + 0.5) * rect.height;
    
    pin.style.left = `${x}px`;
    pin.style.top = `${y}px`;
  }

  /**
   * 更新线元素
   */
  private updateLineElement(line: HTMLElement, start: Vector3, end: Vector3): void {
    const startScreen = start.clone().project(this.camera);
    const endScreen = end.clone().project(this.camera);
    
    const rect = this.container.getBoundingClientRect();
    const x1 = (startScreen.x * 0.5 + 0.5) * rect.width;
    const y1 = (-startScreen.y * 0.5 + 0.5) * rect.height;
    const x2 = (endScreen.x * 0.5 + 0.5) * rect.width;
    const y2 = (-endScreen.y * 0.5 + 0.5) * rect.height;
    
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = 'left';
  }

  /**
   * 更新所有测量 UI 元素的位置 (同步相机视角)
   */
  public update(): void {
    // 1. 更新正在进行的测量预览
    if (this.isActive && this.clickCount === 1 && this.currentPoint1) {
      this.updatePinPosition3D(this.currentPinA!, this.currentPoint1);
      if (this.currentSnap) {
        this.updatePreviewDotPosition(this.currentSnap.position);
        this.updateLineElement(this.previewLine, this.currentPoint1, this.currentSnap.position);
      }
    } else if (this.isActive && this.currentSnap) {
      this.updatePreviewDotPosition(this.currentSnap.position);
    }

    // 2. 更新已完成的测量
    const now = Date.now();
    const shouldUpdateStatic = now - this.lastStaticUpdateTime > this.THROTTLE_MS;

    for (const measurement of this.measurements) {
      if (shouldUpdateStatic) {
        // 同步测量结果 (处理单位变化)
        const modelScale = this.measurementTool.getConfig().modelScale;
        const physicalDistance = measurement.worldDistance / modelScale;
        
        const format = MeasurementFormatter.formatLength(
          physicalDistance,
          measurement.unit,
          measurement.type,
          false // 已完成测量视为精确
        );
        measurement.unit = format.unit;
        this.updateLabelContent(measurement.label, format.value, format.unit, format.prefix);
      }

      this.updatePinPosition3D(measurement.pinA, measurement.point1);
      this.updatePinPosition3D(measurement.pinB, measurement.point2);
      this.updateLineElement(measurement.line, measurement.point1, measurement.point2);
      this.updateLabelPosition(measurement.label, measurement.point1, measurement.point2);
    }
    
    if (shouldUpdateStatic) {
      this.lastStaticUpdateTime = now;
    }
  }

  /**
   * 更新标签位置(中点), 并处理小距离遮挡问题
   */
  private updateLabelPosition(label: HTMLElement, start: Vector3, end: Vector3): void {
    const startScreen = start.clone().project(this.camera);
    const endScreen = end.clone().project(this.camera);
    
    const rect = this.container.getBoundingClientRect();
    const x1 = (startScreen.x * 0.5 + 0.5) * rect.width;
    const y1 = (-startScreen.y * 0.5 + 0.5) * rect.height;
    const x2 = (endScreen.x * 0.5 + 0.5) * rect.width;
    const y2 = (-endScreen.y * 0.5 + 0.5) * rect.height;
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    // 计算屏幕距离
    const screenDist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    // 如果测量距离很小，将标签向上偏移以防遮挡大头针
    let offsetY = 0;
    if (screenDist < 80) {
      offsetY = -40; // 向上偏移 40 像素
    }
    
    label.style.left = `${midX}px`;
    label.style.top = `${midY + offsetY}px`;
    label.style.transform = 'translate(-50%, -50%)';
  }

  /**
   * 构建模型的吸附结构
   */
  public buildSnapStructures(model: Object3D): void {
    this.measurementTool.buildSnapStructures(model);
  }

  /**
   * 显示测量 UI
   */
  public show(): void {
    this.visible = true;
    this.isActive = true;
    this.element.style.display = 'block';
    
    // 添加自定义光标 (用户要求移除，使用默认光标)
    // this.container.classList.add('exploder-measurement-cursor');
    
    // 启用测量模式
    this.measurementTool.enableMeasurement();
    
    // 添加事件监听
    this.container.addEventListener('mousemove', this.boundMouseMove);
    this.container.addEventListener('mousedown', this.boundMouseDown);
    this.container.addEventListener('click', this.boundMouseClick);
    
    // 通知状态变化
    if (this.onActiveChange) {
      this.onActiveChange(true);
    }
    
    console.log('[ExploderMeasurement] Measurement mode activated');
  }

  /**
   * 隐藏测量 UI
   */
  public hide(): void {
    this.visible = false;
    this.isActive = false;
    this.element.style.display = 'none';
    
    // 移除自定义光标
    // this.container.classList.remove('exploder-measurement-cursor');
    
    // 禁用测量模式
    this.measurementTool.disableMeasurement();
    
    // 移除事件监听
    this.container.removeEventListener('mousemove', this.boundMouseMove);
    this.container.removeEventListener('mousedown', this.boundMouseDown);
    this.container.removeEventListener('click', this.boundMouseClick);
    
    // 重置当前测量状态(但保留已完成的测量)
    this.resetCurrentMeasurement();
    
    // 通知状态变化
    if (this.onActiveChange) {
      this.onActiveChange(false);
    }
    
    console.log('[ExploderMeasurement] Measurement mode deactivated');
  }

  /**
   * 切换显示状态
   */
  public toggle(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * 重置当前正在进行的测量
   */
  private resetCurrentMeasurement(): void {
    if (this.currentPinA) {
      this.currentPinA.remove();
      this.currentPinA = null;
    }
    this.currentPoint1 = null;
    this.clickCount = 0;
    this.currentSnap = null;
    this.previewDot.style.display = 'none';
    this.previewLine.style.display = 'none';
  }

  /**
   * 清除所有测量
   */
  public clearAll(): void {
    // 删除所有测量元素
    for (const measurement of this.measurements) {
      measurement.pinA.remove();
      measurement.pinB.remove();
      measurement.line.remove();
      measurement.label.remove();
    }
    this.measurements = [];
    
    // 重置当前测量
    this.resetCurrentMeasurement();
    
    console.log('[ExploderMeasurement] All measurements cleared');
  }

  /**
   * 释放资源
   */
  public dispose(): void {
    this.hide();
    this.clearAll();
    this.measurementTool.dispose();
    
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  private applyStyle(el: HTMLElement, style: string) {
    const old = el.getAttribute('style') || '';
    el.setAttribute('style', old + style);
  }
}
