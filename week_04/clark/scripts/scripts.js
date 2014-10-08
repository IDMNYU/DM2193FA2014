// Coming in Week 5!
//alert("hi");

/*
	Pseudo Code

*/
//When you click on the navigation
//The name of the anchor is applied as a class name on the HTML tag

// Click Event
// Read Attribute
// Write Attribute
// 
// "Listen for a Click Event on .nav-item"
// "Read the HREF attribute from the <A>"
// "Write the HREF attribute value as a class to <HTML>"

//Fetch the element out of the DOM by it's ID
var navCheeseCake = document.getElementById('nav-chunky-cheesecake-brownies');
var navBakedZiti = document.getElementById('nav-baked-ziti');
var navChocolateChipCookies = document.getElementById('nav-chocolate-chip-cookies');

//e is an event object
var navOnClickHandler = function(e){
    //log the event object in the console
    console.log(e);
    var navItem = e.target;
    console.log(navCheeseCake === navItem);
    var hashClassName = navItem.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashClassName.substring(1, hashClassName.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.className = ' ';
    document.body.classList.add(newId);
};

/*navCheeseCake.onclick = function(e){
    // alert('hahahahahaha no');
    // return false;

    // Show the event object
    // console.log(e);

    var navItem = e.target;

    var hashClassName = navCheeseCake.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashCheeseCake.substring(1, hashClassName.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.classList.add(newId);
};

navBakedZiti.onclick = function(e){
    // console.log(e);
    var navItem = e.target;
    var hashClassName = navBakedZiti.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashClassName.substring(1, hashClassName.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.classList.add(newId);
};

navChocolateChipCookies.onclick = function(e){
    // console.log(e);
    var navItem = e.target;
    var hashClassName = navChocolateChipCookies.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashClassName.substring(1, hashClassName.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.classList.add(newId);
};*/

// Psedo Code Language
// Listen for a Click Event on navigation
// Apply a .current Class to the navigation clicked on
// Remove any .current classes from any other navigation
// Click Handler for navigation

var navOnClickHandler2 = function(e){
    //log the event object in the console
    var navItem = e.target;
    var navItems = document.
    var hashClassName = navItem.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashClassName.substring(1, hashClassName.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.className = ' ';
    document.body.classList.add(newId);
};
