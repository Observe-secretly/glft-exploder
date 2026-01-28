// 创建示例 GLB 模型的脚本
// 使用 Node.js 运行此脚本: node create-model.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建一个简单的场景
const scene = new THREE.Scene();

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

// 添加组到场景
scene.add(group);

// 导出为 GLB
const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (gltf) => {
    // 对于二进制 GLB 格式，gltf 是 ArrayBuffer
    const outputPath = path.join(__dirname, 'models', 'example.glb');
    
    // 确保目录存在
    if (!fs.existsSync(path.dirname(outputPath))) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }
    
    // 写入文件
    fs.writeFileSync(outputPath, new Uint8Array(gltf));
    console.log(`GLB 文件已保存到: ${outputPath}`);
  },
  (error) => {
    console.error('导出错误:', error);
  },
  { binary: true } // 导出为二进制 GLB 格式
);