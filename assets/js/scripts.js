//STICKY NAVBAR
window.onscroll = function() {makeNavSticky()};


function makeNavSticky() {

	var navbar = document.getElementById("sideNav");
	var mainContent = document.getElementById("contentContainer");

	var stickyOffset = navbar.offsetTop;

	if (window.pageYOffset >= 260) {
		navbar.classList.add("sticky");
		mainContent.classList.add("whenSticky"); 
	} 
	else {
		navbar.classList.remove("sticky");
		mainContent.classList.remove("whenSticky"); 
	}
};