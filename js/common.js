$(function () {
    $(window).scroll(function () {

        var winTop = $(window).scrollTop();
        if( winTop >= 600 ){
            $('.rfloat').animate({left:330},600);
        }
    });
    $('.partner li a').mouseover(function () {
        $(this).css({backgroundColor : "white"})
    })
    $('.partner li a').mouseout(function () {
        $(this).css({backgroundColor : ""})
    })
    $('.rnav .lioneup').mouseover(function () {
        $('.lioneup .popUp').css({display: "block"})

    })
    $('.rnav .lioneup').mouseout(function () {
        $('.lioneup .popUp').css({display: "none"})

    })
    $('.rnav .litwoup').mouseover(function () {
        $('.litwoup .popUp').css({display: "block"})

    })
    $('.rnav .litwoup').mouseout(function () {
        $('.litwoup .popUp').css({display: "none"})

    })
})


