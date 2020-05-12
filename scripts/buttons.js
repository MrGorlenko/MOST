
$(document).ready(function(){

    /* MOBILE */

    $('#mobile-exchange').on('click', function(){

        $(this).addClass('features_active');
        $('#mobile-performance').removeClass('features_active');


    })

    $('#mobile-performance').on('click', function(){

        $(this).addClass('features_active');
        $('#mobile-exchange').removeClass('features_active');

    })

    /* WEB */ 


    $('#web-encrichment').on('click', function(){

        $(this).addClass('features_active');
        $('#web-performance').removeClass('features_active');


    })

    $('#web-performance').on('click', function(){

        $(this).addClass('features_active');
        $('#web-encrichment').removeClass('features_active');

    })

    /* FOR */ 

    $('#for-enterprices').on('click', function(){

        $(this).addClass('features_active');
        $('#for-business').removeClass('features_active');
        $('#for-event').removeClass('features_active');


    })

    $('#for-business').on('click', function(){

        $(this).addClass('features_active');
        $('#for-enterprices').removeClass('features_active');
        $('#for-event').removeClass('features_active');


    })

    $('#for-event').on('click', function(){

        $(this).addClass('features_active');
        $('#for-business').removeClass('features_active');
        $('#for-enterprices').removeClass('features_active');


    })

    /* PRICE */

    $('#monthly').on('click', function(){
        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#annually').removeClass('price__active');
        $('#annually').addClass('price__passive');
        $('#benefit').addClass('price__invisible');
        $('#benefit').removeClass('price__visible');
    })

    $('#annually').on('click', function(){
        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#monthly').removeClass('price__active');
        $('#monthly').addClass('price__passive');
        $('#benefit').removeClass('price__invisible');
        $('#benefit').addClass('price__visible');
    })
    
    /* CURRENCY */

    $('#RUB').on('click', function(){

        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#EUR').addClass('price__passive');
        $('#USD').addClass('price__passive');
        $('#EUR').removeClass('price__active');
        $('#USD').removeClass('price__active');

    })

    $('#EUR').on('click', function(){

        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#RUB').addClass('price__passive');
        $('#USD').addClass('price__passive');
        $('#RUB').removeClass('price__active');
        $('#USD').removeClass('price__active');

    })

    $('#USD').on('click', function(){

        $(this).addClass('price__active');
        $(this).removeClass('price__passive');
        $('#EUR').addClass('price__passive');
        $('#RUB').addClass('price__passive');
        $('#EUR').removeClass('price__active');
        $('#RUB').removeClass('price__active');

    })

})

