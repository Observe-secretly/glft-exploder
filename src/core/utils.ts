import { Object3D, Vector3, Sprite, SpriteMaterial, CanvasTexture } from 'three';
import { EXPLODER_CONSTANTS } from './types';

/**
 * 创建一个精致的文本精灵标签
 * @param text 标签文字
 * @param color 背景颜色
 * @returns Sprite 对象
 */
export function createTextSprite(text: string, color: string = '#2563EB'): Sprite {
  const canvas = document.createElement('canvas');
  const size = 128; // 高分辨率
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // 绘制圆角背景或圆形背景
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2.2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // 绘制文字
    ctx.font = 'bold 72px Inter, system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(text, size / 2, size / 2);
  }

  const texture = new CanvasTexture(canvas);
  const material = new SpriteMaterial({ map: texture, transparent: true });
  const sprite = new Sprite(material);
  
  // 缩放到合适大小 (0.4个单位)
  sprite.scale.set(0.4, 0.4, 1);
  
  return sprite;
}

/**
 * 计算从中心点到对象的方向向量
 * @param object 对象
 * @param center 中心点
 * @returns 方向向量（已归一化）
 */
export function calculateDirection(object: Object3D, center: Vector3): Vector3 {
  // 获取对象的世界坐标
  const objectPosition = new Vector3();
  object.getWorldPosition(objectPosition);
  
  // 计算方向向量（从中心点到对象）
  const direction = new Vector3().subVectors(objectPosition, center);
  
  // 如果方向向量长度过小（对象在中心点附近），则基于对象在层级中的位置生成一个稳定的伪随机方向
  if (direction.length() < EXPLODER_CONSTANTS.DIRECTION.MIN_LENGTH) {
    // 使用对象的 uuid 作为随机种子，确保相同对象每次生成相同方向
    const uuid = object.uuid || '';
    const hash = hashString(uuid);
    
    // 使用哈希值生成方向
    direction.set(
      Math.cos(hash * EXPLODER_CONSTANTS.DIRECTION.ANGLE_FACTOR), // 0.017... = PI/180
      Math.sin(hash * EXPLODER_CONSTANTS.DIRECTION.ANGLE_FACTOR),
      Math.cos(hash * EXPLODER_CONSTANTS.DIRECTION.Z_FACTOR)
    );
    
    // 如果对象有父对象，考虑其在父对象中的索引
    if (object.parent) {
      const index = object.parent.children.indexOf(object);
      if (index >= 0) {
        // 根据索引稍微调整方向，使同一父对象的子对象爆炸方向略有不同
        direction.x += Math.cos(index * EXPLODER_CONSTANTS.DIRECTION.INDEX_ANGLE) * EXPLODER_CONSTANTS.DIRECTION.XY_OFFSET;
        direction.y += Math.sin(index * EXPLODER_CONSTANTS.DIRECTION.INDEX_ANGLE) * EXPLODER_CONSTANTS.DIRECTION.XY_OFFSET;
        direction.z += (index % 3 - 1) * EXPLODER_CONSTANTS.DIRECTION.Z_OFFSET;
      }
    }
  }
  
  // 归一化方向向量
  return direction.normalize();
}

/**
 * 将字符串转换为数字哈希值
 * @param str 输入字符串
 * @returns 哈希值
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0; // 转换为32位整数
  }
  return Math.abs(hash % 360); // 返回0-359之间的值，可用作角度
}

/**
 * 获取 DOM 元素
 * @param container 容器元素或选择器
 * @returns DOM 元素
 */
export function getContainer(container: HTMLElement | string): HTMLElement {
  if (typeof container === 'string') {
    const element = document.querySelector(container);
    if (!element) {
      throw new Error(`找不到容器元素: ${container}`);
    }
    return element as HTMLElement;
  }
  return container;
}

/**
 * 限制值在指定范围内
 * @param value 值
 * @param min 最小值
 * @param max 最大值
 * @returns 限制后的值
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * 计算模型总面数（三角形数量）
 * @param model 模型对象
 * @returns 面数
 */
export function calculateFaceCount(model: Object3D): number {
  let count = 0;
  model.traverse((child: any) => {
    if (child.isMesh && child.geometry) {
      const geometry = child.geometry;
      if (geometry.index) {
        count += geometry.index.count / 3;
      } else if (geometry.attributes.position) {
        count += geometry.attributes.position.count / 3;
      }
    }
  });
  return Math.floor(count);
}

/**
 * 从路径或 URL 中提取文件名
 * @param path 路径
 * @returns 文件名
 */
export function getFileName(path: string): string {
  if (!path) return 'Unknown Model';
  const parts = path.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.split('?')[0]; // 移除查询参数
}

/**
 * 检测当前环境是否为移动端
 * @returns 是否为移动端
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         (window.innerWidth <= 768);
}