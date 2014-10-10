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
// "Listen for a Click Event on .nav-item"
// "Read the HREF attribute from the <A>"
// "Write the HREF attribute value as a class name to <HTML> or <BODY>"

// Fetch the element out of the DOM by it's Id
var navCookieDoughTruffles = document.getElementById('nav-item-cookie-dough-truffles');
var navOreoTruffles = document.getElementById('nav-item-oreo-truffles');
var navSugarCookies = document.getElementById('nav-item-sugar-cookies');

// Click Handler for Navigation
var navOnClickHandler = function(e){
    // e is an Event Object
    // Log the Event Object into the Console
    // console.log(e);
    // This special thing
    var navItem = e.target;
    var hasClassName = navItem.hash;
    // console.log(hasClassName);
    // console.log(typeof(hasClassName));
    var newId = hasClassName.substring(1, hasClassName.length);
    // console.log(newId);
    // Add the newId to the classList of Body
    // Applying statefulness to the <BODY> of the Page
    document.body.className = '';
    document.body.classList.add(newId);
};

// Pseudo Code Language
// Listen for Click Event on Navigation
// Apply a .current Class to the navigation clicked on
// Remove any .current classes from any other navigation
// Click Handler for Navigation
var navOnClickHandler2 = function(e){

    // Grab the Nav Item you clicked on
    var navItem = e.target;

    // Grab all of the nav items and loop over them
    // document.querySelectorAll() is similar to document.getElementById()
    // except that it uses CSS selectors and it will match and return 
    // multiple DOM elements as results in an array
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = navItems.length - 1; i >= 0; i--) {
        // Remove the Current Class Name
        navItems[i].classList.remove('current');
    }

    // Re-apply current class to the nav item you clicked
    navItem.classList.add('current');
};

// Last restort syntax
// navCheeseCake.onclick = navOnClickHandler2;
// navBakedZiti.onclick =  navOnClickHandler2;
// navChocolateChipCookies.onclick =  navOnClickHandler2;

// navCheeseCake.addEventListener('click', function(e){
//     navOnClickHandler(e);
//     navOnClickHandler2(e);
//     // ...
//     // Add as many methods in here as needed
// });

navCookieDoughTruffles.addEventListener('click', navOnClickHandler);
navCookieDoughTruffles.addEventListener('click', navOnClickHandler2);

navOreoTruffles.addEventListener('click', navOnClickHandler);
navOreoTruffles.addEventListener('click', navOnClickHandler2);

navSugarCookies.addEventListener('click', navOnClickHandler);
navSugarChipCookies.addEventListener('click', navOnClickHandler2);


