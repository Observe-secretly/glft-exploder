import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExploder } from '../src';
import { EXPLODER_CONSTANTS } from '../src/core/types';

// 场景变量
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let exploder: GLTFExploder | null = null;
let currentModel: THREE.Object3D | null = null;
let gridHelper: THREE.GridHelper;
let axesHelper: THREE.AxesHelper;
const axisLabelSprites: THREE.Sprite[] = [];

// 创建默认模型
function createDefaultModel() {
  // 创建一个组合模型（多个立方体组成的简单模型）
  const group = new THREE.Group();
  
  // 中心立方体
  const centerGeometry = new THREE.BoxGeometry(1, 1, 1);
  const centerMaterial = new THREE.MeshStandardMaterial({ color: 0x6699ff });
  const centerCube = new THREE.Mesh(centerGeometry, centerMaterial);
  group.add(centerCube);
  
  // 添加周围的立方体
  const positions = [
    { x: 2, y: 0, z: 0, color: 0xff6666 },   // 右
    { x: -2, y: 0, z: 0, color: 0x66ff66 },  // 左
    { x: 0, y: 2, z: 0, color: 0xffff66 },   // 上
    { x: 0, y: -2, z: 0, color: 0xff66ff },  // 下
    { x: 0, y: 0, z: 2, color: 0x66ffff },   // 前
    { x: 0, y: 0, z: -2, color: 0xffaa66 }   // 后
  ];
  
  positions.forEach(pos => {
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshStandardMaterial({ color: pos.color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(pos.x, pos.y, pos.z);
    group.add(cube);
  });
  
  // 添加连接件
  positions.forEach(pos => {
    const geometry = new THREE.BoxGeometry(
      pos.x !== 0 ? Math.abs(pos.x) : 0.2,
      pos.y !== 0 ? Math.abs(pos.y) : 0.2,
      pos.z !== 0 ? Math.abs(pos.z) : 0.2
    );
    const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const connector = new THREE.Mesh(geometry, material);
    connector.position.set(pos.x / 2, pos.y / 2, pos.z / 2);
    group.add(connector);
  });
  
  // 设置为当前模型
  currentModel = group;
  
  // 添加到场景
  scene.add(currentModel);
  
  // 创建爆炸器
  createExploder();
}

// DOM 元素
const sceneContainer = document.getElementById('scene-container') as HTMLElement;
const panelContainer = document.getElementById('panel-container') as HTMLElement;

// 初始化场景
function initScene() {
  // 创建场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    45,
    sceneContainer.clientWidth / sceneContainer.clientHeight,
    0.1,
    1000
  );
  camera.position.set(5, 5, 5);
  camera.lookAt(0, 0, 0);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  
  // 设置色调映射以获得更好的颜色渲染
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = EXPLODER_CONSTANTS.EXPOSURE.DEFAULT; // 使用中央配置的默认亮度值
  
  // 处理颜色空间
  if ((renderer as any).outputColorSpace !== undefined) {
    (renderer as any).outputColorSpace = 'srgb';
  } else if ((renderer as any).outputEncoding !== undefined) {
    (renderer as any).outputEncoding = (THREE as any).sRGBEncoding;
  }
  
  sceneContainer.appendChild(renderer.domElement);

  // 创建轨道控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // 添加灯光
  // 1. 基础环境光：提供基础亮度
  const ambientLight = new THREE.AmbientLight(0xffffff, EXPLODER_CONSTANTS.LIGHTS.SCENE.AMBIENT);
  scene.add(ambientLight);

  // 2. 半球光：模拟天空光和地面反射
  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, EXPLODER_CONSTANTS.LIGHTS.SCENE.HEMISPHERE);
  scene.add(hemisphereLight);

  // 3. 主平行光（前上方）
  const mainLight = new THREE.DirectionalLight(0xffffff, EXPLODER_CONSTANTS.LIGHTS.SCENE.MAIN_DIRECTIONAL);
  mainLight.position.set(5, 10, 7.5);
  mainLight.castShadow = true;
  scene.add(mainLight);

  // 4. 辅助平行光（后方）
  const backLight = new THREE.DirectionalLight(0xffffff, EXPLODER_CONSTANTS.LIGHTS.SCENE.BACK_DIRECTIONAL);
  backLight.position.set(-5, 5, -7.5);
  scene.add(backLight);

  // 5. 侧向补光（左侧）
  const sideLight = new THREE.DirectionalLight(0xffffff, EXPLODER_CONSTANTS.LIGHTS.SCENE.SIDE_DIRECTIONAL);
  sideLight.position.set(-10, 2, 0);
  scene.add(sideLight);

  // 添加网格地面
  gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);

  // 添加坐标轴辅助
  axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  // 添加坐标轴标签
  addAxisLabels();

  // 窗口大小调整事件
  window.addEventListener('resize', onWindowResize);
}

