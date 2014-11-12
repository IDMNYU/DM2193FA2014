
var setupLightbox = function($lightbox){

	var $lightboxControls = $lightbox.find('[data-lightbox-control]');
	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	var $lightboxItems = $lightbox.find('[data-lightbox-items]');

	var itemCount = $lightboxItems.length;
	var currentIndex = 0;
	var nextIndex = 0;

	var $lightboxCurrentItem = $lightboxItems.eq(nextIndex);





	if (itemCount === 0) {
		return;
	} else if ( itemCount === 1) {
		$lightboxControls.hue();
	} else {

		$lightboxControls.on('click', function(){
			var $btn = $(this);
			currentIndex = $lightbox.find('.active[data-lightbox-item]').index();

			if ($btn.data('lightbox-control') === 'previous') {
				nextIndex = (currentIndex === 0) ? itemCount-1 : currentIndex-1;
			}


			if ($btn.data('lightbox-control') === 'next') {
				nextIndex = (currentIndex === itemCount-1) ? 0 : currentIndex+1;
			}


		$lightboxCurrentItem.removeClass('active');
		$lightboxCurrentItem = $lightboxItems.eq(nextIndex);
		$lightboxCurrentItem.addClass('active');

		$lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));

		});

	}




	$lightbox.addClass('active');

	var $glass = $('[data-lightbox-glass]');
	$glass.addClass('active');
};



var destroyLightbox = function($lightbox) {

	var $lightboxControls = $lightbox.find('[data-lightbox-control]');
	$lightboxControls.off('click');

	var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
	$lightboxLabel.text($lightboxLabel.data('[lightbox-label]'));

	$lightbox.find('.active[data-lightbox-item]').removeClass('.active');

}




$('[data-open-lightbox]').on('click', function(){
	var $btn = $(this);
	var lightboxName = $btn.data('open-lightbox');
	var $lightbox = $('[data-lightbox=' + lightboxName + ']');


	setupLightbox($lightbox);
});



$('[data-dismiss-lightbox]').on('click', function(){
	var $btn = $(this);

	var $lightbox = $('.active[data-lightbox]');
	$lightbox.removeClass('active');

	var $glass = $('[data-lightbox-glass]');
	$glass.removeClass('active');

});