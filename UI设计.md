Page: Ex-Model: Pro GLB Viewer (Simplified & Translated)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=satoshi@400,500&display=swap" rel="stylesheet">
    <style>
        :root {
            --accent: #2563EB;
            --bg-main: #FFFFFF;
            --bg-sub: #F9FAFB;
            --border: #E5E7EB;
        }
        body {
            font-family: 'Satoshi', sans-serif;
            color: #1F2937;
            margin: 0;
            padding: 0;
        }
        .font-display {
            font-family: 'General Sans', sans-serif;
        }
        /* Custom Range Slider Styling */
        input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            cursor: pointer;
        }
        input[type="range"]::-webkit-slider-runnable-track {
            background: #F3F4F6;
            height: 4px;
            border-radius: 2px;
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            background: var(--accent);
            border-radius: 50%;
            margin-top: -6px;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #E5E7EB;
            border-radius: 10px;
        }
        .viewport-grid {
            background-image: 
                linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
</head>
<body>
    <div class="min-h-screen bg-[#F9FAFB] flex flex-col overflow-hidden">
        <!-- Main Workspace -->
        <main class="flex-1 flex flex-col md:flex-row relative">
            <!-- Viewport Side -->
            <div class="flex-1 relative overflow-hidden bg-white">
                <!-- 3D Viewport Placeholder Area -->
                <div class="absolute inset-0 viewport-grid"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative group">
                        <!-- Abstract Model Placeholder -->
                        <div class="relative w-64 h-64 md:w-96 md:h-96 opacity-80">
                             <div class="absolute inset-0 border-2 border-blue-100 rounded-full animate-[spin_10s_linear_infinite]"></div>
                             <div class="absolute inset-4 border border-gray-100 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                             <div class="absolute inset-0 flex items-center justify-center">
                                <iconify-icon icon="lucide:box" class="text-8xl md:text-9xl text-gray-200"></iconify-icon>
                             </div>
                             <div class="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                             <div class="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                        </div>
                        <p class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium whitespace-nowrap tracking-widest">
                            拖拽旋转 • 滚动缩放
                        </p>
                    </div>
                </div>

                <!-- Viewport HUD Overlay -->
                <div class="absolute top-6 left-6 flex flex-col gap-3">
                    <div class="bg-white/90 backdrop-blur-md border border-gray-200/50 px-3 py-2 rounded-xl shadow-sm flex items-center gap-3">
                        <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                            <iconify-icon icon="lucide:box" class="text-lg"></iconify-icon>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-bold text-gray-700 leading-none">industrial_arm.glb</span>
                            <span class="text-[10px] text-gray-400 font-medium mt-1">42.8 MB • 12.8万 面</span>
                        </div>
                    </div>
                    <div class="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-sm">
                         <span class="text-[10px] font-bold text-gray-500 flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            渲染引擎已启动 (WEBGL 2.0)
                         </span>
                    </div>
                </div>

                <!-- Bottom Center Progress Bar Container -->
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl z-10">
                    <div class="bg-white/90 backdrop-blur-md border border-gray-200/50 px-5 py-3 rounded-xl shadow-xl flex items-center gap-5">
                        <button id="btn-play-toggle" class="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                            <iconify-icon icon="lucide:play" class="text-lg ml-0.5"></iconify-icon>
                        </button>
                        <div class="flex-1 flex flex-col gap-1.5">
                            <div class="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                <span>当前播放进度</span>
                                <span class="text-blue-600">64%</span>
                            </div>
                            <div class="h-1 w-full bg-gray-100 rounded-full overflow-hidden relative group cursor-pointer">
                                <div class="absolute left-0 top-0 bottom-0 bg-blue-600 rounded-full w-[64%] transition-all duration-300">
                                    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-blue-600 rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Control Panel -->
            <aside class="w-full md:w-80 bg-white border-l border-gray-200 flex flex-col z-20 overflow-y-auto custom-scrollbar">
                <div class="p-6 space-y-8 flex-1">
                    <!-- Parameters Section -->
                    <section>
                        <div class="flex items-center gap-2 mb-8">
                            <iconify-icon icon="lucide:sliders-vertical" class="text-blue-600 text-xl"></iconify-icon>
                            <h3 class="font-display font-bold text-sm tracking-tight">参数控制面板</h3>
                        </div>

                        <div class="space-y-8">
                            <!-- Coefficient Slider -->
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">爆炸系数</label>
                                    <span class="text-xs font-mono font-semibold text-blue-600">1.42x</span>
                                </div>
                                <input type="range" min="0" max="100" value="64" class="w-full" id="input-coefficient">
                                <p class="text-[10px] text-gray-400">控制模型各个组件分离的距离倍数。</p>
                            </div>

                            <!-- Render Brightness Slider -->
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">渲染亮度</label>
                                    <span class="text-xs font-mono font-semibold text-blue-600">1.00</span>
                                </div>
                                <input type="range" min="0" max="200" value="100" class="w-full" id="input-brightness">
                                <p class="text-[10px] text-gray-400">调整 3D 场景的光照表现。 </p>
                            </div>

                            <!-- Mode Selector -->
                            <div class="space-y-3">
                                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">爆炸模式</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <button class="px-3 py-2.5 bg-blue-50 border border-blue-200 rounded-xl text-xs font-semibold text-blue-700 flex flex-col items-center gap-1.5 transition-all">
                                        <iconify-icon icon="lucide:layout-template" class="text-base"></iconify-icon>
                                        常规模式
                                    </button>
                                    <button class="px-3 py-2.5 bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl text-xs font-semibold text-gray-600 flex flex-col items-center gap-1.5 transition-all">
                                        <iconify-icon icon="lucide:shapes" class="text-base"></iconify-icon>
                                        几何模式
                                    </button>
                                    <button class="px-3 py-2.5 bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl text-xs font-semibold text-gray-600 flex flex-col items-center gap-1.5 transition-all">
                                        <iconify-icon icon="lucide:wind" class="text-base"></iconify-icon>
                                        柔和模式
                                    </button>
                                    <button class="px-3 py-2.5 bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl text-xs font-semibold text-gray-600 flex flex-col items-center gap-1.5 transition-all">
                                        <iconify-icon icon="lucide:sparkles" class="text-base"></iconify-icon>
                                        随机模式
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div class="p-6 border-t border-gray-100">
                    <button id="btn-reset" class="w-full py-4 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-black flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]">
                        <iconify-icon icon="lucide:refresh-ccw" class="text-sm"></iconify-icon>
                        重置视图与参数
                    </button>
                </div>
            </aside>
        </main>
    </div>
</body>
</html>
```

Please reference this design and implement it into our codebase; Try to understand the structure, which part of our codebase is relevant and implement
