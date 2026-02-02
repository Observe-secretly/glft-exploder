import { ExploderUI, MultiplierChangeCallback, ExposureChangeCallback, ExplosionMode, ModeChangeCallback, AxialChangeCallback, ModelChangeCallback, HelperVisibilityChangeCallback, ModelOption, ExploderUIStyle, EXPLODER_CONSTANTS } from '../core/types';
import { createStyles } from './styles';
import { Vector3 } from 'three';

/**
 * 爆炸视图面板控件
 * 采用 Pro GLB Viewer 风格重构
 */
export class ExploderPanel implements ExploderUI {
  public element: HTMLElement;
  
  private multiplierSlider: HTMLInputElement;
  private exposureSlider: HTMLInputElement;
  private modeButtons: Map<ExplosionMode, HTMLElement> = new Map();
  private modelSelect?: HTMLSelectElement;
  private axialSelect: HTMLSelectElement;
  private helperToggle: HTMLInputElement;
  private axialContainer: HTMLElement;
  private multiplierDisplay: HTMLSpanElement;
  private exposureDisplay: HTMLSpanElement;
  private resetButton: HTMLButtonElement;
  
  private onMultiplierChange: MultiplierChangeCallback;
  private onExposureChange?: ExposureChangeCallback;
  private onModeChange?: ModeChangeCallback;
  private onAxialChange?: AxialChangeCallback;
  private onModelChange?: ModelChangeCallback;
  private onHelperVisibilityChange?: HelperVisibilityChangeCallback;
  private onReset?: () => void;
  private styles: Record<string, string>;
  
