const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');

// ハンバーガーメニューの開閉
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// メニュー内のリンクをクリックしたら閉じる
const navLinks = document.querySelectorAll('.header__nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// メニュー外をクリックしたら閉じる
document.addEventListener('click', (e) => {
    // ハンバーガーボタンとナビゲーション以外をクリックした場合
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});