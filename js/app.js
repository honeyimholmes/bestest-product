$(document).ready(function() {
    const hamburger = $('#hamburger');
    const responsiveMenu = $('.responsive-menu');
    const menuLinks = $('.scrolling-link');
    const prevArrow = $('.quote-prev');
    const nextArrow = $('.quote-next');
    let currentSlide = 1;
    const maxSlide = $('.quote-details').length +1;
    const respLink = $('.responsive-link');

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