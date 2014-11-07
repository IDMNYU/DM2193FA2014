// Pseudo Code
// 
// Find all of the Modal Triggers
// When a Modal Trigger Is Clicked
//      Find The Corresponding Modal
//      Show The Modal
//      Show the Modal Glass
//
// Find all of the Modal Dismiss Triggers
// When a Modal Dismiss Trigger is Clicked
//      Find the current active Modal
//      Hide The Modal
//      Hide the Modal Glass
//      Execute Arbitrary Code

// $('[data-show-modal]');
// $('[data-dismiss-modal]');

$('[data-show-modal]').on('click',function(){
	$btn=$(this);
	var modalName = $btn.data('show-modal');
	//console.log(modalName);

	var $modal=$('[data-modal=' + modalName+']');
	$modal.addClass('active');
	var $glass = $('[data-modal-glass]');
	$glass.addClass('active');
});

$('[data-dismiss-modal]').on('click',function(){
	var $btn = $(this);
	var affirmative = Boolean($btn.data('dismiss-modal'));

	var $modal = $('.active[data-modal]');
	$modal.removeClass('active');

	var $glass = $('[data-modal-glass]');
	$glass.removeClass('active');

	if(affirmative){
		console.log("Sure thing");
	}
	else{
		console.log("no Whatever");
	}

});