// Pseduo Code
//
// Click the button and show the lightbox
// Find all lightbox triggers
// listen for clicks
// show the lightbox
// update the lightbox label
// listen for next and prev clicks
// listen for close 
// 
// find all the lightbox close triggers
// listen for clicks
// hide the lightbox
// stop listening for next and prev clicks 

var setupLightbox = function($lightbox) {

	// Fetch Lightbox Controls
	// Fetch Lightbox Items
	// Fetch Lightbox Label 
	// Count Items
	// Store our position in the lightbox
	// Current Item 

	var $lightboxControls = $lightbox.find('[data-lightbox-control]');
	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	var $lightboxItems = $lightbox.find('[data-lightbox-item]');
	// find method --> the same thing except it's scoped to the lightbox mark-up
	// "look inside this html"
	// as long as [data-lightbox-control] is a child !

	var itemCount = $lightboxItems.length;
	var currentIndex = 0; 
	var nextIndex= 0; 

	var $lightboxCurrentItem = $lightboxItems.eq(nextIndex);

	// Fact check what we're dealing with 
	// Do we have any items at all?
	// Do we have more than one item ?
	// No - ok hide the controls
	// Yes - ok listen for Clicks on the next/prev buttons 

	if (itemCount === 0) {
		return;
	} else if (itemCount === 1) {
		$lightboxControls.hide();
	} else{
		// We have a good lightbox, let's do this thing 

		$lightboxControls.on('click', function(){
			// Store the lightbox control that was clicked 
			var $btn = $(this);
			
			// Determine the Current Index 
			currentIndex = $lightbox.find('.active[data-lightbox-item').index();

			//and then adjust index and act accordingly 
			// Handle previous button 
			if ($btn.data('lightbox-control') === 'previous') {
				nextIndex = (currentIndex === 0) ? itemCount-1 : currentIndex-1;
			};

			// Handle next button
			if ($btn.data('lightbox-control') === 'next') {
				nextIndex = (currentIndex === 0) ? itemCount-1 : currentIndex+1;

			}

			// Clear out the active class from ALL lightbox items
			$lightboxItems.removeClass('active');
			// Fretch the "new" current item - store it, 
			//and then give that class back in the next line
			$lightboxCurrentItem = $lightboxItems.eq(nextIndex);
			// Add Active class to new current item 
			$lightboxCurrentItem.addClass('active');

			$lightboxLabel.text(
				$lightboxCurrentItem.find('img').attr('alt'));

		});
	}


	
	$lightbox.addClass('active');

	var $glass = $('[data-lightbox-glass]');
	$glass.addClass('active');
};

var destroyLightbox = function($lightbox) {
	// stop listening to clicks on next and prev
	// unset the label ??
	// hide the lightbox
	// reset the active items 

	// Disable Event Listeners
	var $lightboxControls = $lightbox.find('[data-lightbox-control]');
	$lightboxControls.off('click');

	// Reset Lightbox Label
	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	$lightboxLabel.text($lightboxLabel.data('[lightbox-label]'));

	// Reset Lightbox Active Item
	$lightbox.find('active[data-lightbox-item]').removeClass('active');

}

$('[data-open-lightbox]').on('click', function(){
	// Grab the Button that was just clicked
	var $btn = $(this);
	// Get the name of the lightbox to open
	var lightboxName = $btn.data('open-lightbox');
	var $lightbox = $('[data-lightbox=' + lightboxName + ']'); 
	
	setupLightbox($lightbox);
}); 

$('[data-dismiss-lightbox]').on('click', function(){
	// Grab the Button that was just clicked
	var $btn = $(this);
	// Get the name of the lightbox to open
	var $lightbox = $('.active[data-lightbox]');
	$lightbox.removeClass('active');

	var $glass = $('[data-lightbox-glass]');
	$glass.removeClass('active');
}); 