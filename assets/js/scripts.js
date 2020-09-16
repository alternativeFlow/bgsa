//STICKY NAVBAR

window.onscroll = function() {makeStickyNav()};

function makeStickyNav() {
    var sideNav = document.getElementById("sideNav");
    var horizontalNav = document.getElementById("horizontalNavbar");
    var mainContent = document.getElementById("mainContent");

    var yOffset = sideNav.offsetTop - 40;

    if (window.pageYOffset >= yOffset) {
        console.log(sideNav.offsetTop);
        sideNav.classList.add("position-fixed");
        sideNav.classList.add("sticky");
        mainContent.classList.add("col-md-offset-3");
    }
    if (window.pageYOffset <= (horizontalNav.offsetTop+50))
 {
        sideNav.classList.remove("position-fixed");
        sideNav.classList.remove("sticky");
        mainContent.classList.remove("col-md-offset-3");
    }

}