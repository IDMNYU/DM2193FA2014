$(document).ready( function () {

	$('.nav-left li').hover( function () {
		$('ul', this).css('z-index', '2');
		$('ul', this).slideDown('400', function() {});; },
		function () {
			$('ul', this).slideUp(400); 
		}
	);

	$('[data-toggle-modal]').click( function () {
		var btn = $(this);
		var modal_name = btn.data('modal');
		$( "#"+modal_name ).toggle();
		$( ".glass" ).toggle();

		$(this).keypress(function(e) { 
    	if (e.keyCode == 27) {
        $( "#"+modal_name ).toggle();
		$( ".glass" ).toggle();
    } 
});
	} );


});


function loadMore() {
$( "#show_more" ).slideDown()
}

