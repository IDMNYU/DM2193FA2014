$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("body").addClass("pink");
    } else {
        $("body").removeClass("pink");
    }
});

$('.author-stuff').hover(function() { 
	console.log("Hi!");
   $(this).find('.title-content').addClass('active');
} ,function(){
   $(this).find('.title-content').removeClass('active');
});