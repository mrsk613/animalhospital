$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed: 1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});

//更新情報
$(function () {
    $.ajax({
        url: 'news/index.html' //読み込むファイルを指定
    })
        .then(
            // 通信成功時の処理
            function (html) {
                $(html).find('#news-area').each(function () {　//外部HTMLの読み込みたい部分を指定
                    $('#top-info').html($(this).html()); //読み込んだ外部HTMLを表示するエリアを指定
                    return false;
                });
                $('dl dt:gt(4), dl dd:gt(4)').remove(); //2件目以降の dt,dd を削除
            });
});
