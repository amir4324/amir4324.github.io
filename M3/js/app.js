/**
 * Created by MOHAMED on 26/09/2017.
 */

$(window).ready(function() {
    $('.selectpicker').selectpicker();
    $(window).on('resize',function () {
        var x= $('footer').height();
        $('footer').css({"bottom": -x, "position": "absolute"});


    })
})