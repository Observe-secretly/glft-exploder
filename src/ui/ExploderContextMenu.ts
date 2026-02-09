import { isMobile } from '../core/utils';

/**
 * 右键菜单组件
 * 用于提供显示/隐藏等操作
 */
export class ExploderContextMenu {
  private menu: HTMLElement;
  private onHide: (() => void) | null = null;
  private onShowAll: (() => void) | null = null;

  constructor(_container: HTMLElement) {
    this.menu = this.createMenu();
    this.hide();
    
    // 点击其他地方关闭菜单
    document.addEventListener('mousedown', (e) => {
      if (!this.menu.contains(e.target as Node)) {
        this.hide();
      }
    });

    // 窗口调整大小时关闭
    window.addEventListener('resize', () => this.hide());
  }

  private createMenu(): HTMLElement {
    const menu = document.createElement('div');
    menu.className = 'exploder-context-menu';
    
    const mobile = isMobile();
    
    Object.assign(menu.style, {
      position: 'fixed', // 使用 fixed 避免父容器偏移影响
      zIndex: '10000',
      backgroundColor: 'rgba(255, 255, 255, 0.45)', // 降低透明度支持玻璃效果
      backdropFilter: 'blur(16px) saturate(180%) brightness(1.1)', // 典型的液态玻璃效果
      WebkitBackdropFilter: 'blur(16px) saturate(180%) brightness(1.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: mobile ? '16px' : '12px',
      padding: '6px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(255, 255, 255, 0.2) inset',
      display: 'none',
      minWidth: mobile ? '160px' : '140px',
      fontSize: mobile ? '16px' : '14px',
      color: '#1F2937',
      userSelect: 'none',
      overflow: 'hidden',
      transition: 'opacity 0.2s, transform 0.2s',
      opacity: '0',
      transform: 'scale(0.95)',
      transformOrigin: 'top left'
    });

    document.body.appendChild(menu); // 挂载到 body 以免被溢出裁剪
    return menu;
  }

  public show(x: number, y: number, options: { showHide: boolean, showShowAll: boolean }): void {
    this.menu.innerHTML = '';
    
    if (options.showHide) {
      this.menu.appendChild(this.createItem('隐藏', () => {
        if (this.onHide) this.onHide();
        this.hide();
      }));
    }

    if (options.showShowAll) {
      this.menu.appendChild(this.createItem('显示所有', () => {
        if (this.onShowAll) this.onShowAll();
        this.hide();
      }));
    }

    if (this.menu.children.length === 0) return;

    // 边界检测
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    
    this.menu.style.display = 'block';
    
    // 强制先显示再测量，以便动画生效
    requestAnimationFrame(() => {
      this.menu.style.opacity = '1';
      this.menu.style.transform = 'scale(1)';
    });

    const menuRect = this.menu.getBoundingClientRect();
    let left = x;
    let top = y;

    if (left + menuRect.width > viewWidth) {
      left = viewWidth - menuRect.width - 12;
      this.menu.style.transformOrigin = 'top right';
    } else {
      this.menu.style.transformOrigin = 'top left';
    }
    
    if (top + menuRect.height > viewHeight) {
      top = viewHeight - menuRect.height - 12;
      // 如果底部放不下，调整原点向上弹出
      this.menu.style.transformOrigin = (left + menuRect.width > viewWidth) ? 'bottom right' : 'bottom left';
    }

    this.menu.style.left = `${left}px`;
    this.menu.style.top = `${top}px`;
  }

  public hide(): void {
    this.menu.style.opacity = '0';
    this.menu.style.transform = 'scale(0.95)';
    setTimeout(() => {
      if (this.menu.style.opacity === '0') {
        this.menu.style.display = 'none';
      }
    }, 200);
  }

  private createItem(text: string, onClick: () => void): HTMLElement {
    const item = document.createElement('div');
    item.className = 'exploder-context-menu-item';
    
    const mobile = isMobile();
    const itemIcon = text === '隐藏' ? '👁️‍🗨️' : '✨';
    
    item.innerHTML = `<span style="margin-right: 12px; font-size: ${mobile ? '18px' : '16px'}">${itemIcon}</span><span>${text}</span>`;
    
    Object.assign(item.style, {
      padding: mobile ? '14px 24px' : '10px 20px',
      cursor: 'pointer',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      margin: '2px',
      fontWeight: '500'
    });

    item.onmouseenter = () => {
      item.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      item.style.color = '#2563EB';
      item.style.transform = 'translateX(4px)';
    };
    item.onmouseleave = () => {
      item.style.backgroundColor = 'transparent';
      item.style.color = '#1F2937';
      item.style.transform = 'translateX(0)';
    };
    item.onclick = onClick;

    return item;
  }

  public setOnHide(callback: () => void): void {
    this.onHide = callback;
  }

  public setOnShowAll(callback: () => void): void {
    this.onShowAll = callback;
  }

  public dispose(): void {
    if (this.menu.parentElement) {
      this.menu.parentElement.removeChild(this.menu);
    }
  }
}
