'use strict';
console.log('Działa');
document.addEventListener('DOMContentLoaded', function(){

document.querySelector(".for-dropdown a").addEventListener("mouseover", function menuMouseover(){
	document.querySelector('.dropdown').style.display = "block";
});

document.querySelector(".for-dropdown a").addEventListener("mouseout", function menuMouseout(){
	document.querySelector('.dropdown').style.display = "none";
});


  var buttons = document.querySelectorAll('.read-more');

  function showHide(){
    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', showHide);
  }

window.addEventListener('scroll', function menuBorder(){
	document.querySelector('.nav-list').style.borderBottom = '2px solid #808080';
	})

});

