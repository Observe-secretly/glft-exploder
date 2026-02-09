# glTF Exploder 🚀

一个专为 Three.js 开发者打造的高性能、可定制化 glTF/GLB 模型爆炸图（拆解图）插件。

![Demo Preview](./review.gif)

---

## 📖 目录
- [🎯 项目目的](#-项目目的)
- [📦 保姆级快速上手](#-保姆级快速上手)
- [🛠 爆炸模式详解](#-爆炸模式详解)
- [⚙️ 参数配置说明](#️-参数配置说明)
- [🛰 API 参考](#-api-参考)
- [💎 数模图要求 (核心必读)](#-数模图要求-核心必读)

---

## 🌟 核心特性

- **🚀 高性能爆炸算法**：支持多种模式（径向、轴向、加权等），轻松处理数千个零件。
- ** 工业级物理测量**：支持 mm/m 自适应单位、智能吸附、模型缩放归一化，确保测量结果具备工程参考价值。
- **🧩 深度零件级交互**：一键零件隔离、透明度控制、层级隐藏，为复杂装配体提供极致的检视体验。
- **💎 Liquid Glass (流体玻璃) UI**：基于高质量流体折射算法的视觉界面，清澈透明，极具现代感。
- **📱 实时响应式设计**：自动适配移动端与 PC 端，窗口缩放时 UI 布局实时调整，无需刷新页面。
- **🔍 独立缩放控件**：顶部常驻浮动缩放按钮，独立于控制面板，随时精准控制模型视角。
- **💡 智能补光系统**：一键解决模型拆解后的内部阴影问题，细节分毫毕现。

---

## 📦 保姆级快速上手

### 第一步：安装
```bash
npm install gltf-exploder
```

### 第二步：一键集成 (自动模式 - 推荐)
只需一个容器 ID 和模型路径，插件会自动处理场景创建、模型加载、灯光和自适应。
```javascript
import { GLTFExploder } from 'gltf-exploder';

const exploder = new GLTFExploder({
    viewport: '#scene-container', // 3D 画布容器 ID
    model: './example.glb',        // 模型路径
    createUI: true,                // 开启内置控制面板
    adaptModel: true               // 自动适配相机视角
});
```

### 第三步：手动集成 (进阶模式)
如果你已经有现有的 Three.js 场景，可以手动传入对象。
```javascript
import { GLTFExploder } from 'gltf-exploder';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// ... 你的场景初始化代码 (scene, camera, renderer)

const loader = new GLTFLoader();
loader.load('model.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // 参数顺序：模型, 场景, 相机, 渲染器, 配置项
    const exploder = new GLTFExploder(
        model, scene, camera, renderer,
        { createUI: true }
    );
});
```

---

## 🏗 测量与交互系统

与普通的三维标注工具不同，本插件提供了一套完整的、符合工程逻辑的测量体系：

### 1. 工业级物理测量 (Physical Measurement)
- **模型缩放归一化**：解决 WebGL 场景中为了视觉平衡而对模型进行的比例缩放问题。无论模型在视口中多大，测量结果始终映射回模型原始的物理尺寸。
- **自适应单位系统**：支持 `mm`（毫米）与 `m`（米）的自动切换，并内置**滞后判定 (Hysteresis)** 锁，防止测量距离在临界点（如 1000mm）时单位频繁闪烁。
- **工程精度法则**：根据测量值的量级自动调整小数点位数（如 <1mm 时显示 3 位小数，≥100mm 时自动取整），避免“虚假精度”干扰判断。

### 2. 智能吸附与识别 (Smart Snapping)
- **多级吸附**：精准捕捉**顶点 (Vertex)**、**边缘 (Edge)**、**平面 (Face)**。
- **特定特征识别**：自动识别孔位边缘（Hole Edge），并在测量结果中自动添加工业符号（如 `Ø` 代表直径，`R` 代表半径）。
- **近似值判断**：对于非精确对齐（如点对平面的投影距离）自动标记 `≈` 符号。

### 3. 零件检视系统 (Mesh Operations)
- **一键隔离 (Isolation)**：选定零件后全场聚焦，自动处理其他零件的半透明/隐藏逻辑。
- **快捷交互**：集成了右键上下文菜单，支持快速锁定坐标轴、切换零件可见性等高级操作。

---

## 🛠 爆炸模式详解
插件内置了多种数学算法，满足工业产品的不同展示需求：

| 模式 | 名称 | 逻辑描述 | 适用场景 |
| :--- | :--- | :--- | :--- |
| `RADIAL` | **标准径向** | 以模型中心为原点，零件按原始距离等比向外扩散。 | 对称性强的圆柱形/球形物体。 |
| `NORMALIZED_RADIAL` | **归一化径向** | 忽略零件到中心的原始距离，所有零件以相同速度向外扩散。 | 需要极其均匀扩散效果的场景。 |
| `AXIAL` | **轴向分层** | 零件仅沿指定的 X/Y 或 Z 轴位移。 | 垂直叠放的精密仪器、建筑楼层。 |
| `SIZE_WEIGHTED` | **尺寸加权** | **(推荐)** 大零件位移小，小零件位移大，层级感最强。 | 包含外壳和细小内部零件的复杂装配体。 |
| `HIERARCHICAL` | **层级树模式** | 根据模型在 glTF 中的父子级深度决定位移优先级。 | 具有严格树状装配逻辑的模型。 |
| `FORCE_FIELD` | **力场模式** | 模拟物理排斥力，零件间会尽量避开，效果更动感。 | 零件密集、容易重叠的模型。 |

---

## ⚙️ 参数配置说明 (`ExploderOptions`)

| 参数 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `viewport` | `string \| HTMLElement` | `document.body` | **(自动模式必填)** 3D 容器的 CSS 选择器或 DOM 元素。 |
| `model` | `string \| THREE.Object3D` | `undefined` | 模型路径 (string) 或模型对象 (Object3D)。 |
| `modelUrl` | `string` | `undefined` | **(可选)** 网络模型 URL。优先级高于 `model`。 |
| `models` | `string[] \| ModelOption[]` | `[]` | **(可选)** 供 UI 面板切换的模型资源列表。 |
| `initialModel` | `string` | `''` | **(可选)** 初始选中的模型路径。 |
| `createUI` | `boolean` | `true` | 是否自动创建 UI 控件。 |
| `showPanel` | `boolean` | `true` | **(可选)** 是否显示控制面板（包含设置、模式切换等）。 |
| `showProgress` | `boolean` | `true` | **(可选)** 是否显示底部进度条。 |
| `showUpload` | `boolean` | `false` | **(可选)** 是否在控制面板中显示本地上传按钮。 |
| `showHelpers` | `boolean` | `false` | **(可选)** 是否在控制面板中显示辅助视图选项（网格、坐标轴）。 |
| `wheelControlExplosion` | `boolean` | `false` | **(可选)** 是否开启鼠标滚轮控制爆炸进度（开启后将禁用相机缩放）。 |
| `adaptModel` | `boolean` | `true` | **(可选)** 自动缩放和居中模型，确保最佳视觉效果。 |
| `duration` | `number` | `1000` | **(可选)** 爆炸动画持续时间（毫秒）。 |
| `maxDistance` | `number` | `2.0` | **(可选)** 爆炸最大位移倍率，数值越大拆得越散。 |
| `mode` | `ExplosionMode` | `RADIAL` | 初始爆炸模式。 |
| `axialVector` | `THREE.Vector3` | `(0, 1, 0)` | 轴向模式下的位移方向。 |
| `uiStyle` | `ExploderUIStyle` | `...` | **(可选)** UI 面板的样式定制（位置、宽高）。 |
| `directionStrategy` | `Function` | `undefined` | **(高级)** 自定义爆炸方向计算策略。 |

---

## 🛰 API 参考

### `exploder.setProgress(value: number)`
设置爆炸进度 (0-1)。

### `exploder.setMultiplier(value: number)`
设置爆炸系数 (0.1-5.0)。

### `exploder.setMode(mode: ExplosionMode)`
动态切换爆炸算法模式。

### `exploder.setModel(model: THREE.Object3D)`
更换当前爆炸的模型对象。

### `exploder.setInternalLightingVisible(visible: boolean)`
控制内置补光系统的可见性。

### `exploder.setHelperVisibility(visible: boolean)`
控制辅助视图（网格、坐标轴、标签）的可见性。

### `exploder.setModelChangeCallback(callback: Function)`
设置模型切换时的回调（当用户在 UI 面板切换模型时触发）。

### `exploder.setHelperVisibilityChangeCallback(callback: Function)`
设置辅助显示状态变化时的回调。

### `exploder.dispose()`
**销毁实例**。自动清理场景灯光、注销事件并移除 UI，防止内存泄漏。

---

## 💎 数模图要求 (核心必读)

为了让爆炸图效果“看起来很专业”，模型导出时必须遵循：

1. **零件解耦 (Decoupling)**：
   - 每一个需要独立位移的零件，在建模软件中必须是**独立的 Mesh**。
   - 如果你的整个模型在导出时被“合并”为一个对象，插件将无法识别内部零件。
2. **包围盒准确**：
   - 零件的几何数据（Geometry）应尽量紧凑，避免包含不可见的巨大辅助线，否则会干扰爆炸中心点的计算。
3. **坐标轴 (Pivot)**：
   - 插件会自动计算零件几何中心，但如果零件在导出时自带了偏移量巨大的 Pivot，建议在导出前进行“重置变换 (Reset Transform)”。

---

License: MIT | 由开发者为开发者倾力打造。
