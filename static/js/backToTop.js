// backToTop.js

document.addEventListener("DOMContentLoaded", function () {
    // 创建回到顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.style.display = 'none'; // 初始隐藏
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.border = 'none';
    backToTopButton.style.background = 'none';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '1000';
    
    // 设置按钮的背景图
    backToTopButton.style.backgroundImage = "url('../../static/image/backToTop.png')"; // 替换为你的图片路径
    backToTopButton.style.backgroundSize = 'contain';
    backToTopButton.style.backgroundRepeat = 'no-repeat';
    backToTopButton.style.width = '50px'; // 根据图片大小调整
    backToTopButton.style.height = '50px'; // 根据图片大小调整

    // 添加按钮到页面
    document.body.appendChild(backToTopButton);

    // 当用户滚动时执行
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block"; // 显示按钮
        } else {
            backToTopButton.style.display = "none"; // 隐藏按钮
        }
    };

    // 点击按钮时，平滑滚动到顶部
    backToTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 平滑滚动
        });
    };
});
