
var banner = document.getElementById('banner');
var closebutton = document.getElementById('closeButton');

var clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.wp.pl'); //dhtml.getVar() gets clickTAG variable from Adform, if it is not defined (e.g. banner is being tested locally) it will fallback to example.com
var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank'); //same as above - landingPageTarget from Adform or falls back to _blank
	
banner.onclick = function() {
	window.open(clickTAGvalue,landingpagetarget);
}

document.addEventListener('touchstart', function(event) {
 deltax = 0;
 deltay = 0;
 x = event.touches[0].clientX;
 y = event.touches[0].clientY;
 l = event.touches.length;
}, false);

document.addEventListener('touchmove', function(event) {
  event.preventDefault();
  deltax = x - event.touches[0].clientX;
  deltay = y - event.touches[0].clientY;
  parent.window.scrollBy(0,deltay);  
}, false);
