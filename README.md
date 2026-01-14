# VuePress 项目快速使用

## 环境准备
1.  安装 Node.js（推荐 LTS 版本）
2.  安装 pnpm（未安装则执行）：`npm install -g pnpm`
3.  安装项目依赖：`pnpm install`

## 常用命令
| 命令 | 功能说明 |
|------|----------|
| `pnpm docs:dev` | 启动开发服务器（支持热更新，用于文档编写调试） |
| `pnpm docs:build` | 构建项目并输出静态产物（用于部署上线） |
| `pnpm docs:clean-dev` | 清除缓存并启动开发服务器（解决缓存导致的修改不生效问题） |