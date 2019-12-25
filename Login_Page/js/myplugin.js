$(document).ready(function () {
//make img =100 % of screen
    $(".img-div img,.right-con").height($(window).height())
    $( window ).resize(function() {
        $(".img-div img,.right-con").height($(window).height())
    });

})