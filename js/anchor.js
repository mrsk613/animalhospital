//上に戻るボタン
$(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});


//アンカーリンクを消す

$(document).ready(function()
{
// #で始まるアンカーをクリックした場合に処理
$('a[href^=#]').click(function()
{
// スクロールの速度
var speed = 400 ;// ミリ秒

// アンカーの値取得
var href= $(this).attr("href") ;

// 移動先を取得
var target = $(href == "#" || href == "" ? 'html' : href) ;

// 移動先を数値で取得
var position = target.offset().top ;

// スムーススクロール
$($.support.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing') ;

// URLにアンカーリンクを付加させない
return false ;
});
});