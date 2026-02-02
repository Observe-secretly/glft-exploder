import { GLTFExploder } from '../src';

/**
 * 核心示例 (极简模式)
 * 该示例直接使用源码进行预览，展示了如何通过极简配置实现完整的功能。
 */

// 初始化爆炸器
const exploder = new GLTFExploder({
  viewport: '#scene-container',     // 3D 渲染占位的容器
  model: 'models/example.glb',      // 初始模型路径
  createUI: true,                   // 开启内置 UI
  uiType: 'panel',                  // 使用侧边面板
  container: '#panel-container',     // UI 面板容器
  hudContainer: '#scene-container',  // HUD 进度条容器
  adaptModel: true,                 // 开启自适应
  // 配置多模型切换列表
  models: [
    { label: 'example.glb', value: 'models/example.glb' },
    { label: 'example2.glb', value: 'models/example2.glb' },
    { label: 'example3.glb', value: 'models/example3.glb' },
    { label: 'example4.glb', value: 'models/example4.glb' }
  ]
});

console.log('Example 极简模式已启动');
