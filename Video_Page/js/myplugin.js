$(document).ready(function () {

        var nav =$('nav');
        var footer =$('footer');
    $('.mobile-menu').css('top',$(nav).height());
    $('.bar-img').click(function () {
        $('.mobile-menu').toggleClass('active');
    });
    $('.mobile-menu ul .dropdown').click(function () {
        $('.mobile-menu ul .dropdown ul ').toggleClass('active');
    })

    var widget_container=$('.widget-container');
    var tab_pane=$('.widget .tab-pane');
    $(widget_container).height($(window).height()-$(nav).height()-$(footer).outerHeight());
    $(tab_pane).height($(widget_container).height()-70);

    $(window).resize(function () {
        $(widget_container).height($(window).height()-$(nav).height()-$(footer).outerHeight());
        $(tab_pane).height($(widget_container).height()-70);
        if($('.mobile-menu').hasClass('active')){
            $('.mobile-menu').removeClass('active');
        }

    })



})