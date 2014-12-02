$(document).ready( function () {

	// Fix Navbar to top when scrolling past
	$(window).scroll(function () {
	    winHeight = $(window).height();
	    if ($(window).scrollTop() > winHeight-50) {
	        $('#main-nav').addClass('fixed-top');
	        $( ".nav-right" ).addClass('invisible');
	    }
	    if ($(window).scrollTop() < winHeight-50) {
	        $('#main-nav').removeClass('fixed-top');
	        $( ".nav-right" ).removeClass('invisible');
	    }
	});

	// Open Sidebar
	$('[data-open-sidebar]').click( function () {
		$( ".sidebar" ).show( "slide" );
		$( ".navbar" ).addClass('invisible');
		$( ".glass" ).show();

	} );

	// Close Sidebar
	$('[data-close-sidebar]').click( function () {
		$( ".sidebar" ).hide( "slide" );
		$( ".navbar" ).removeClass('invisible');
		$( ".glass" ).hide();

	} );

	$(document).keyup(function(e){

    if(e.keyCode === 27)
        $( ".sidebar" ).hide( "slide" );
		$( ".navbar" ).removeClass('invisible');
		$( ".glass" ).hide();
	});


});