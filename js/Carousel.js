(function() {

    /* --------------------

        Carousel

    -------------------- */
    var Carousel = function($){
        /* -----------------------
        *  使用する変数、関数を定義する
        ----------------------- */
        var _main = $('.Carousel__main'),
            _item = $('.Carousel__item'), // ウゴカススライド
            _nextButton = $('.Carousel__arrow--next'), //次へボタン
            _prevButton = $('.Carousel__arrow--prev'),　//前へボタン
            _itemWidth = _item.width(),
            _clickCount = 0,
            _move,
            _count,
            _clickEvent;

        _main.css({
            'width': _itemWidth * _item.length
        });

        // カルーセルの移動回数をカウントする処理
        _count = function(){
            if (_clickCount == 0){
                _prevButton.hide();
                _nextButton.show();
            }
            else if (_clickCount >= _item.length -1){
                _nextButton.hide();
                _prevButton.show();
            }else {
             _prevButton.show();   
             _nextButton.show();
            }
        };
        _move = function(){
            _main.animate({
                'left' : - (_itemWidth * _clickCount)
            }, 600);
        };
        _clickEvent = function(){
            // 次へボタンを押したら、次へ
            _nextButton.click(function(){
                _clickCount = _clickCount + 1;
                _move();
                _count();
            });
        // 前へボタンを押したら、前に飛ばす
            _prevButton.click(function(){
                _clickCount = _clickCount - 1;
                _move();
                _count();
            });
        };
        
        _count();
        _clickEvent();
    }(jQuery);

    Carousel();

})();
