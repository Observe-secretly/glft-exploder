import { ExploderUIStyle } from '../core/types';

/**
 * 创建 UI 样式
 * @param style 样式配置
 * @returns CSS 样式对象
 */
export function createStyles(_style: Partial<ExploderUIStyle> = {}): Record<string, string> {
  return {
    container: `
      position: absolute;
      top: 24px;
      right: 24px;
      width: 320px;
      max-height: calc(100vh - 48px);
      overflow-y: auto;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 24px;
    `,
    section: `
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,
    sectionHeader: `
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
    `,
    title: `
      font-family: 'General Sans', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: -0.01em;
      margin: 0;
      color: var(--exploder-text-main);
    `,
    labelContainer: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    label: `
      font-size: 11px;
      font-weight: 700;
      color: var(--exploder-text-sub);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,
    value: `
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: var(--exploder-accent);
    `,
    slider: `
      width: 100%;
    `,
    hint: `
      font-size: 10px;
      color: var(--exploder-text-muted);
      margin-top: 4px;
    `,
    grid: `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    `,
    select: `
      width: 100%;
      padding: 10px 12px;
      background: var(--exploder-bg-sub);
      border: 1px solid var(--exploder-border);
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--exploder-text-main);
      outline: none;
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
    `,
    buttonReset: `
      width: 100%;
      padding: 16px;
      background: #111827;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `,
    buttonResetHover: `
      background: #000000;
      transform: translateY(-1px);
    `,
    buttonResetActive: `
      transform: scale(0.98);
    `
  };
}
