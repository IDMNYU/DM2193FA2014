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

var navCheeseCake = document.getElementById('nav-chunky-cheesecake-brownies');
var navBakedZiti = document.getElementById('nav-baked-ziti');
var navChocolateChipCookies = document.getElementbyId('nav-chocolate-chip-cookies');

    var navOnClickHandler = function(e){
  
    var navItem = e.target;
    // Show the event object
    // console.log(e);



    var hashClassName = navItem.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashClassName.substring(1, hashClassName.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.className = '';
    document.body.classList.add(newId);
};



navCheeseCake.onclick = navOnClickHandler;
navBakedZiti.onclick = navOnClickHandler;
navChocolateChipCookies = navOnClickHandler;
