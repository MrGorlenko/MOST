$(document).ready(function(){

    $('.slider__try').on('click', function(){

        setTimeout($('.modal').addClass('modal-z-index'), 1100);
        $('.modal').addClass('modal-opacity');
        $('body').css('overflow', 'hidden');

    })

    $('.modal__close').on('click', function(){

        setTimeout($('.modal').removeClass('modal-z-index'), 1100);
        $('.modal').removeClass('modal-opacity');
        $('body').css('overflow', 'visible');

    })

})
