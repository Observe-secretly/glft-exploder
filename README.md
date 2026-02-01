# glTF Exploder 🚀

一个专为 Three.js 开发者打造的高性能、可定制化 glTF/GLB 模型爆炸图（拆解图）插件。

---

## 📖 目录
- [🎯 项目目的](#-项目目的)
- [📦 保姆级快速上手](#-保姆级快速上手)
- [🛠 爆炸模式详解](#-爆炸模式详解)
- [⚙️ 参数配置说明](#️-参数配置说明)
- [🛰 API 参考](#-api-参考)
- [💎 数模图要求 (核心必读)](#-数模图要求-核心必读)

---

## 🎯 项目目的
在工业可视化、机械仿真、产品交互展示等领域，**爆炸图**是展示产品内部结构最直观的方式。本插件旨在解决以下痛点：
- **算法复杂**：自动计算数千个零件的爆炸路径，无需手动逐个设置。
- **光照死角**：模型拆解后，内部零件往往因为阴影过黑。内置补光系统可一键照亮细节。
- **集成成本高**：提供保姆级 API 和可选的交互式 UI（面板/滑块），分钟级完成集成。

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
    container: '#ui-container',    // UI 挂载点 (可选)
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

    const exploder = new GLTFExploder(
        model, scene, renderer, camera,
        { createUI: true }
    );
});
```

---

## 🛠 爆炸模式详解
插件内置了多种数学算法，满足工业产品的不同展示需求：

| 模式 | 名称 | 逻辑描述 | 适用场景 |
| :--- | :--- | :--- | :--- |
| `RADIAL` | **标准径向** | 以模型中心为原点，零件按原始距离等比向外扩散。 | 对称性强的圆柱形/球形物体。 |
| `AXIAL` | **轴向分层** | 零件仅沿指定的 X/Y 或 Z 轴位移。 | 垂直叠放的精密仪器、建筑楼层。 |
| `SIZE_WEIGHTED` | **尺寸加权** | **(推荐)** 大零件位移小，小零件位移大，层级感最强。 | 包含外壳和细小内部零件的复杂装配体。 |
| `HIERARCHICAL` | **层级树模式** | 根据模型在 glTF 中的父子级深度决定位移优先级。 | 具有严格树状装配逻辑的模型。 |
| `FORCE_FIELD` | **力场模式** | 模拟物理排斥力，零件间会尽量避开，效果更动感。 | 零件密集、容易重叠的模型。 |

---

## ⚙️ 参数配置说明 (`ExploderOptions`)

| 参数 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `viewport` | `string` | `undefined` | **(自动模式必填)** 3D 容器的 CSS 选择器。 |
| `model` | `string | THREE.Object3D` | `undefined` | 模型路径 (自动模式) 或模型对象 (手动模式)。 |
| `createUI` | `boolean` | `true` | 是否自动创建并显示 UI 控制面板。 |
| `uiType` | `string` | `'panel'` | UI 类型：`'panel'` (完整面板) 或 `'slider'` (仅进度条)。 |
| `container` | `string | HTMLElement` | `document.body` | UI 面板挂载的容器。 |
| `hudContainer` | `string | HTMLElement` | `viewport` | 顶部信息栏 (HUD) 挂载的容器。 |
| `adaptModel` | `boolean` | `false` | 加载模型后是否自动调整相机位置以完整显示模型。 |
| `maxDistance` | `number` | `2.0` | 爆炸的最大位移倍率，数值越大拆得越散。 |
| `mode` | `ExplosionMode` | `RADIAL` | 初始的爆炸算法模式。 |
| `axialVector` | `THREE.Vector3` | `(0, 1, 0)` | 轴向模式下的位移方向。 |
| `onModelChange` | `Function` | `undefined` | 当在 UI 中切换模型时的回调函数。 |

---

## 🛰 API 参考

### `exploder.setProgress(value: number)`
设置爆炸进度。
- `value`: `0` (原始位置) 到 `1` (最大爆炸位置)。

### `exploder.setModel(model: THREE.Object3D)`
动态更换被拆解的模型。插件会自动重新计算新中心点。

### `exploder.setInternalLightingVisible(visible: boolean)`
控制内置补光灯。拆解复杂模型内部时建议开启。

### `exploder.dispose()`
**非常重要**。在组件卸载或切换页面时调用，会自动清理场景中的灯光、销毁 UI 并释放内存缓存。

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
