
$(document).ready(function(){

    /* MOBILE */

    $('#mobile-exchange').on('click', function(){

        $(this).addClass('features_active');
        $('#mobile-performance').removeClass('features_active');

        $('#blue-mobile').addClass('left-mobile')

    })

    $('#mobile-performance').on('click', function(){

        $(this).addClass('features_active');
        $('#mobile-exchange').removeClass('features_active');

        $('#blue-mobile').removeClass('left-mobile')

    })

    /* WEB */ 


    $('#web-encrichment').on('click', function(){

        $(this).addClass('features_active');
        $('#web-performance').removeClass('features_active');

        $('#blue-web').addClass('left-mobile');


    })

    $('#web-performance').on('click', function(){

        $(this).addClass('features_active');
        $('#web-encrichment').removeClass('features_active');

        $('#blue-web').removeClass('left-mobile');

    })

    /* FOR */ 

    $('#for-enterprices').on('click', function(){

        $(this).addClass('features_active');
        $('#for-business').removeClass('features_active');
        $('#for-event').removeClass('features_active');

        $('#blue-for').removeClass('left-for-72');
        $('#blue-for').removeClass('left-for-32');

        $('#blue-for').removeClass('width-38');
        $('#blue-for').removeClass('width-27');


    })

    $('#for-business').on('click', function(){

        $(this).addClass('features_active');
        $('#for-enterprices').removeClass('features_active');
        $('#for-event').removeClass('features_active');

        $('#blue-for').removeClass('left-for-72');
        $('#blue-for').addClass('left-for-32');

        $('#blue-for').addClass('width-38');
        $('#blue-for').removeClass('width-27');


    })

    $('#for-event').on('click', function(){

        $(this).addClass('features_active');
        $('#for-business').removeClass('features_active');
        $('#for-enterprices').removeClass('features_active');

        $('#blue-for').addClass('left-for-72');
        $('#blue-for').removeClass('left-for-32');

        $('#blue-for').addClass('width-27');
        $('#blue-for').removeClass('width-38');

    })

    /* PRICE */

    $('#monthly').on('click', function(){
        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#annually').removeClass('price__active');
        $('#annually').addClass('price__passive');
        $('#benefit').addClass('price__invisible');
        $('#benefit').removeClass('price__visible');

        $('#white-left').addClass('right-price-50')


    })

    $('#annually').on('click', function(){
        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#monthly').removeClass('price__active');
        $('#monthly').addClass('price__passive');
        $('#benefit').removeClass('price__invisible');
        $('#benefit').addClass('price__visible');

        $('#white-left').removeClass('right-price-50')
    })
    
    /* CURRENCY */

    $('#RUB').on('click', function(){

        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#EUR').addClass('price__passive');
        $('#USD').addClass('price__passive');
        $('#EUR').removeClass('price__active');
        $('#USD').removeClass('price__active');

        $('#white-right').removeClass('left-price-35');
        $('#white-right').removeClass('left-price-68');

    })


    $('#USD').on('click', function(){

        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#EUR').addClass('price__passive');
        $('#RUB').addClass('price__passive');
        $('#EUR').removeClass('price__active');
        $('#RUB').removeClass('price__active');

        $('#white-right').addClass('left-price-35');
        $('#white-right').removeClass('left-price-68');

    })

    $('#EUR').on('click', function(){

        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#RUB').addClass('price__passive');
        $('#USD').addClass('price__passive');
        $('#RUB').removeClass('price__active');
        $('#USD').removeClass('price__active');

        $('#white-right').removeClass('left-price-35');
        $('#white-right').addClass('left-price-68');

    })

    /* COMMENTS */

    $('#azimut').on('click', function(){
        $('.comments__line').removeClass('left-comments-200');
        $('.comments__line').removeClass('left-comments-350');
        $('.comments__line').removeClass('left-comments-450');
    })

    $('#staffiet').on('click', function(){
        $('.comments__line').addClass('left-comments-200');
        $('.comments__line').removeClass('left-comments-350');
        $('.comments__line').removeClass('left-comments-450');
    })

    $('#sinto').on('click', function(){
        $('.comments__line').removeClass('left-comments-200');
        $('.comments__line').addClass('left-comments-350');
        $('.comments__line').removeClass('left-comments-450');
    })

    $('#accenture').on('click', function(){
        $('.comments__line').removeClass('left-comments-200');
        $('.comments__line').removeClass('left-comments-350');
        $('.comments__line').addClass('left-comments-450');
    })

})

