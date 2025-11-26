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


//よくある質問

$('.accordion-area .title').on('click', function() {
    var findElm = $(this).next(".box"); // クリックしたボックス
    
    // 他の開いているアコーディオンを閉じる
    $('.accordion-area .box').not(findElm).slideUp().removeClass('open');
    $('.accordion-area .title').not(this).removeClass('close');

    // クリックしたものは開閉
    findElm.slideToggle(300, function() {
        if ($(this).is(':visible')) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }
    });
    
    $(this).toggleClass('close');
});





//卒業生の実績 スライダー

$(".slide-items").slick({
    speed: 15000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,        // ← ここが最重要
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: false,
    variableWidth: true,    // ← 幅を自分で決める

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});




//卒業生の声 スライダー

$('.review__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,

    responsive: [
        {
            breakpoint: 768,   // 768px以下の時
            settings: {
                slidesToShow: 1,   // ← 1枚表示に変更
            }
        }
    ]
});