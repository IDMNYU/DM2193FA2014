// Coming in Week 5!

// alert('lol');


/* these are also comments in javascript*/


// De's Pseudo Code

// When you click on the navigation
// The name of the anchor is applied as a class name on the HTML tag
// 
// Click Event
// Read Attribute
// Write Attribute
// 
// "Listen for a Click Event"
// "Read the HREF attribute from the <A>"
// "Write the HREF attribute value as a class to <HTML>"

var navTruffleRisotto = document.getElementById('nav-chunky-cheesecake-brownies');
var navLobsterMacandCheese = document.getElementById('nav-baked-ziti');
var CookiesandCreamBars = document.getElementById('nav-cookies-and-cream-bars');

var navOnClickHandler= function(e){

	console.log(e);

	var navItem = e.target;

	var hasClassName = navItem.hash;
	var newId = hasClassName.substring(1, hasClassName.length-1);

	document.body.className = '';
	document.body.classList.add(newId);

};

navTruffleRisotto.onclick = navOnClickHandler;
navLobsterMacandCheese = navOnClickHandler;
navCookiesandCreamBars = navOnClickHandler; 


