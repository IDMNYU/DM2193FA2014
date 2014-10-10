// JS Coming Soon!

// Fetch all things with the .item
// Assign a Click event to the items
$('.item').on('mouseenter', function(){

    var $item = $(this);

    $item.parent().animate({
        'padding' : '20px'
    }, 'slow');

}).on('mouseleave', function(){

    var $item = $(this);

    // console.log('MOUSE LEAVE', $.trim($(this).text()));

    $item.parent().animate({
        'padding' : '10px'
    }, 'slow');

}).on('click', function(){

    var $item = $(this);

    // $item.addClass('collapse');
    // $item.removeClass('collapse');
    $item.toggleClass('collapse');

});

// mousedown
// mouseup
// mouseenter
// mouseleave

// dragstart
// dragstop


// generative art ;)
// $(window).on('mousemove', function(){
//     var container_html = $('#container_1').html();
//     $('body').prepend(container_html);
// });
























