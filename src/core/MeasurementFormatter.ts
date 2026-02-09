import { MeasurementUnit, MeasurementType } from './MeasurementTypes';

/**
 * 格式化结果接口
 */
export interface FormatResult {
  value: string;
  unit: MeasurementUnit;
  prefix: string;
}

/**
 * 测量格式化工具类
 * 实现工程级测量单位自适应系统
 */
export class MeasurementFormatter {
  // 单位切换阈值 (mm)
  private static readonly MM_TO_M_THRESHOLD = 1200;
  private static readonly M_TO_MM_THRESHOLD = 800;

  /**
   * 格式化长度
   * @param distance 米 (m)
   * @param currentUnit 当前使用的单位 (用于滞后判断)
   * @param type 测量类型
   * @param isApproximate 是否为近似值
   * @returns 格式化结果
   */
  public static formatLength(
    distance: number,
    currentUnit: MeasurementUnit = 'mm',
    type: MeasurementType = MeasurementType.LINEAR,
    isApproximate: boolean = false
  ): FormatResult {
    const distanceMm = distance * 1000;
    let targetUnit: MeasurementUnit = currentUnit;

    // 1. 单位切换逻辑 (带区间锁/滞后)
    if (currentUnit === 'mm' && distanceMm > this.MM_TO_M_THRESHOLD) {
      targetUnit = 'm';
    } else if (currentUnit === 'm' && distanceMm < this.M_TO_MM_THRESHOLD) {
      targetUnit = 'mm';
    }

    // 2. 准备数值
    let value: number;
    let fractionDigits: number;

    if (targetUnit === 'mm') {
      value = distanceMm;
      // mm 精度规则
      if (value < 1) {
        fractionDigits = 3;
      } else if (value < 10) {
        fractionDigits = 2;
      } else if (value < 100) {
        fractionDigits = 1;
      } else {
        fractionDigits = 0;
      }
    } else {
      value = distance;
      // m 精度规则
      if (value < 1) {
        fractionDigits = 3;
      } else {
        fractionDigits = 2;
      }
    }

    // 3. 构建前缀
    let prefix = isApproximate ? '≈ ' : '';
    if (type === MeasurementType.DIAMETER) {
      prefix += 'Ø';
    } else if (type === MeasurementType.RADIUS) {
      prefix += 'R';
    }

    return {
      value: value.toFixed(fractionDigits),
      unit: targetUnit,
      prefix: prefix
    };
  }

  /**
   * 格式化角度
   * @param angleDeg 角度 (度)
   * @returns 格式化后的字符串
   */
  public static formatAngle(angleDeg: number): string {
    return `${angleDeg.toFixed(1)}°`;
  }
}
