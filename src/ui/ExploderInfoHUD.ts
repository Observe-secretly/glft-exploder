/**
 * 爆炸视图左上角信息 HUD
 * 显示模型名称和系统状态
 */
export class ExploderInfoHUD {
  public element: HTMLElement;
  private modelNameDisplay: HTMLSpanElement;
  private faceCountDisplay: HTMLSpanElement;

  constructor(container: HTMLElement | string, initialModelName: string = '加载中...', initialFaceCount: number = 0) {
    // 1. 创建 HUD 容器
    this.element = document.createElement('div');
    this.element.className = 'exploder-info-hud';
    this.applyStyle(this.element, `
      position: absolute;
      top: 24px;
      left: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
      z-index: 100;
    `);

    // 2. 模型名称卡片
    const nameCard = document.createElement('div');
    nameCard.className = 'exploder-card';
    this.applyStyle(nameCard, `
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      pointer-events: auto;
    `);
    
    // 图标
    const icon = document.createElement('div');
    this.applyStyle(icon, `
      width: 40px;
      height: 40px;
      background: var(--exploder-accent);
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    `);
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
    
    // 文字内容
    const content = document.createElement('div');
    this.applyStyle(content, `
      display: flex;
      flex-direction: column;
    `);
    
    this.modelNameDisplay = document.createElement('span');
    this.modelNameDisplay.textContent = initialModelName;
    this.applyStyle(this.modelNameDisplay, `
      font-size: 13px;
      font-weight: 700;
      color: var(--exploder-text-main);
      line-height: 1.2;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `);
    
    this.faceCountDisplay = document.createElement('span');
    this.faceCountDisplay.textContent = `面数: ${initialFaceCount.toLocaleString()}`;
    this.applyStyle(this.faceCountDisplay, `
      font-size: 10px;
      color: var(--exploder-text-muted);
      font-weight: 700;
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `);
    
    content.appendChild(this.modelNameDisplay);
    content.appendChild(this.faceCountDisplay);
    nameCard.appendChild(icon);
    nameCard.appendChild(content);
    this.element.appendChild(nameCard);

    // 3. 状态标签
    const statusLabel = document.createElement('div');
    this.applyStyle(statusLabel, `
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(229, 231, 235, 0.5);
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      width: fit-content;
      pointer-events: auto;
    `);
    
    const dot = document.createElement('span');
    dot.className = 'exploder-status-dot exploder-animate-pulse';
    
    const statusText = document.createElement('span');
    statusText.textContent = 'WebGL 2.0 渲染引擎已启动';
    this.applyStyle(statusText, `
      font-size: 10px;
      font-weight: 700;
      color: var(--exploder-text-sub);
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `);
    
    statusLabel.appendChild(dot);
    statusLabel.appendChild(statusText);
    this.element.appendChild(statusLabel);

    // 挂载
    const target = typeof container === 'string' ? document.querySelector(container) : container;
    (target || document.body).appendChild(this.element);
  }

  public update(name: string, faceCount: number): void {
    this.modelNameDisplay.textContent = name;
    this.faceCountDisplay.textContent = `面数: ${faceCount.toLocaleString()}`;
  }

  public setModelName(name: string): void {
    this.modelNameDisplay.textContent = name;
  }

  public setFaceCount(count: number): void {
    this.faceCountDisplay.textContent = `面数: ${count.toLocaleString()}`;
  }

  public dispose(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  private applyStyle(el: HTMLElement, style: string) {
    const old = el.getAttribute('style') || '';
    el.setAttribute('style', old + style);
  }
}
