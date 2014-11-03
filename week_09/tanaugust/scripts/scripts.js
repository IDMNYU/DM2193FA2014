//$ means fetch or find

$('[data-tooltip]').on('mouseenter', function(){

	var $tooltip_el =$(this);
	var tooltip_el_width = $tooltip_el.width();
	var tooltip_el_offset = $tooltip_el.offset();
	var tooltip_text = $tooltip_el.data('tooltip');

	var $tooltip = $('div />', {
		'class' : 'tooltip',
		'text' : tooltip_text
	}).appendTo('body').css({
		'position' : 'absolute',
		'top' : 0,
		'left' : 0,
		'transform' : 'translateX(-50%)'
	});
});
	console.log('width:',tooltip_el_width);
	console.log('offsetL:',tooltip_el_offset);