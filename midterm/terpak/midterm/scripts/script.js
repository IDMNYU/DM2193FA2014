$(document).ready(function(){
	refresh();

	$(window).on('hashchange', function(e){
		e.preventDefault();
		refresh();
	});
});

function refresh(){
	$('*').removeClass('active');
	var hash = window.location.hash;

	if (hash === '') hash = window.location.hash = 'news';

	$('.nav-' + hash.substring(1, hash.length)).addClass('active');
}