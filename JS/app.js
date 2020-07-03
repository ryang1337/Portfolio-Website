window.onload = function(){
	document.body.className += "loaded";
}

var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', throttle(navbarVis, 100));

window.setInterval(navbarTop, 100);

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function navbarVis(){
	var currScrollPos = window.pageYOffset;
	var nb = document.getElementById("navbar");
	if (prevScrollPos > currScrollPos) {
		nb.classList.add("notNavTop");
    	nb.style.top = "0";
	} else {
    	nb.style.top = "-120px";
	}
	prevScrollPos = currScrollPos;
}

function navbarTop(){
	var currScrollPos = window.pageYOffset;
	var nb = document.getElementById("navbar");
	if(currScrollPos == 0){
		nb.classList.remove("notNavTop");
	}else{
		nb.classList.add("notNavTop");
	}
	prevScrollPos = currScrollPos;
}