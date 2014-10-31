// we want to do this:
// find all of the elements on the page with data-tooltip
// if you put your mouse on those elements

$('[data-tooltip]').on('mouseenter', function(){
	// Read the vale of data-tooltip
	var $tooltip_el = $(this);
	var tooltip_el_width = $tooltip_el.outerWidth();
	var tooltip_el_offset = $tooltip_el.offset();
	var tooltip_text = $tooltip_el.data('tooltip');
	// Build a tooltip DIV
	var $tooltip = $('<div />',{
		'class' : 'tooltip',
		'text' : tooltip_text
	}).appendTo('body').css({
		// Position the tooltip DIV near elements
		'position' : 'absolute',
		'top' : tooltip_el_offset.top,
		'left' : Math.floor((tooltip_el_width/2) + tooltip_el_offset.left);
		'transform' : 'translateX(-50%)'
	});

	// When you move your mouse 
	$tooltip.el_on('mouseleave', function(){
		$tooltip.remove();
		$tooltip_el_off('mouseleave');
	})
});