// 添加坐标轴标签
function addAxisLabels() {
  // 清除旧标签
  axisLabelSprites.forEach(sprite => scene.remove(sprite));
  axisLabelSprites.length = 0;

  const labels = [
    { text: 'X', pos: [5.5, 0, 0], color: '#ff4444' },
    { text: 'Y', pos: [0, 5.5, 0], color: '#44ff44' },
    { text: 'Z', pos: [0, 0, 5.5], color: '#4444ff' }
  ];

  labels.forEach(label => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 绘制背景 Tag 效果
      const padding = 4;
      const radius = 10;
      const width = canvas.width - padding * 2;
      const height = canvas.height - padding * 2;
      
      ctx.fillStyle = label.color;
      ctx.beginPath();
      ctx.moveTo(padding + radius, padding);
      ctx.lineTo(padding + width - radius, padding);
      ctx.quadraticCurveTo(padding + width, padding, padding + width, padding + radius);
      ctx.lineTo(padding + width, padding + height - radius);
      ctx.quadraticCurveTo(padding + width, padding + height, padding + width - radius, padding + height);
      ctx.lineTo(padding + radius, padding + height);
      ctx.quadraticCurveTo(padding, padding + height, padding, padding + height - radius);
      ctx.lineTo(padding, padding + radius);
      ctx.quadraticCurveTo(padding, padding, padding + radius, padding);
      ctx.closePath();
      ctx.fill();

      // 绘制文字
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label.text, canvas.width / 2, canvas.height / 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(label.pos[0], label.pos[1], label.pos[2]);
    sprite.scale.set(1.2, 0.6, 1);
    scene.add(sprite);
    axisLabelSprites.push(sprite);
  });
}

// 窗口大小调整处理
function onWindowResize() {
  camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

// 加载模型
function loadModel(modelPath: string) {
  // 清除当前模型
  if (currentModel) {
    scene.remove(currentModel);
    currentModel = null;
  }

  // 清除当前爆炸器
  if (exploder) {
    exploder.dispose();
    exploder = null;
  }

  // 尝试加载模型，如果失败则创建默认模型
  const loader = new GLTFLoader();
  loader.load(
    modelPath,
    (gltf) => {
      currentModel = gltf.scene;
      
      // 调整模型大小和位置
      const box = new THREE.Box3().setFromObject(currentModel);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());
      
      // 缩放模型以适应视图
      const scale = 5 / size;
      currentModel.scale.set(scale, scale, scale);
      
      // 将模型居中
      currentModel.position.x = -center.x * scale;
      currentModel.position.y = -center.y * scale;
      currentModel.position.z = -center.z * scale;
      
      // 添加模型到场景
      scene.add(currentModel);
      
      // 创建爆炸器
      createExploder(modelPath);
    },
    () => {
      // 加载进度
    },
    (error) => {
      console.error('模型加载错误:', error);
      // 创建默认模型（多个立方体组成的简单模型）
      createDefaultModel();
    }
  );
}

// 创建爆炸器
function createExploder(modelPath = 'models/example.glb') {
  if (!currentModel) return;
  
  // 创建爆炸器
  exploder = new GLTFExploder(
    currentModel,
    scene,
    camera,
    renderer,
    {
      createUI: true,
      uiType: 'panel',
      container: panelContainer,
      models: [
        { label: '示例模型 01', value: 'models/example.glb' },
        { label: '示例模型 02', value: 'models/example2.glb' },
        { label: '示例模型 03', value: 'models/example3.glb' },
        { label: '示例模型 04', value: 'models/example4.glb' }
      ],
      initialModel: modelPath,
      uiStyle: {
        position: 'right'
      }
    }
  );

  // 设置模型切换回调
  exploder.setModelChangeCallback((newModelPath: string) => {
    loadModel(newModelPath);
  });

  // 设置辅助显示切换回调
  exploder.setHelperVisibilityChangeCallback((visible: boolean) => {
    if (gridHelper) gridHelper.visible = visible;
    if (axesHelper) axesHelper.visible = visible;
    axisLabelSprites.forEach(sprite => {
      sprite.visible = visible;
    });
  });
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// 初始化应用
function init() {
  // 初始化场景
  initScene();
  
  // 加载默认模型
  loadModel('models/example.glb');
  
  // 启动动画循环
  animate();
}

// 启动应用
init();