  constructor(
    container: HTMLElement | string,
    onMultiplierChange: MultiplierChangeCallback,
    onExposureChange?: ExposureChangeCallback,
    onModeChange?: ModeChangeCallback,
    onAxialChange?: AxialChangeCallback,
    onModelChange?: ModelChangeCallback,
    onHelperVisibilityChange?: HelperVisibilityChangeCallback,
    onReset?: () => void,
    initialMultiplier = EXPLODER_CONSTANTS.MULTIPLIER.DEFAULT,
    initialExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT,
    initialMode = ExplosionMode.RADIAL,
    initialAxial = new Vector3(0, 1, 0),
    initialHelperVisible = true,
    models: string[] | ModelOption[] = [],
    initialModel?: string,
    style: Partial<ExploderUIStyle> = {},
    showUpload = false
  ) {
    this.onMultiplierChange = onMultiplierChange;
    this.onExposureChange = onExposureChange;
    this.onModeChange = onModeChange;
    this.onAxialChange = onAxialChange;
    this.onModelChange = onModelChange;
    this.onHelperVisibilityChange = onHelperVisibilityChange;
    this.onReset = onReset;
    this.styles = createStyles(style);
    
    // 1. 创建面板容器
    this.element = document.createElement('aside');
    this.element.className = 'exploder-ui-root exploder-card exploder-scrollbar';
    this.applyStyle(this.element, this.styles.container);
    
    // 2. 创建标题栏
    const header = document.createElement('div');
    this.applyStyle(header, this.styles.sectionHeader);
    header.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.72V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.17a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <h3 style="${this.styles.title}">参数控制面板</h3>
    `;
    this.element.appendChild(header);

    const contentWrapper = document.createElement('div');
    this.applyStyle(contentWrapper, 'display: flex; flex-direction: column; gap: 32px; flex: 1;');
    this.element.appendChild(contentWrapper);

    // 3. 模型资源
    const hasModels = models && models.length > 0;
    const showModelSection = hasModels || showUpload;
    
    if (showModelSection) {
      const modelSection = this.createSection('模型资源', hasModels ? '选择或上传 3D 资产' : '上传本地 3D 资产进行预览');
      
      if (hasModels) {
        const select = document.createElement('select');
        this.modelSelect = select;
        select.className = 'exploder-select';
        this.applyStyle(select, this.styles.select);
        
        models.forEach(model => {
          const option = document.createElement('option');
          const modelPath = typeof model === 'string' ? model : model.value;
          option.value = modelPath;
          option.textContent = typeof model === 'string' ? (model.split('/').pop() || model) : model.label;
          if (modelPath === initialModel) option.selected = true;
          select.appendChild(option);
        });
        modelSection.appendChild(select);
      }

      // 本地上传功能
      if (showUpload) {
        const uploadBtn = document.createElement('div');
        this.applyStyle(uploadBtn, `
          margin-top: ${hasModels ? '12px' : '0'};
          padding: 10px;
          background: var(--exploder-bg-sub);
          border: 1px dashed var(--exploder-border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.2s;
        `);
        uploadBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--exploder-text-sub)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
          <span style="font-size: 11px; font-weight: 600; color: var(--exploder-text-sub);">上传本地 GLB</span>
          <input type="file" accept=".glb,.gltf" style="display: none;">
        `;
        const fileInput = uploadBtn.querySelector('input') as HTMLInputElement;
        uploadBtn.onclick = () => fileInput.click();
        fileInput.onchange = (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            // 我们在这里伪造一个 ModelChange 事件，但传递的是 Blob URL
            this.onModelChange?.(url);
          }
        };
        
        modelSection.appendChild(uploadBtn);
      }
      contentWrapper.appendChild(modelSection);
    }

    // 4. 爆炸系数
    const multiplierSection = this.createSection('', '调整组件之间分离的距离倍数');
    const multiplierLabelWrap = this.createLabelWrapper('爆炸系数(分离倍数)');
    this.multiplierDisplay = document.createElement('span');
    this.multiplierDisplay.className = 'exploder-value';
    this.applyStyle(this.multiplierDisplay, this.styles.value);
    this.multiplierDisplay.textContent = `${initialMultiplier.toFixed(1)}x`;
    multiplierLabelWrap.appendChild(this.multiplierDisplay);
    multiplierSection.insertBefore(multiplierLabelWrap, multiplierSection.firstChild);

    this.multiplierSlider = document.createElement('input');
    this.multiplierSlider.type = 'range';
    this.multiplierSlider.className = 'exploder-slider';
    this.multiplierSlider.min = EXPLODER_CONSTANTS.MULTIPLIER.MIN.toString();
    this.multiplierSlider.max = EXPLODER_CONSTANTS.MULTIPLIER.MAX.toString();
    this.multiplierSlider.step = EXPLODER_CONSTANTS.MULTIPLIER.STEP.toString();
    this.multiplierSlider.value = initialMultiplier.toString();
    this.applyStyle(this.multiplierSlider, this.styles.slider);
    multiplierSection.appendChild(this.multiplierSlider);
    contentWrapper.appendChild(multiplierSection);

    // 6. 渲染亮度
    const exposureSection = this.createSection('', '调整 3D 场景的光照表现');
    const exposureLabelWrap = this.createLabelWrapper('环境亮度');
    this.exposureDisplay = document.createElement('span');
    this.exposureDisplay.className = 'exploder-value';
    this.applyStyle(this.exposureDisplay, this.styles.value);
    this.exposureDisplay.textContent = initialExposure.toFixed(1);
    exposureLabelWrap.appendChild(this.exposureDisplay);
    exposureSection.insertBefore(exposureLabelWrap, exposureSection.firstChild);

    this.exposureSlider = document.createElement('input');
    this.exposureSlider.type = 'range';
    this.exposureSlider.className = 'exploder-slider';
    this.exposureSlider.min = EXPLODER_CONSTANTS.EXPOSURE.MIN.toString();
    this.exposureSlider.max = EXPLODER_CONSTANTS.EXPOSURE.MAX.toString();
    this.exposureSlider.step = EXPLODER_CONSTANTS.EXPOSURE.STEP.toString();
    this.exposureSlider.value = initialExposure.toString();
    this.applyStyle(this.exposureSlider, this.styles.slider);
    exposureSection.appendChild(this.exposureSlider);
    contentWrapper.appendChild(exposureSection);

    // 7. 爆炸模式
    const modeSection = this.createSection('爆炸模式', '选择不同的组件分离算法');
    const modeGrid = document.createElement('div');
    this.applyStyle(modeGrid, this.styles.grid);
    
    const modes = [
      { id: ExplosionMode.RADIAL, label: '径向模式', icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1' },
      { id: ExplosionMode.NORMALIZED_RADIAL, label: '归一化径向', icon: 'M21 3h-6M3 21h6M3 3v6M21 21v-6M3 3l7.5 7.5M21 21l-7.5-7.5' },
      { id: ExplosionMode.AXIAL, label: '轴向模式', icon: 'M7 7h10M7 12h10M7 17h10' },
      { id: ExplosionMode.FORCE_FIELD, label: '力场式', icon: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0' },
      { id: ExplosionMode.SIZE_WEIGHTED, label: '尺寸加权', icon: 'M3 6h18M7 12h10M10 18h4' },
      { id: ExplosionMode.HIERARCHICAL, label: '装配树级', icon: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' }
    ];

    modes.forEach(m => {
      const btn = document.createElement('div');
      btn.className = `exploder-mode-btn ${initialMode === m.id ? 'active' : ''}`;
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${m.icon}"/></svg>
        <span>${m.label}</span>
      `;
      btn.onclick = () => this.handleModeClick(m.id);
      modeGrid.appendChild(btn);
      this.modeButtons.set(m.id, btn);
    });
    modeSection.appendChild(modeGrid);

    // 轴向选择 (仅轴向模式可见)
    this.axialContainer = document.createElement('div');
    this.applyStyle(this.axialContainer, `margin-top: 12px; display: ${initialMode === ExplosionMode.AXIAL ? 'block' : 'none'}`);
    this.axialSelect = document.createElement('select');
    this.applyStyle(this.axialSelect, this.styles.select);
    [
      { v: '0,1,0', l: 'Y 轴 (垂直)' },
      { v: '1,0,0', l: 'X 轴 (横向)' },
      { v: '0,0,1', l: 'Z 轴 (纵向)' }
    ].forEach(a => {
      const opt = document.createElement('option');
      opt.value = a.v; opt.textContent = a.l;
      if (a.v === `${initialAxial.x},${initialAxial.y},${initialAxial.z}`) opt.selected = true;
      this.axialSelect.appendChild(opt);
    });
    this.axialContainer.appendChild(this.axialSelect);
    modeSection.appendChild(this.axialContainer);
    contentWrapper.appendChild(modeSection);

    // 8. 辅助选项
    const helperSection = this.createSection('辅助视图', '控制场景辅助元素的显示');
    const helperRow = document.createElement('label');
    this.applyStyle(helperRow, 'display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none;');
    this.helperToggle = document.createElement('input');
    this.helperToggle.type = 'checkbox';
    this.helperToggle.checked = initialHelperVisible;
    this.helperToggle.style.width = '16px';
    this.helperToggle.style.height = '16px';
    this.helperToggle.style.accentColor = 'var(--exploder-accent)';
    helperRow.appendChild(this.helperToggle);
    const helperText = document.createElement('span');
    helperText.textContent = '显示网格与坐标轴标签';
    this.applyStyle(helperText, 'font-size: 12px; font-weight: 500; color: var(--exploder-text-sub);');
    helperRow.appendChild(helperText);
    helperSection.appendChild(helperRow);
    contentWrapper.appendChild(helperSection);

    // 9. 重置按钮
    const footer = document.createElement('div');
    this.applyStyle(footer, 'padding-top: 12px; margin-top: auto;');
    this.resetButton = document.createElement('button');
    this.resetButton.className = 'exploder-button-reset';
    this.applyStyle(this.resetButton, this.styles.buttonReset);
    this.resetButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
      <span>重置视图与参数</span>
    `;
    
    // 按钮交互
    this.resetButton.onmouseenter = () => this.applyStyle(this.resetButton, this.styles.buttonReset + this.styles.buttonResetHover);
    this.resetButton.onmouseleave = () => this.applyStyle(this.resetButton, this.styles.buttonReset);
    this.resetButton.onmousedown = () => this.applyStyle(this.resetButton, this.styles.buttonReset + this.styles.buttonResetActive);
    this.resetButton.onmouseup = () => this.applyStyle(this.resetButton, this.styles.buttonReset + this.styles.buttonResetHover);
    
    footer.appendChild(this.resetButton);
    this.element.appendChild(footer);

    // 事件绑定
    this.multiplierSlider.oninput = (e) => {
      const v = parseFloat((e.target as HTMLInputElement).value);
      this.updateMultiplier(v);
      this.onMultiplierChange(v);
    };
    this.exposureSlider.oninput = (e) => {
      const v = parseFloat((e.target as HTMLInputElement).value);
      this.updateExposure(v);
      this.onExposureChange?.(v);
    };
    if (this.modelSelect) this.modelSelect.onchange = (e) => this.onModelChange?.((e.target as HTMLSelectElement).value);
    this.axialSelect.onchange = (e) => {
      const [x, y, z] = (e.target as HTMLSelectElement).value.split(',').map(Number);
      this.onAxialChange?.(new Vector3(x, y, z));
    };
    this.helperToggle.onchange = (e) => this.onHelperVisibilityChange?.((e.target as HTMLInputElement).checked);
    this.resetButton.onclick = () => {
      this.onReset?.();
    };

    // 挂载
    const target = typeof container === 'string' ? document.querySelector(container) : container;
    (target || document.body).appendChild(this.element);
  }

  private createSection(title?: string, hint?: string): HTMLElement {
    const sec = document.createElement('section');
    this.applyStyle(sec, this.styles.section);
    
    if (title) {
      const label = document.createElement('label');
      this.applyStyle(label, this.styles.label);
      label.textContent = title;
      sec.appendChild(label);
    }
    
    if (hint) {
      const hintEl = document.createElement('p');
      this.applyStyle(hintEl, this.styles.hint);
      hintEl.textContent = hint;
      sec.appendChild(hintEl);
    }
    
    return sec;
  }

  private createLabelWrapper(text: string): HTMLElement {
    const wrap = document.createElement('div');
    this.applyStyle(wrap, this.styles.labelContainer);
    const label = document.createElement('span');
    this.applyStyle(label, this.styles.label);
    label.textContent = text;
    wrap.appendChild(label);
    return wrap;
  }

  private handleModeClick(mode: ExplosionMode): void {
    this.updateMode(mode);
    this.onModeChange?.(mode);
  }

  private applyStyle(el: HTMLElement, style: string): void {
    const existing = el.getAttribute('style') || '';
    el.setAttribute('style', existing + style);
  }

  public show(): void { this.element.style.display = 'flex'; }
  public hide(): void { this.element.style.display = 'none'; }
  
  public update(_progress: number): void {
    // 进度控制已移至 HUD
  }

  public updateMultiplier(multiplier: number): void {
    this.multiplierSlider.value = multiplier.toString();
    this.multiplierDisplay.textContent = `${multiplier.toFixed(1)}x`;
  }

  public updateExposure(exposure: number): void {
    this.exposureSlider.value = exposure.toString();
    this.exposureDisplay.textContent = exposure.toFixed(1);
  }

  public updateMode(mode: ExplosionMode): void {
    this.modeButtons.forEach((btn, id) => {
      if (id === mode) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    if (this.axialContainer) {
      this.axialContainer.style.display = mode === ExplosionMode.AXIAL ? 'block' : 'none';
    }
  }

  public updateHelperVisibility(visible: boolean): void {
    if (this.helperToggle) this.helperToggle.checked = visible;
  }

  public updateAxialVector(vector: Vector3): void {
    if (this.axialSelect) this.axialSelect.value = `${vector.x},${vector.y},${vector.z}`;
  }

  public dispose(): void {
    if (this.element.parentNode) this.element.parentNode.removeChild(this.element);
  }
}
