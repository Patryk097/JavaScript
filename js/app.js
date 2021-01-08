'use strict';
console.log('Działa');
document.addEventListener('DOMContentLoaded', function(){

//Zadanie 1
document.querySelector(".for-dropdown a").addEventListener("mouseover", function menuMouseover(){
	document.querySelector('.dropdown').style.display = "block";
});

document.querySelector(".for-dropdown a").addEventListener("mouseout", function menuMouseout(){
	document.querySelector('.dropdown').style.display = "none";
});

//Zadanie 2
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

//Zadanie 3
window.addEventListener('scroll', function menuBorder(){
	document.querySelector('.nav-list').style.borderBottom = '2px solid #808080';
	})

//Zadanie 4
document.querySelector('.btn-backtotop').addEventListener('click', function backToTop(){
	window.scroll(0,0);
	})

//Zadanie 5
var dots = document.querySelectorAll('.dot');
var items = document.querySelectorAll('.org');

for (var i = 0; i < dots.length; i++){(function(numer){
		dots[i].addEventListener('click', function(){
				document.querySelector('.dot.active').classList.remove('active');
				this.classList.add('active');
				document.querySelector('.org.visible').classList.remove('visible');
				items[numer].classList.add('visible');
				})
		})(i);
}

//Zadanie 6
function addTask(){
  var inputText = document.querySelector('.form-control');
  var tasksLi = document.querySelector('.list');
  var newTask = document.createElement('li');
  var newTaskContent = document.createElement('div');
  var deleteButton = document.createElement('button');
  var inputV = inputText.value;
  var newTask = document.createElement('li');
  var newTaskContent = document.createElement('div');
  var deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-primary');
  deleteButton.addEventListener('click', function(){
    this.parentElement.remove();
  })

  newTaskContent.innerText=inputV;
  deleteButton.innerHTML="USUŃ";

  newTask.appendChild(newTaskContent);
  newTask.appendChild(deleteButton);
  tasksLi.appendChild(newTask);
  inputText.value="";

}
var addTaskButton = document.querySelector('.add-task-btn');
addTaskButton.addEventListener('click', addTask);



});

