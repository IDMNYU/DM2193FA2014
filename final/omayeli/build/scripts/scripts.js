$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("body").addClass("blue");
    } else {
        $("body").removeClass("blue");
    }
});