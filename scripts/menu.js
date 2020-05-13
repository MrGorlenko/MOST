$(document).ready(function(){

    $('.header__burger').on('click', function(){

        $('.menu').addClass('left-0');

    })

    $('.menu__close').on('click', function(){
        $('.menu').removeClass('left-0');
    })

})