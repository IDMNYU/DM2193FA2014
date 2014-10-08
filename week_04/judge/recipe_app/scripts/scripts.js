//When you cick on the navigation
//The name of the anchor is applied as a class name on the HTML tag

//document.getElementById('nav-chocolate-chip-cookies');

//document.getElementById('nav-chunky-cheesecake-brownies');

//document.getElementById('nav-baked-ziti');

//var navCheeseCake = document.getElementById('nav-chunky-cheesecake-brownies');
//navCheeseCake.onClick = function(e){
	//console.log(navCheeseCake.hash);
//};

var navCheeseCake = document.getElementById('nav-chunky-cheesecake-brownies');
var navBakedZiti = document.getElementById('nav-baked-ziti');
var navChocolateChipCookies = document.getElementById('nav-chocolate-chip-cookies');

var navOnClickHandler = function(e){

	console.log(e);

	var navItem = e.target;
	var hasClassName = navItem.hash;
	var newId = hasClassName.substring(1, hasClassName.length);
	document.body.className = '';
	document.body.classList.add(newId);
};


navCheeseCake.onClick = navOnClickHandler2;
navBakedZiti.onClick = navOnClickHandler2;
navChocolateChipCookies.onClick = navOnClickHandler2;



var navOnClickHandler2 = function(e){
	var navItem = e.target;
	var navItems = document.querySelectAll('.nav-item');
	//console.log(navItems);
	for (var i = navItems.length - 1; i >= 0; i--) {
		navItems[i].classList.remove('current');
		navItems[i].classList.add('current');
	}
}












//navCheeseCake.onclick = function(e){
//    // alert('hahahahahaha no');
//    // return false;
//
//    // Show the event object
//    // console.log(e);
//
//    var hashCheeseCake = navCheeseCake.hash;
//    // console.log(hashCheeseCake);
//    // console.log(typeof(hashCheeseCake));
//    var newId = hashCheeseCake.substring(1, hashCheeseCake.length-1);
//    // console.log(newId);
//    // Add the newId to the classList of Body
//    document.body.classList.add(newId);
//};

//navBakedZiti.onclick = function(e){
//	var navItem = e.target;
//    // console.log(e);
//	var hashBakedZiti = navBakedZiti.hash;
//    // console.log(hashCheeseCake);
//    // console.log(typeof(hashCheeseCake));
//    var newId = hashBakedZiti.substring(1, hashBakedZiti.length-1);
//    // console.log(newId);
//    // Add the newId to the classList of Body
//    document.body.classList.add(newId);
//};
//
//navChocolateChipCookies.onclick = function(e){
//    // console.log(e);
//var hashChocolateChipCookies = navChocolateChipCookies.hash;
//    // console.log(hashCheeseCake);
//    // console.log(typeof(hashCheeseCake));
//    var newId = hashChocolateChipCookies.substring(1, hashChocolateChipCookies.length-1);
//    // console.log(newId);
//    // Add the newId to the classList of Body
//    document.body.classList.add(newId);
