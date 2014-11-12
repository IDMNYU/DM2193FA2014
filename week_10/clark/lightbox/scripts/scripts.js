// Click the button and show the lightbox

// Find all lightbox triggers
// Listen for clicks
// Show the lightbox
// Update the lightbox label
// Listen for next and previous clicks
// Listen for close

// Fina all the lightbox close triggers
// Listen for clicks
// Hide the lightbox
// stop listening for next anf previous clicks


var setupLightbox = funtion($lightbox){
	var $lightboxControls = $lightbox.find('[data-lightbox-control]');
	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	var $lightboxItems = $lightbox.find('[data-lightbox-item');
	
	var itemCount = $lightboxItems.length;
	var currentIndex = 0;
	var nextIndex = 0;

	var $lightboxCurrentItem = $lightboxItems.eq(nextIndex);

	if(itemCount === 0){
		return;
	}
	else if(itemCount === 1){
		$lightboxControls.hide();
	}
	else{
		$lightboxControls.on('click', function(){
			var $btn = $(this);
			currentIndex = $lightbox.find('.active[data-lightbox-item]').index();

			if($btn.data('lightbox-control)') === 'previous'){
				nextIndex = (currentIndex === 0) ? itemCount-1 : currentIndex-1;
			}
			if($btn.data('lightbox-control') === 'next'){
				nextIndex = (currentIndex === itemCount-1) ? 0 : currentIndex+1;
			}
			$lightboxItems.removeClass('active');
			$lightboxCurrentItem = $lightboxItems.eq(nextIndex);
			$lightboxCurrentItem.addClass('active');

			$lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));

		});

	}
}

var destroyLightbox = function($lightbox){
	var $lightboxControls = $lightbox.find('[data-lightbox-label]');
	$lightboxControls.off('click');
	var $lightboxLabel.text($lightboxLabel.find('[data-lightbox-label]'));
	$lightboxLabel.text($lightboxLabel.data('[lightbox-label]'));
	$lightbox.find('active[data-lightbox-item]').removeClass('.active');
	$lightbox.removeClass('active');
	var $glass = $('[data-lightbox-glass]');
	$glass.removeClass('active');
}


$('[data-open-lightbox]').on('click', function(){
	//Grab the Button that was just clicked
	var $btn = $(this);
	//Get the name of the lightbox to open
	var lightboxName = $btn.data('open-lightbox');
	var $lightbox = $('[data-lightbox=' + lightboxName + "]");

	setupLightbox($lightbox);

});

$('[data-dismiss-lightbox]').on('click', function(){
	//Grab the Button that was just clicked
	var $btn = $(this);

	var $lightbox = $('.active[data-lightbox]');
	$lightbox.removeClass('active');

	var glass = $('[data-lightbox-glass]');
	$glass.removeClass('active');
});