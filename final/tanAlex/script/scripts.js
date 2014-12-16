$(document).ready(function() {
    $(".thumbnail").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
});

$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});