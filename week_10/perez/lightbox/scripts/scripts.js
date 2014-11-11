// Pseudo Code
// 
// Click the button and show the lightbox
// Find all lightbox triggers
// listen for clicks
// show the lightbox
// update the lightbox label
// listen for next and prev clicks
// listen for close
// 
// Find all the lightbox close triggers
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

    var itemCount = $lightboxItems.length;
    var currentIndex = 0;
    var nextIndex = 0;

    var $lightboxCurrentItem = $lightboxItems.eq(nextIndex);

    // Fact check what we're dealing with
    // Do we have any items at all?
    // Do we have more than one item?
    // No ok hide the controls
    // Yes ok lets listen for Clicks on the next/prev buttons

    if (itemCount === 0) {
        return;
    } else if ( itemCount === 1) {
        $lightboxControls.hide();
    } else {
        // We have a good lightbox, let's do this thing
        
        $lightboxControls.on('click', function(){
            // Store the lightbox Control that was clicked
            var $btn = $(this);
            // Determine the currentIndex
            currentIndex = $lightbox.find('.active[data-lightbox-item]').index();

            // Handle Previous Button
            if ($btn.data('lightbox-control') === 'previous') {
                nextIndex = (currentIndex === 0) ? itemCount-1 : currentIndex-1;
            }
            // Handle Next Button
            if ($btn.data('lightbox-control') === 'next') {
                nextIndex = (currentIndex === itemCount-1) ? 0 : currentIndex+1;
            }

            // Clear out the active class from all lightbox items
            $lightboxItems.removeClass('active');
            // Fetch the "new" current item
            $lightboxCurrentItem = $lightboxItems.eq(nextIndex);
            // Add Active class to new current item
            $lightboxCurrentItem.addClass('active');

            // Update the Lightbox Label
            $lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));
        });

    }

    // Update the Lightbox Label when the lightbox first opens
    $lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));

    $lightbox.addClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.addClass('active');
};

var destroyLightbox = function($lightbox) {
    
    // stop listening to clicks on next and prev
    // unset the label ???
    // hide the lightbox
    // reset the active items

    // Disable Event Listeners
    var $lightboxControls = $lightbox.find('[data-lightbox-control]');
    $lightboxControls.off('click');

    // Reset Lightbox Label
    var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
    $lightboxLabel.text($lightboxLabel.data('[lightbox-label]'));

    // Reset Lightbox Active Item
    $lightbox.find('.active[data-lightbox-item]').removeClass('.active');

    // Hide Lightbox
    $lightbox.removeClass('active');

    // Hide Lightbox Glass
    var $glass = $('[data-lightbox-glass]');
    $glass.removeClass('active');
};

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
    
    var $lightbox = $('.active[data-lightbox]');
    
    destroyLightbox($lightbox);
});











