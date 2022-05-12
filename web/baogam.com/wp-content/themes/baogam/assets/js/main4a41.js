/*Nav icon mobile*/

jQuery(document).ready(function($){
    //Toggle Navigation
    $('#navtop_icon').click(function(){
        $(this).toggleClass('open');

        $('.navtop_toggle').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('html , body').toggleClass('fixScroll');
    });


    $(".overlay").click(function() {
        $(this).toggleClass('open');
        $("#navtop_icon").toggleClass("open");
        $(".navtop_toggle").toggleClass("open");
        $('html , body').toggleClass('fixScroll');
    });

    //WOW Library
    new WOW().init();

    //Smooth Scroll


    //Preloader
    var preloader = $('.preloader');
    $(window).load(function(){
        $('.preloader').fadeOut('slow');
    });
});
