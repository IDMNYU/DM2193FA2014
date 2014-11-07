$('[data-tooltip]').on('mouseenter', function(){

	var tooltip_el = $(this);
	var tooltip_el_width = tooltip_el.width();
	var tooltip_el_offset = tooltip_el.offset();
	var tooltip_text = tooltip_el.data('tooltip');

	var tooltip = $('<div />', {
		'class' : 'tooltip',
		'text' : tooltip_text
	}).appendTo('body').css({
		'position' : 'absolute',
		'top' : tooltip_el_offset.top,
		'left' : Math.floor((tooltip_el_width/2) + tooltip_el_offset.left),
		'transform' : 'translateX(-50%)'
	})


	

});