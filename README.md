# 🌟 Zik Edn - 潮流个人网站

一个现代、年轻、充满活力的个人网站模板。

## ✨ 特点

- 🎨 **潮流设计**：渐变色、玻璃态、微动画
- 🌓 **主题切换**：亮色/暗色模式自动记忆
- 📱 **响应式**：完美适配手机/平板/电脑
- ⚡ **超快速度**：纯HTML/CSS/JS，无需任何框架
- 🎯 **易上手**：初中生也能看懂的代码

## 🚀 快速开始

### 方法1：直接打开
双击 `index.html` 文件即可在浏览器中预览

### 方法2：本地服务器（推荐）
```bash
# 使用 Python
python -m http.server 8000

# 然后在浏览器打开
# http://localhost:8000
```

## 📁 文件说明

```
个站/
├── index.html      # 首页
├── photos.html     # 照片页（待创建）
├── writing.html    # 文章页（待创建）
├── resume.html     # 简历页（待创建）
├── links.html      # 链接页（待创建）
├── style.css       # 样式文件
└── script.js       # 脚本文件
```

## 🎨 自定义内容

### 1. 修改个人信息
打开 `index.html`，找到并修改：
- 名字（第45行）
- 个性签名（第46行）
- 社交链接（第47-70行）

### 2. 添加文章
打开 `script.js`，找到 `postsData` 数组，添加你的文章：
```javascript
{
    title: "文章标题",
    summary: "文章简介",
    date: "2025-01-23",
    url: "https://你的文章链接.com"
}
```

### 3. 添加照片
打开 `script.js`，找到 `photosData` 数组，添加你的照片：
```javascript
{
    title: "照片标题",
    src: "照片链接"
}
```

### 4. 修改颜色
打开 `style.css`，修改顶部的颜色变量：
```css
:root {
    --accent-color: #8b5cf6;  /* 主色调 */
    --color-pink: #ec4899;     /* 粉色 */
    /* 改成你喜欢的颜色 */
}
```

## 🌐 部署上线

### Vercel（推荐，免费）
1. 注册 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 导入你的代码
4. 点击 "Deploy"
5. 完成！

### Netlify（也很简单）
1. 注册 [Netlify](https://netlify.com)
2. 拖拽你的文件夹到网页上
3. 等待上传
4. 完成！

## 💡 使用技巧

### 切换主题
点击右上角的 🌙/☀️ 图标

### 修改头像
将你的头像图片链接替换 `index.html` 第40行的图片地址

### 添加新页面
复制 `index.html`，重命名，然后修改内容

## 🎯 下一步

1. ✅ 创建其他页面（photos, writing, resume, links）
2. ✅ 添加你的真实内容
3. ✅ 部署到网上
4. ✅ 分享给朋友！

## 📝 注意事项

- 所有社交链接记得改成你自己的
- 图片建议使用外链（如 Unsplash）或放在图床
- 修改后记得保存文件
- 在浏览器中刷新查看效果

## 🤔 需要帮助？

如果遇到问题：
1. 检查文件名是否正确
2. 检查浏览器控制台（F12）的错误信息
3. 确保所有文件在同一个文件夹里

---

Made with ❤️ by Zik Edn
