//Click the button and show the lightbox

//Find all lightbox triggers
//listen for clicks
//Show the lightbox
//update the lightbox label
// listen for next and prev clicks
//listen for close
//
//Find all the lightbox closes
//listen for clicks
//hide the lightbox
//stop listening for next and prev clicks

var setupLightbox = function($lightbox){
	//Fetch Lightbox Controls
	//Fetch Lightbox Items
	//Fetch Lightbox Label
	//Count Items
	//Store our position in the lightbox
	//Current Item

	var lightboxControls = $lightbox.find('[data-lightbox-control]');
	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	var $lightboxItems = $lightbox.find('[data-lightbox-label]')

	var itemCount = $lightboxItems.length;
	var currentIndex=0;
	var nextIndex=0;

	var $lightboxCurrentItem= $lightboxItems.eq(nextIndex);

	//Fact check what we're dealing with
	//Do we have any items at all?
	//Do we have more than one item?
	//No ok hide the controls
	//Yes ok les listen for clicks on the next/prev buttons

	if (itemCount===0){
		return;
	} else if (itemCount===1){
		lightboxControls.hide();
	} else{
		//we have a good lightbox. 

		$lightboxControls.on('click',function() {
			//Store the lightbox control that was clicked
			var $btn = $(this);
			currentIndex = $lightbox.find('.active[data-lightbox-item]').index();

			if($btn.data('lightbox-control') === 'previous'){
				nextIndex = (currentIndex = 0) ? itemCount-1 : currentIndex-1;
			};

			//Handle Next Button
			if ($btn.data('lightbox-control') === 'next'){
				nextIndex = (currentIndex = itemCount-1) ? 0 : currentIndex+1;;
			};

			//Clear out the active class from all lightbox items
			$lightboxItems.removeClass('active');
			//Fetch the "new" current item
			$lightboxCurrentItem = $lightboxItems.eq(nextIndex);
			//Add Active class to new current item
			$lightboxCurrentItem.addClass('active');

				//Udate the lightbox
	$lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));
		});
	}	

	//Udate the
	$lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));

	$lightbox.addClass('active');

	var $glass= $('[data-lightbox-glass]');
	$glass.addClass('active')
}

var destroyLightbox = function($lightbox){
	//stop listening to clicks on next and preve
	//unset the label
	//hide the lightbox
	//reset the active items
	var $lightboxControls = $lightbox.find('[data-lightbox-control]');
	$lightboxControls.off('click');

	//Reset Lightbox Label
	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	$lightboxLabel.text($lightboxLabel.data('[lightboxLabel]'));

	$lightboxfind('.active[data-lightbox-item]').removeClass('.active');

	$lightbox.removeClass('active');

	var $glass = $('[data-lightbox-glass]');
	$glass.removeClass('active');

}

$('[data-open-lightbox]').on('click', function(){
	//Grab the button
	var $btn = $(this);
	//Get the name of the lightbox to open
	var lightboxName = $btn.data('open-lightbox');

	var $lightbox = $('[data-lightbox=' + lightboxName +']');
	
	setupLightbox($lightbox); //reFactoring
});

$('[data-dismiss-lightbox]').on('click', function(){
	//Grab the button
	var $btn = $(this);
	
	var $lightbox = $('.active[data-lightbox]');
	$lightbox.removeClass('active');

	var $glass = $('.active[data-lightbox-glass]');
	$glass.removeClass('active');
});
