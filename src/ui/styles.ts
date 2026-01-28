import { ExploderUIStyle } from '../core/types';

/**
 * 创建 UI 样式
 * @param style 样式配置
 * @returns CSS 样式对象
 */
export function createStyles(style: Partial<ExploderUIStyle> = {}): Record<string, string> {
  // 默认样式
  const defaultStyle: ExploderUIStyle = {
    width: '200px',
    height: '30px',
    position: 'bottom'
  };
  
  // 合并样式
  const mergedStyle: ExploderUIStyle = {
    ...defaultStyle,
    ...style
  };
  
  return {
    container: `
      position: absolute;
      top: 20px;
      right: 20px;
      width: 260px;
      border-radius: 4px;
      padding: 16px;
      z-index: 1000;
      font-family: -apple-system, sans-serif;
    `,
    label: `
      font-size: 12px;
      margin-bottom: 6px;
      display: block;
    `,
    slider: `
      width: 100%;
      height: 4px;
      cursor: pointer;
      margin: 8px 0;
    `,
    select: `
      width: 100%;
      padding: 4px 8px;
      border: 1px solid rgba(226, 221, 221, 0.86);
      border-radius: 2px;
      font-size: 12px;
      outline: none;
      margin-bottom: 12px;
    `,
    group: `
      margin-bottom: 16px;
    `,
    value: `
      font-size: 12px;
      font-weight: 500;
      float: right;
    `,
    button: `
      padding: 6px 12px;
      border: 1px solid rgba(226, 221, 221, 0.86);
      border-radius: 2px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
      outline: none;
    `
  };
}