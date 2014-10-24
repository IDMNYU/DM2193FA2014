$(document).ready(function(){
	$.get(
		'http://api.usatoday.com/open/articles',
		{
			encoding: 'json',
			section: 'tech',
			api_key: 'y9w4hzgab2dkm6kwvsgr4cvm'
		},
		function(data){
			$.each(data['stories'], function(name, value){
				$('.section-tech .section-body').append('<div class="item"><div class="item-banner"><img class="item-toggle" src="./images/plus.gif"/><a class="item-title" href="' + value['link'] + '" target="_blank">' + value['title'] + '</a><p class="item-source">(usatoday.com)</p></div><div class="item-body"><div class="chatbox"></div><div class="input-area"><button class="message-submit">Submit</button><span class="message-span"><input class="message" placeholder="Write a comment..." type="text" ></span></div></div></div>');
			});
		},
		'json'
	);

	$.get(
		'http://api.usatoday.com/open/breaking',
		{
			expired: 'true',
			api_key: 'wsmzynmv263n34729752f44e'
		},
		function(data){
			$('.container').appendTo(data);
			//$.each(data['stories'], function(name, value){
			//	$('.section-breaking .section-body').append('<div class="item"><div class="item-banner"><img class="item-toggle" src="./images/plus.gif"/><a class="item-title" href="' + value['link'] + '" target="_blank">' + value['title'] + '</a><p class="item-source">(usatoday.com)</p></div><div class="item-body"><div class="chatbox"></div><div class="input-area"><button class="message-submit">Submit</button><span class="message-span"><input class="message" placeholder="Write a comment..." type="text" ></span></div></div></div>');
			//});
		},
		'xml'
	);
});