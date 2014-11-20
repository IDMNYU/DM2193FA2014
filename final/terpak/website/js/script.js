$(document).ready(function(){
	$('.search-container').on('click', function(evt){
		if (!$(this).hasClass('search-active')){
			$(this).addClass('search-active');
		}

		evt.stopPropagation();
	});
	$('html').on('click', function(evt){
		$('.search-container').removeClass('search-active');
	});

	$('.user-menu').mouseover(function(){
		$('.menu').css('visibility', 'visible');
		$(this).addClass('menu-active');
	});
	$('.user-menu, .menu').mouseleave(function(){
		if (!($('.user-menu').is(':hover') || $('.menu').is(':hover'))){
			$('.user-menu').removeClass('menu-active');
			$('.menu').css('visibility', 'hidden');
		}
	});

	$(document).on('keydown', function(evt){
		if (evt.which === 37){
			//Go to prev page
			window.location = 'index.html#prev';
		}else if (evt.which === 39){
			//Go to next page
			window.location = 'index.html#next';
		}
	});
});