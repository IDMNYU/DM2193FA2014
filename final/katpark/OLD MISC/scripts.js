var navMamaison = document.getElementById('nav-ma-maison');
var navViensavecmoi = document.getElementById('nav-viens-avec-moi');
var navAujourdhui = document.getElementById('nav-aujourdhui');

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

navMamaison.addEventListener('click', navOnClickHandler);
navMamaison.addEventListener('click', navOnClickHandler2);

navViensavecmoi.addEventListener('click', navOnClickHandler);
navViensavecmoi.addEventListener('click', navOnClickHandler2);

navAujourdhui.addEventListener('click', navOnClickHandler);
navAujourdhui.addEventListener('click', navOnClickHandler2);


