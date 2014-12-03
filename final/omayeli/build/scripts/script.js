$(window).on("scroll",function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".posts-nav-page").addClass("pink");
    } else {
        $(".posts-nav-page").removeClass("pink");
    }
});



$(document).ready(function(){
	$('.x').hover(function(){
		$(this).find('.dd-content').slideToggle('fast'); 
	});
});