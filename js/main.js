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
