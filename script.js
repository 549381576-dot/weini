// 个人网站主脚本

// ========== 主题切换 ==========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// 初始化主题
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
};

// 切换主题
themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ========== 数据加载 ==========
// 示例文章数据
const postsData = [
    {
        title: "关于节奏与留白",
        summary: "谈谈做网站的极简主义。在这个信息过载的时代，如何通过留白和节奏感来创造更好的用户体验。",
        date: "2025-01-20",
        url: "https://example.com/post-1"
    },
    {
        title: "拍照这件小事",
        summary: "轻松记录日常的若干建议。摄影不仅仅是技术，更是一种观察世界的方式。",
        date: "2025-01-15",
        url: "https://example.com/post-2"
    },
    {
        title: "数字时代的创作",
        summary: "在AI和算法主导的时代，如何保持创作的独特性和人文关怀。",
        date: "2025-01-10",
        url: "https://example.com/post-3"
    }
];

// 示例照片数据
const photosData = [
    { title: "街拍 01", src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400" },
    { title: "人像 01", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
    { title: "风景 01", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
    { title: "建筑 01", src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400" },
    { title: "自然 01", src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400" },
    { title: "城市 01", src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" }
];

// 加载最新文章
const loadLatestPosts = () => {
    const container = document.getElementById('latestPosts');
    if (!container) return;
    
    const postsHTML = postsData.map(post => `
        <div class="post-card">
            <h3>${post.title}</h3>
            <div class="post-meta">${post.date}</div>
            <p>${post.summary}</p>
        </div>
    `).join('');
    
    container.innerHTML = postsHTML;
};

// 加载最新照片
const loadLatestPhotos = () => {
    const container = document.getElementById('latestPhotos');
    if (!container) return;
    
    const photosHTML = photosData.map(photo => `
        <div class="photo-card">
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        </div>
    `).join('');
    
    container.innerHTML = photosHTML;
};

// ========== 动画效果 ==========
const observeElements = () => {
    const elements = document.querySelectorAll('.feature-card, .post-card, .photo-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
};

// ========== 头像上传 ==========
const initAvatarUpload = () => {
    const avatarInput = document.getElementById('avatarInput');
    const avatarImage = document.getElementById('avatarImage');
    const uploadBtn = document.getElementById('uploadBtn');
    
    if (!avatarInput || !avatarImage) {
        console.log('头像元素未找到');
        return;
    }
    
    // 从本地存储加载头像
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        console.log('加载保存的头像');
        avatarImage.src = savedAvatar;
    }
    
    // 点击按钮触发文件选择
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            console.log('点击了上传按钮');
            avatarInput.click();
        });
    }
    
    // 文件选择后的处理
    avatarInput.addEventListener('change', (e) => {
        console.log('文件选择触发');
        const file = e.target.files[0];
        if (file) {
            console.log('选择的文件:', file.name, file.type);
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const imageUrl = event.target.result;
                    console.log('图片读取成功，长度:', imageUrl.length);
                    avatarImage.src = imageUrl;
                    // 保存到本地存储
                    try {
                        localStorage.setItem('userAvatar', imageUrl);
                        console.log('头像已保存到本地存储');
                        alert('头像更换成功！');
                    } catch (error) {
                        console.error('保存失败:', error);
                        alert('头像太大了，请选择小一点的图片（建议小于1MB）');
                    }
                };
                reader.onerror = (error) => {
                    console.error('读取文件失败:', error);
                    alert('读取图片失败，请重试');
                };
                reader.readAsDataURL(file);
            } else {
                alert('请选择图片文件（jpg、png、gif等）');
            }
        }
    });
};

// ========== 光标跟随效果 - 粒子轨迹 ==========
const initCursorGlow = () => {
    let lastTrailTime = 0;
    
    // 创建轨迹粒子
    const createTrailParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'cursor-trail';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);
        
        // 动画结束后移除粒子
        setTimeout(() => {
            particle.remove();
        }, 600);
    };
    
    // 监听鼠标移动
    document.addEventListener('mousemove', (e) => {
        // 创建粒子轨迹（降低频率，更简约）
        const now = Date.now();
        if (now - lastTrailTime > 50) { // 每50ms创建一个粒子，更稀疏
            createTrailParticle(e.clientX, e.clientY);
            lastTrailTime = now;
        }
    });
};

// ========== 导航栏滚动效果 ==========
const initNavScrollEffect = () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadLatestPosts();
    loadLatestPhotos();
    initScrollNavigation();
    initCursorGlow();
    initNavScrollEffect();
    
    // 如果本地存储有头像，加载它（保留你之前上传的头像）
    const avatarImg = document.getElementById('avatarImg');
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar && avatarImg) {
        avatarImg.src = savedAvatar;
    }
    
    // 延迟执行动画观察，让CSS动画先完成
    setTimeout(observeElements, 100);
});

// ========== 滚动导航高亮 ==========
const initScrollNavigation = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    // 滚动监听
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // 移除所有active类
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // 添加active到当前section对应的链接
                const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

