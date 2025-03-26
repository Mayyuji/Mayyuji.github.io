import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', 
  assetPrefix: './',
  images: {
    unoptimized: true,  // 禁用图片优化API，使其与静态导出兼容
  },
  // 可选：添加路径映射解决 TypeScript 类型检查
  typescript: {
    ignoreBuildErrors: false, // 设为 true 可忽略构建时的 TS 错误
  }
};

export default nextConfig;
