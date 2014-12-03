
// NAV STUFF
(function( window ){
	

	var body = document.body,
		togglePushLeft = document.querySelector( ".toggle-push-left" ),
		pushMenuLeft = document.querySelector( ".push-menu-left" ),
		closeButton= document.querySelector(".close-menu")
	;

	/* push menu left */
	togglePushLeft.addEventListener( "click", function(e){
		$('body').addClass("pml-open");
		e.stopPropagation();
	} );

	wrapper.addEventListener( "click", function(){
		$('body').removeClass("pml-open" );
	});

	/* hide active menu if close menu button is clicked */
	closeButton.addEventListener("click", function(){
		$('body').removeClass('pml-open')
	} );


})( window );

