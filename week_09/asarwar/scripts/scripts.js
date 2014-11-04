$('[data-tooltip]').on('mouseenter', function(){
	var $tooltip_el = $(this);
	var tooltip_text = $tooltip_el.data('tooltips');

	console.log(tooltip_text);

});