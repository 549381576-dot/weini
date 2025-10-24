# 🌟 维尼N1ckZzzAI - 个人网站

一个现代、简约、充满创意的个人网站。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://549381576-dot.github.io/weini/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ 特色功能

- 🎨 **现代设计**：渐变色、玻璃态效果、流畅动画
- 🌓 **深色模式**：亮色/暗色主题自动切换
- 🎯 **光标特效**：优雅的粒子跟随效果
- 📱 **完全响应式**：完美适配各种设备
- 🚀 **极速加载**：纯HTML/CSS/JS，无需框架
- 🎮 **内置游戏**：贪吃蛇小游戏
- 🔗 **社交链接**：集成小红书、抖音等平台

## 🌐 在线预览

**网站地址**：[https://549381576-dot.github.io/weini/](https://549381576-dot.github.io/weini/)

## 📁 项目结构

```
weini/
├── index.html          # 首页（头像、简介、导航）
├── photos.html         # 摄影作品展示
├── writing.html        # 文章列表
├── resume.html         # 个人简历
├── game.html           # 贪吃蛇游戏
├── links.html          # 友情链接
├── style.css           # 主样式文件
├── script.js           # 主脚本文件
├── images/             # 图片资源
│   ├── avatar.jpg      # 头像
│   ├── xiaohongshu-logo.png  # 小红书Logo
│   └── douyin-logo.png       # 抖音Logo
└── README.md           # 项目说明
```

## 🚀 快速开始

### 本地运行

1. **克隆项目**
```bash
git clone https://github.com/549381576-dot/weini.git
cd weini
```

2. **启动本地服务器**
```bash
# 使用 Python 3
python3 -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000

# 或使用 Node.js
npx serve .
```

3. **在浏览器中打开**
```
http://localhost:8000
```

### 直接部署

项目已部署在 GitHub Pages：
- 访问仓库 Settings → Pages
- 选择 `main` 分支
- 等待几分钟即可访问

## 🎨 自定义内容

### 1. 修改个人信息

编辑 `index.html`：

```html
<!-- 修改头像 -->
<img src="images/avatar.jpg" alt="你的名字">

<!-- 修改名字 -->
<h1 class="hero-title">你的名字</h1>

<!-- 修改签名 -->
<p class="hero-tagline">你的个性签名</p>
```

### 2. 更新社交链接

编辑 `index.html` 的社交链接部分：

```html
<a href="你的小红书链接" target="_blank">
    <img src="images/xiaohongshu-logo.png" alt="小红书">
</a>
```

### 3. 添加文章内容

编辑 `script.js` 中的 `postsData`：

```javascript
const postsData = [
    {
        title: "你的文章标题",
        summary: "文章摘要",
        date: "2025-01-20",
        url: "https://你的文章链接.com"
    }
];
```

### 4. 添加照片作品

编辑 `script.js` 中的 `photosData`：

```javascript
const photosData = [
    { 
        title: "作品标题", 
        src: "https://图片链接.jpg" 
    }
];
```

### 5. 修改主题色

编辑 `style.css` 的颜色变量：

```css
:root {
    --accent-color: #8b5cf6;      /* 主色调（紫色） */
    --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式与动画
  - CSS变量
  - Flexbox & Grid布局
  - 玻璃态效果（backdrop-filter）
  - CSS动画与过渡
- **JavaScript (ES6+)** - 交互逻辑
  - 主题切换
  - 光标特效
  - 滚动导航
  - 游戏逻辑

## 📱 浏览器支持

- ✅ Chrome/Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ 移动端浏览器

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 👨‍💻 作者

**维尼N1ckZzzAI**

- 小红书：[@维尼N1ckZzzAI](https://xhslink.com/m/p1si8qaerV)
- 抖音：[@维尼N1ckZzzAI](https://v.douyin.com/FLbtCnGSbwk/)

## 🙏 致谢

感谢所有使用和支持这个项目的朋友们！

---

⭐ 如果这个项目对你有帮助，请给个 Star 吧！
