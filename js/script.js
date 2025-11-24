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
    var targetLi = $(this).closest('li'); // クリックされたタイトルの親li

    // 他の開いているアコーディオンを閉じる
    $('.accordion-area .box').not(findElm).slideUp().removeClass('open');
    $('.accordion-area .title').not(this).removeClass('close');

    // 他のliからOPENクラスを外す
    $('.accordion-area li').not(targetLi).removeClass('open');

    // クリックしたLIにOPENクラスをトグル
    targetLi.toggleClass('open');

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

$(".slide-items").slick({
    speed: 15000,              // スライドが移動しきるまでの時間（ms）
    // 数値が大きいほど「ゆっくり」一定速度で流れる

    autoplaySpeed: 0,          // 次のスライドに移動するまでの待ち時間
    // 0にすると「常に動き続ける」状態になる（必須）

    autoplay: true,            // 自動再生をON

    cssEase: "linear",         // イージングを線形にして一定速度で流すための設定
    // これがないと速度が乱れる

    slidesToShow: 3,           // 画面に表示するスライド枚数
    slidesToScroll: 1,         // 1枚ずつ移動（流れる動きに必要）

    infinite: true,            // 無限ループでスライドを続ける

    centerMode: false,         // 中央寄せをOFF
    // ONにすると幅が変わり速度が不安定になるため必ずOFFにする

    arrows: false,             // 前後の矢印を非表示

    pauseOnHover: false,       // マウスホバーで止めない（常に流すため）
    pauseOnFocus: false,       // フォーカスでも止めない

    // ★ スマホ用設定を追加（重要）
    responsive: [
        {
            breakpoint: 768,   // スマホ幅
            settings: {
                slidesToShow: 1,   // 1枚表示に変更
                slidesToScroll: 1,
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