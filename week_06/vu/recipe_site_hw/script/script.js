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

var navCheeseCake = document.getElementById('nav-chunky-cheesecake-brownies');
var navBakedZiti = document.getElementById('nav-baked-ziti');
var navChocoloateChipCookies = document.getElementById('nav-baked-ziti');


navCheeseCake.onclick = function(e){
    // alert('hahahahahaha no');
    // return false;

    // Show the event object
    // console.log(e);
    var navItem = e.target;

    var hashCheeseCake = navCheeseCake.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashCheeseCake.substring(1, hashCheeseCake.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.classList.add(newId);
};

navCheeseCake.onclick = navOnClickHandler;
navBakedZiti.onlcik = navOnClickHandler;
navChocolateChipCookies.onclick = navOnClickHandler;

navBakedZiti.onclick = function(e){
    // console.log(e);
    var navItem = e.target;

    var hashBakedZiti = navBakedZiti.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashBakedZiti.substring(1, hashBakedZiti.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.classList.add(newId);
};


navChocoloateChipCookies.onclick = function(e){
    // alert('hahahahahaha no');
    // return false;

    // Show the event object
    // console.log(e);
    var navItem = e.target;

    var hashChocolateChipCookies = navChocoloateChipCookies.hash;
    // console.log(hashCheeseCake);
    // console.log(typeof(hashCheeseCake));
    var newId = hashChocolateChipCookies.substring(1, hashChocolateChipCookies.length-1);
    // console.log(newId);
    // Add the newId to the classList of Body
    document.body.classList.add(newId);
};