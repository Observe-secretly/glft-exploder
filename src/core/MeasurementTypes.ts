import { Vector3 } from 'three';

/**
 * 吸附模式枚举
 */
export enum SnapMode {
  VERTEX = 'vertex',   // 顶点吸附
  EDGE = 'edge',       // 边吸附
  FACE = 'face',       // 面吸附
  HOLE_EDGE = 'hole_edge' // 孔边缘吸附
}

/**
 * 单位类型
 */
export type MeasurementUnit = 'm' | 'cm' | 'mm';

/**
 * 测量配置接口
 */
export interface MeasurementConfig {
  /** 顶点吸附半径 (像素) */
  snapRadius: number;
  /** 边吸附阈值 (像素) */
  edgeThreshold: number;
  /** 显示单位 */
  unit: MeasurementUnit;
  /** 吸附模式优先级 */
  snapModes: SnapMode[];
  /** 大头针颜色 */
  pinColor: string;
  /** 连线宽度 */
  lineWidth: number;
  /** 连线颜色 */
  lineColor: string;
  /** 标签背景色 */
  labelBgColor: string;
}

/**
 * 吸附结果接口
 */
export interface SnapResult {
  /** 吸附点的世界坐标 */
  position: Vector3;
  /** 吸附类型 */
  type: SnapMode;
  /** 吸附到的对象 (顶点索引、边索引等) */
  target?: any;
  /** 吸附距离 */
  distance: number;
}

/**
 * 测量结果接口
 */
export interface MeasurementResult {
  /** 起点 */
  point1: Vector3;
  /** 终点 */
  point2: Vector3;
  /** 距离 (米) */
  distance: number;
  /** 格式化的距离字符串 */
  formattedDistance: string;
  /** 使用的单位 */
  unit: MeasurementUnit;
}

/**
 * 事件回调类型
 */
export type MeasureStartCallback = () => void;
export type MeasureCompleteCallback = (result: MeasurementResult) => void;
export type SnapDetectedCallback = (snap: SnapResult) => void;

/**
 * 默认配置
 */
export const DEFAULT_MEASUREMENT_CONFIG: MeasurementConfig = {
  snapRadius: 15,
  edgeThreshold: 8,
  unit: 'mm',
  snapModes: [SnapMode.VERTEX, SnapMode.EDGE, SnapMode.FACE],
  pinColor: '#2563EB',
  lineWidth: 2,
  lineColor: 'rgba(37, 99, 235, 0.4)',
  labelBgColor: 'rgba(255, 255, 255, 0.7)'
};
