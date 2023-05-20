
var currentLocation = window.location.href;


var navLinks = document.querySelectorAll('nav ul li a');


for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];

  
  if (link.href === currentLocation) {
   
    link.classList.add('active');
  }
}
