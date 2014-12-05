//Javascript for Buttons

/*document.getElementById("home").onclick = function () {
        location.href = "https://www.tumblr.com/dashboard";
};

document.getElementById("inbox").onclick = function () {
        location.href = "https://www.tumblr.com/inbox";
};

document.getElementById("help").onclick = function () {
        location.href = "https://www.tumblr.com/help";
};

document.getElementById("logOff").onclick = function () {
        location.href = "https://www.tumblr.com/login";
};*/

var navOnClickHandler = function(id){
	if ( id == 'home'){
		location.href = 'https://www.tumblr.com/dashboard';
	}
	else if ( id == 'inbox'){
		location.href = 'https://www.tumblr.com/inbox';
	}
	else if ( id == 'help'){
		location.href = 'https://www.tumblr.com/help';
	}
	else if ( id == "logOff"){
		location.href = 'https://www.tumblr.com/login';
	}
};