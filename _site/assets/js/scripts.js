//STICKY NAVBAR
window.onscroll = function() {makeNavSticky()};


function makeNavSticky() {

	var navbar = document.getElementById("sideNav");

	var stickyOffset = navbar.offsetTop;

	if (window.pageYOffset >= 260) {
		navbar.classList.add("sticky"); 
	} 
	else {
		navbar.classList.remove("sticky");
	}
};