'use strict';
console.log('Działa');
document.addEventListener('DOMContentLoaded', function() {
document.querySelector(".for-dropdown a").addEventListener("mouseover", menuMouseover);
document.querySelector(".for-dropdown a").addEventListener("mouseout", menuMouseout);
function menuMouseover(){
	document.querySelector('.dropdown').style.display = "block";
}

function menuMouseout(){
	document.querySelector('.dropdown').style.display = "none";
}
});
