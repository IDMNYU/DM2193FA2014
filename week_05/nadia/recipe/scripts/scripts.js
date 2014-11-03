var navGreenCurry = document.getElementById('nav-thai-green-curry');
var navGarmonbozia = document.getElementById('nav-garmonbozia');
var navChocolateChipCookies = document.getElementById('nav-chocolate-chip-cookies');

var navOnClickHandler = function(e){
    var navItem = e.target;
    var hasClassName = navItem.hash;
    var newId = hasClassName.substring(1, hasClassName.length);
    document.body.className = '';
    document.body.classList.add(newId);
};

var navOnClickHandler2 = function(e){

    var navItem = e.target;
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = navItems.length - 1; i >= 0; i--) {
        navItems[i].classList.remove('current');
    }
    navItem.classList.add('current');
};


navGreenCurry.addEventListener('click', navOnClickHandler);
navGreenCurry.addEventListener('click', navOnClickHandler2);

navGarmonbozia.addEventListener('click', navOnClickHandler);
navGarmonbozia.addEventListener('click', navOnClickHandler2);

navChocolateChipCookies.addEventListener('click', navOnClickHandler);
navChocolateChipCookies.addEventListener('click', navOnClickHandler2);


