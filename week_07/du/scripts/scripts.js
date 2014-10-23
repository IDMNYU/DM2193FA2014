// JS Coming Soon!




$('.item').on('mouseenter', function() {
	var $item= $(this)
	/* Act on the event */

	$item.parent().animate({
		'padding': '20px'
	}, 'slow');

});


$('.item').on('click', function() {


	var $item = $(this);

	$item.toggleClass('collapse');


});


































