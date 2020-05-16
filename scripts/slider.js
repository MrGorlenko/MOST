$(document).ready(function(){

    /* MOBILE */

    $('#mobile-performance').on('click', function(){

        $('#performance-container').addClass('full-opacity');
        $('#performance-container').removeClass('none-opacity')

        $('#exchange-container').removeClass('full-opacity');
        $('#exchange-container').addClass('none-opacity');

    })

    $('#mobile-exchange').on('click', function(){

        $('#performance-container').removeClass('full-opacity');
        $('#performance-container').addClass('none-opacity')

        $('#exchange-container').addClass('full-opacity');
        $('#exchange-container').removeClass('none-opacity');

    })

    /* WEB */

    $('#web-performance').on('click', function(){

        $('#analytics-container').addClass('full-opacity');
        $('#analytics-container').removeClass('none-opacity')

        $('#enrichment-container').addClass('none-opacity');
        $('#enrichment-container').removeClass('full-opacity');

    })

    $('#web-encrichment').on('click', function(){

        $('#analytics-container').removeClass('full-opacity');
        $('#analytics-container').addClass('none-opacity')

        $('#enrichment-container').removeClass('none-opacity');
        $('#enrichment-container').addClass('full-opacity');

    })

    /* FOR */

    $('#for-enterprices').on('click', function(){

        $('#large').removeClass('none-opacity');
        $('#large').addClass('full-opacity');

        $('#medium').addClass('none-opacity');
        $('#event').addClass('none-opacity');

        $('#medium').removeClass('full-opacity');
        $('#event').removeClass('full-opacity');

    })

    $('#for-business').on('click', function(){

        $('#medium').removeClass('none-opacity');
        $('#medium').addClass('full-opacity');

        $('#large').addClass('none-opacity');
        $('#event').addClass('none-opacity');

        $('#large').removeClass('full-opacity');
        $('#event').removeClass('full-opacity');


    })

    $('#for-event').on('click', function(){

        $('#event').removeClass('none-opacity');
        $('#event').addClass('full-opacity');

        $('#large').addClass('none-opacity');
        $('#medium').addClass('none-opacity');

        $('#large').removeClass('full-opacity');
        $('#medium').removeClass('full-opacity');

    })


        /* COMMENTS */

    $('#azimut').on('click', function(){

        $('#first-com').removeClass('none-opacity');
        $('#second-com').addClass('none-opacity');
        $('#third-com').addClass('none-opacity');
        $('#forth-com').addClass('none-opacity');

    })
    
    $('#staffiet').on('click', function(){

        $('#first-com').addClass('none-opacity');
        $('#second-com').removeClass('none-opacity');
        $('#third-com').addClass('none-opacity');
        $('#forth-com').addClass('none-opacity');

    })
    
    $('#sinto').on('click', function(){

        $('#first-com').addClass('none-opacity');
        $('#second-com').addClass('none-opacity');
        $('#third-com').removeClass('none-opacity');
        $('#forth-com').addClass('none-opacity');

    })
    
    $('#accenture').on('click', function(){

        $('#first-com').addClass('none-opacity');
        $('#second-com').addClass('none-opacity');
        $('#third-com').addClass('none-opacity');
        $('#forth-com').removeClass('none-opacity');

    })



})
