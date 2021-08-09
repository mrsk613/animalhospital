//スライドショー
const slideShow = function () {

    const images = document.querySelectorAll( '.slideShow ul.imgWrap li' ),
          imagesLength = images.length - 1,
          next = document.querySelector( '.slideShow .btn-next' ),
          prev = document.querySelector( '.slideShow .btn-prev' );

    let cnt = 0;

    function showNext () {
        if ( cnt >= imagesLength ) {
            cnt = 0;
            images.item( cnt ).classList.add( 'is-show' );
            images.item( imagesLength ).classList.remove( 'is-show' );
        } else {
            images.item( cnt ).classList.remove( 'is-show' );
            images.item( cnt + 1 ).classList.add( 'is-show' );
            cnt += 1;
        }
    }

    function showPrev () {
        if ( cnt === 0 ) {
            images.item( cnt ).classList.remove( 'is-show' );
            images.item( imagesLength ).classList.add( 'is-show' );
            cnt = imagesLength;
        } else {
            images.item( cnt ).classList.remove( 'is-show' );
            images.item( cnt - 1 ).classList.add( 'is-show' );
            cnt -= 1;
        }
    }

    next.addEventListener( 'click', showNext );
    prev.addEventListener( 'click', showPrev );

};

slideShow();

//更新情報
$(function() {
	$.ajax({
		url: 'news/index.html' //読み込むファイルを指定
	})
	.then(
		// 通信成功時の処理
		function(html) {
			$(html).find('#news-area').each(function(){　//外部HTMLの読み込みたい部分を指定
				$('#top-info').html($(this).html()); //読み込んだ外部HTMLを表示するエリアを指定
				return false;
			});
			$('dl dt:gt(4), dl dd:gt(4)').remove(); //2件目以降の dt,dd を削除
		});
});