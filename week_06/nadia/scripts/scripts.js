// JS Coming Soon!
//$('#item_1').on('click'),function(){
//	alert('mwahahahahhahahhahahahahah that tickled!!!!!!');

//});

$('.item').on('mouseenter', function(){
	//console.log($(this).text());

	var $item = $(this);
	$item = $(this);
	$item.animate({
		'background-color': '#f00'
	} ,'slow');

	// console.log("MOUSE ENTER", $.trim($(this).text()));

}).on('mouseleave', function(){
	
	var $item = $(this);
	$item.parent().animate
	
	// console.log('MOUSE LEAVE',$.trim($(this).text()));

}).on('click', function(){
	
	var $item= $(this);
	
	$item.toggleClass('collapse');
	// $item.addClass('collapse');
	// $item.removeClass('collapse');

});
$(window).on('mousemove', function(){
	var container_html = $(" #container_1").html();
	$('body').prepend(container_html);
});
