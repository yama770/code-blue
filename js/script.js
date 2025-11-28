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

$('.accordion-area .title').on('click', function () {
    var findElm = $(this).next(".box"); // クリックしたボックス

    // 他の開いているアコーディオンを閉じる
    $('.accordion-area .box').not(findElm).slideUp().removeClass('open');
    $('.accordion-area .title').not(this).removeClass('close');

    // クリックしたものは開閉
    findElm.slideToggle(300, function () {
        if ($(this).is(':visible')) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }
    });

    $(this).toggleClass('close');
});


//卒業生の実績 スライダー
const slickSettings = {
    speed: 15000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: false,
    variableWidth: true,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

$(".slide-items").slick(slickSettings);

// ウィンドウリサイズ時に再初期化
let resizeTimer;
$(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        $('.slide-items').slick('unslick');  // 一度破棄
        $('.slide-items').slick(slickSettings);  // 再初期化
    }, 100);  // リサイズ完了後100ms待ってから実行
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


$(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 400, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });
});

