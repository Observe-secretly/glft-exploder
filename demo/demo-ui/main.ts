import { GLTFExploder } from '../../dist/gltf-exploder.esm.js';

/**
 * Demo UI 示例 (极简模式)
 * 该示例展示了如何通过传入容器 ID 和模型路径，一键生成完整的爆炸视图展示
 * 
 * 相比之前的版本，现在研发只需要几行代码即可完成集成：
 * 1. 提供一个 viewport (3D 场景容器)
 * 2. 提供一个 model (模型路径)
 * 3. 配置是否使用自带 UI
 */

// 初始化爆炸器
// 插件会自动处理：场景创建、灯光添加、模型加载、相机适配、轨道控制器设置、窗口自适应以及 UI 生成
const exploder = new GLTFExploder({
  viewport: '#scene-container',     // 3D 渲染占位的容器选择器
  model: 'example2.glb',            // 直接传入模型路径
  createUI: true,               // 开启内置 UI
  showPanel: true,              // 显示控制面板
  showProgress: true,           // 显示进度条
  wheelControlExplosion: true,   // 开启滚轮控制爆炸
  adaptModel: true                  // 开启模型自动缩放居中，确保视觉效果最佳
});

// 如果需要对内部自动创建的对象进行定制，可以通过 exploder 实例获取
// 注意：由于模型加载是异步的，某些操作可能需要等待
console.log('爆炸器已启动，正在自动加载模型并构建场景...');
