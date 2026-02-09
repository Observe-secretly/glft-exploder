import { GLTFExploder } from '../src/index';

/**
 * 核心示例 (极简模式)
 * 该示例直接使用源码进行预览，展示了如何通过极简配置实现完整的功能。
 */

// 初始化爆炸器
const exploder = new GLTFExploder({
  viewport: '#scene-container',     // 3D 渲染占位的容器
  model: 'models/example.glb',      // 初始展示模型
  adaptModel: true,                 // 开启自适应
  showUpload: true,                 // 开启本地上传功能
  showHelpers: true,                // 在控制面板显示辅助视图选项
  models: [] 
});
