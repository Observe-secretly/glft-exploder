import * as THREE from 'three';
// 引入打包后的插件文件。在 API 模式下，用户通常只使用插件的核心逻辑，而自己编写 UI
import { GLTFExploder } from '../../dist/gltf-exploder.esm.js';

/**
 * Demo API 示例 (极简模式)
 * 该示例展示了如何使用插件的“自动模式”快速搭建 3D 场景，同时通过 API 完全控制爆炸效果。
 */

// --- 1. 极简初始化 ---
// 设置 createUI: false，意味着插件会自动创建 3D 场景但不会生成任何内置 UI 元素
const exploder = new GLTFExploder({
  viewport: '#canvas-container', // 3D 渲染占位的容器选择器
  model: './example2.glb',       // 模型路径
  createUI: false,               // 禁用内置 UI
  adaptModel: true               // 开启模型自动缩放居中
});

// --- 2. 获取自定义 UI 元素 (这些元素定义在 index.html 中) ---
const progressRange = document.getElementById('progress-range') as HTMLInputElement; // 进度滑动条
const progressVal = document.getElementById('progress-val') as HTMLElement;           // 进度数值显示
const modeSelect = document.getElementById('mode-select') as HTMLSelectElement;       // 爆炸模式下拉框
const axialRow = document.getElementById('axial-row') as HTMLElement;                 // 轴向设置行
const axialSelect = document.getElementById('axial-select') as HTMLSelectElement;     // 轴向选择下拉框
const multiplierRange = document.getElementById('multiplier-range') as HTMLInputElement; // 爆炸系数滑动条
const multiplierVal = document.getElementById('multiplier-val') as HTMLElement;          // 系数数值显示
const exposureRange = document.getElementById('exposure-range') as HTMLInputElement;     // 补光曝光度滑动条
const exposureVal = document.getElementById('exposure-val') as HTMLElement;              // 曝光度数值显示
const lightToggle = document.getElementById('light-toggle') as HTMLInputElement;         // 内部灯光开关
const helperToggle = document.getElementById('helper-toggle') as HTMLInputElement;       // 辅助视图开关
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;               // 重置按钮
const disposeBtn = document.getElementById('dispose-btn') as HTMLButtonElement;           // 销毁按钮

// --- 3. API 绑定：将自定义 UI 事件连接到插件 API ---

// 1. 进度控制 API: exploder.setProgress(0-1)
progressRange.addEventListener('input', (e) => {
    const val = parseFloat((e.target as HTMLInputElement).value);
    progressVal.textContent = `${Math.round(val * 100)}%`;
    exploder?.setProgress(val);
});

// 2. 模式切换 API: exploder.setMode(mode)
modeSelect.addEventListener('change', (e) => {
    const mode = (e.target as HTMLSelectElement).value;
    // 如果是轴向模式，则显示轴向选择器
    axialRow.style.display = mode === 'axial' ? 'flex' : 'none';
    exploder?.setMode(mode as any);
});

// 3. 轴向设置 API: exploder.setAxialVector(vector3)
axialSelect.addEventListener('change', (e) => {
    const [x, y, z] = (e.target as HTMLSelectElement).value.split(',').map(Number);
    exploder?.setAxialVector(new THREE.Vector3(x, y, z));
});

// 4. 系数设置 API: exploder.setMultiplier(number)
multiplierRange.addEventListener('input', (e) => {
    const val = parseFloat((e.target as HTMLInputElement).value);
    multiplierVal.textContent = val.toFixed(1);
    exploder?.setMultiplier(val);
});

// 5. 补光曝光度 API: exploder.setExposure(number)
exposureRange.addEventListener('input', (e) => {
    const val = parseFloat((e.target as HTMLInputElement).value);
    exposureVal.textContent = val.toFixed(1);
    exploder?.setExposure(val);
});

// 6. 内部灯光显隐 API: exploder.setInternalLightingVisible(boolean)
lightToggle.addEventListener('change', (e) => {
    const checked = (e.target as HTMLInputElement).checked;
    exploder?.setInternalLightingVisible(checked);
});

// 6.1 辅助视图显隐 API: exploder.setHelperVisibility(boolean)
helperToggle.addEventListener('change', (e) => {
    const checked = (e.target as HTMLInputElement).checked;
    exploder?.setHelperVisibility(checked);
});

// 7. 重置 API: exploder.reset()
resetBtn.addEventListener('click', () => {
    exploder?.reset();
    // 同时也需要手动同步我们的自定义 UI 状态
    progressRange.value = "0";
    progressVal.textContent = "0%";
});

// 8. 销毁 API: exploder.dispose()
disposeBtn.addEventListener('click', () => {
    if (confirm('确定要销毁 Exploder 实例并释放资源吗？')) {
        exploder?.dispose();
        alert('实例已销毁');
    }
});

console.log('Exploder API Demo Initialized via Auto-Mode');
