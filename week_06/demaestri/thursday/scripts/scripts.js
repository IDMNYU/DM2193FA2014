// JS Coming Soon!

// Fetch all things with the .item
// Assign a Click event to the items
$('.item').on('mouseenter', function(){

     var $item = $(this);

    $item.parent().animate({
         'padding': '100px' 
     }, 'slow');

    // alert('some text');

    // "Give me the thing I just clicked"
    // $(this)

    // console.log($(this).text());
    // console.log('MOUSE ENTER', $.trim($item.text()));

    // Get the Text contents out of the DOM element
    // $item.text();

    // Get the HTML contents out of the DOM element
    // $item.html();

    // jQuery best practices
    // Always assign $(this) to a variable
    // "Caching"


}).on('mouseleave', function(){

    console.log('MOUSE LEAVE', $.trim($(this).text()));

    var $item = $(this);

    $item.parent().animate({
         'padding': '100px' 
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

//GENERATIVE ART 
//$(window).on('mousemove', function(){
  //  var container_html = $('#container').html();
    //$('body').append(container_html);
//});

