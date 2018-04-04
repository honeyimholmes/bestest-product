$(document).ready(function() {
    var hamburger = $('#hamburger');
    var responsiveMenu = $('.responsive-menu');
    var menuLinks = $('.scrolling-link');
    var prevArrow = $('.quote-prev');
    var nextArrow = $('.quote-next');
    let currentSlide = 1;
    var maxSlide = $('.quote-details').length +1;
    var respLink = $('.responsive-link');
    var form = $('form');

    hamburger.on('click', function() {
        responsiveMenu.toggle('slow');
    });

    menuLinks.on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var offset = $(href).offset().top;
            $('html, body').animate({
                scrollTop: offset 
            }, 1500);        
    });
    
    respLink.on('click', function(e) {
        responsiveMenu.hide('slow');
    });

    $('.quote-details').hide();
    $('.quote-details:nth-child(1)').fadeIn('slow');

    function changeSlide() {
        $('.quote-details').hide();
        currentSlide += 1;
        if (currentSlide === maxSlide) {
            currentSlide = 1;
        }
        $('.quote-details:nth-child(' + currentSlide + ')').fadeIn('slow');
    }

    function prevSlide() {
        $('.quote-details').hide();
        currentSlide -= 1;
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        }
        $('.quote-details:nth-child(' + currentSlide + ')').fadeIn('slow');
    }

    nextArrow.on('click', function() {changeSlide();});
    prevArrow.on('click', function() {prevSlide();});
});