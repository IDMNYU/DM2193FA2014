// Coming in Week 5!

var navHome = document.getElementById('nav-home');
var navCookie = document.getElementById('nav-chocolate-chip-cookies');
var navBrownie = document.getElementById('nav-chunky-cheesecake-brownies');
var navZiti = document.getElementById('nav-baked-ziti');
navHome.onclick = function (e) {
	navBrownie.classList.remove("active");
	navZiti.classList.remove("active");
	navCookie.classList.remove("active");
	navHome.classList.add("active");
}
navCookie.onclick = function (e) {
	navHome.classList.remove("active");
	navBrownie.classList.remove("active");
	navZiti.classList.remove("active");
	navCookie.classList.add("active");
	
}
navBrownie.onclick = function (e) {
	navHome.classList.remove("active");
	navZiti.classList.remove("active");
	navCookie.classList.remove("active");
	navBrownie.classList.add("active");
}
navZiti.onclick = function (e) {
	navHome.classList.remove("active");
	navBrownie.classList.remove("active");
	navCookie.classList.remove("active");
	navZiti.classList.add("active");
}