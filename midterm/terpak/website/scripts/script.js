$(document).ready(function(){
	$('.item-toggle').attr('src', './images/plus.gif');
	$('.section-toggle').attr('src', './images/down.gif');
	$('.section-body').hide();
	$('.item-body').hide();
	$('.header-login').hide();
	$('.header-register').hide();

	$('#login-link').on('click', function(e){
     	e.stopPropagation();

		if ($('.header-register').is(':visible'))
			$('.header-register').hide();

		if (!$('.header-login').is(':visible'))
			$('.header-login').slideDown();
		else
			$('.header-login').slideUp();
	});
	$('#register-link').on('click', function(e){
     	e.stopPropagation();

		if ($('.header-login').is(':visible'))
			$('.header-login').hide();

		if (!$('.header-register').is(':visible'))
			$('.header-register').slideDown();
		else
			$('.header-register').slideUp();
	});
	$('.header-login, .header-register').on('click', function(e){
     	e.stopPropagation();
	});
	$('html').on('click', function(e){
		$('.header-login').slideUp();
		$('.header-register').slideUp();
	});

	/* USE FOR JOBS PAGE
	$('.section-toggle').on('click', function(){
		var body = $(this).parent().parent().children('.section-body');

		if (body.is(':visible')){
			$('.item-toggle').attr('src', './images/plus.gif');
			$('.item-body').slideUp();
			body.slideUp();
			$(this).attr('src', './images/down.gif');
		}else{
			$('.item-toggle').attr('src', './images/plus.gif');
			$('.item-body').slideUp();
			$('.section-body').slideUp();
			$('.section-toggle').attr('src', './images/down.gif');
			body.slideDown();
			$(this).attr('src', './images/up.gif');
		}
	});

	$('.section').on('click', '.item-toggle', function(){
		var body = $(this).parent().parent().children('.item-body');

		if (body.is(':visible')){
			body.slideUp();
			$(this).attr('src', './images/plus.gif');
		}else{
			$('.item-body').slideUp();
			$('.item-toggle').attr('src', './images/plus.gif');
			body.slideDown();
			$(this).attr('src', './images/minus.gif');
		}
	});

	$('.section').on('click', '.message-submit', function(){
		var msgbox = $(this).siblings('.message-span').children('.message');
		var chatbox = $(this).parent().siblings('.chatbox');
		var msg = msgbox.val();

		if (msg === '') return;

		msgbox.val('');
		chatbox.append('<strong>Anonymous</strong>: ' + msg + '</br>');
		chatbox.animate({ scrollBottom: chatbox.scrollHeight }, 100);
	});
	$('.section').on('keypress', '.message', function(e) {
	    if(e.which == 13) {
			var chatbox = $(this).parent().parent().siblings('.chatbox');
			var msg = $(this).val();

			if (msg === '') return;

			$(this).val('');
			chatbox.append('<strong>Anonymous</strong>: ' + msg + '</br>');
			chatbox.scrollTop(chatbox.offset().top);
	    }
	});*/
});