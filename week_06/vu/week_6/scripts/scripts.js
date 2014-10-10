// This is scripts
// //Both will show
// $('.item').on('click', function(){
// 	alert("hahaha that tickled ~(*o*)~");
// });

/* only the first one will show
$('#item_1').on('click',function() {
	alert('you got me');
});*/

//Fetch all things with the .item
//Assign a Click Event to the items
// $('.item').on('click', function() {
// 	//alert($(this).text());
// 	console.log($(this).text())
// });

$('.item').on('mouseenter',function(){

	var $item = $(this);

	$item.parent().animate({
		'padding': '20px'
	}, 'slow');

	//console.log($(this).text());
	// console.log('MOUSE ENTER', $.trim($(this).text()));

	//Get the Text contents out of the DOM element
	//$(this).text();

	// Get the HTML contents out of the DOM element
	//$(this).html();

	//jQuery best practices
	///Always assign $(this) to a variable 
	//"Caching"

}).on('mouseleave', function(){
	// console.log('MOUSE LEAVE', $.trim($(this).text()));
	
	var $item = $(this);

	$item.parent().animate({
		'padding': '10px'
	}, 'slow');

}).on('click',function(){
	var $item = $(this);

	//$item.addClass('collapse')
	//$item.removeClass('collapse')
	$item.toggleClass('collapse')
});

// $(window).on('mousemove', function(){
// 	var container_html = $('#container_1').html();
// 	$('body').append(container_html);
// });