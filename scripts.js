

$(document).ready(function(){
    $('.menu-toggler').click(function() {
        // $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.top-nav li').click(function() {
        $('.top-nav').removeClass('open');
    })

    $('.top-nav').click(function() {
        $('.top-nav').removeClass('open');
    })
});