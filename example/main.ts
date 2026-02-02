import { GLTFExploder } from '../src';

/**
 * 核心示例 (极简模式)
 * 该示例直接使用源码进行预览，展示了如何通过极简配置实现完整的功能。
 */

// 初始化爆炸器
const exploder = new GLTFExploder({
  viewport: '#scene-container',     // 3D 渲染占位的容器
  model: 'models/example.glb',      // 初始展示模型
  uiType: 'panel',                  // 使用侧边面板
  adaptModel: true,                 // 开启自适应
  // 如果不提供 models 数组，面板中将不会显示“模型资源”区块
  // 但用户希望在 example 中只保留本地上传，我们需要调整 UI 逻辑或配置
  models: [] 
});

console.log('Example 极简模式已启动');
