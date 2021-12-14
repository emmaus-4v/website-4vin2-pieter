// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var menujs = document.getElementById("menujs");

// Get the offset position of the navbar
var sticky = menujs.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    menujs.classList.add("sticky");
  } else {
    menujs.classList.remove("sticky");
  }
}