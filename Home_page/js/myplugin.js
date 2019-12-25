$(document).ready(function () {

        var nav =$('nav');
    $('.mobile-menu').css('top',$(nav).height());
    $('.bar-img').click(function () {
        $('.mobile-menu').toggleClass('active');
    });
    $('.mobile-menu ul .dropdown').click(function () {
        $('.mobile-menu ul .dropdown ul ').toggleClass('active');
    })

    
  
 
 

    $(window).resize(function () {
        $(widget_container).height($(window).height()-$(nav).height());
        $(tab_pane).height($(widget_container).height()-70);
        if($('.mobile-menu').hasClass('active')){
            $('.mobile-menu').removeClass('active');
        }

    })



})