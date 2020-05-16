$(document).ready(function(){

    $('.header__burger').on('click', function(){

        $('.menu').addClass('left-0');
        $('.menu').addClass('opacity-full');

    })

    $('.menu__close').on('click', function(){
        $('.menu').removeClass('left-0');
        $('.menu').removeClass('opacity-full');
    })

})