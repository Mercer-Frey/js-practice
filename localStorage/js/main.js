var body = document.getElementsByTagName('body')[0];
var green = document.getElementById("green");
var red = document.getElementById("red");

window.onload = function() {
	if (localStorage.getItem('bgcolor') !==null){
		var color = localStorage.getItem('bgcolor');
		body.style.background = color;
	}
	green.onclick = function () {
		body.style.background = 'green';
		localStorage.setItem('bgcolor', 'green');
	}
	red.onclick = function () {
		body.style.background = 'red';
		localStorage.setItem('bgcolor', 'red');
	}
}
console.log(localStorage);



var toDoList = [];
if (localStorage.getItem('todo') != undefined) {
	toDoList = JSON.parse(localStorage.getItem('todo')); // если в localStorage есть todo методом parse преобразовует в массив
	out();
}

document.getElementById('add').onclick = function () {
	var d = document.getElementById('input').value;
	var temp = {};
		temp.todo = d;
		temp.check = false;
	var i = toDoList.length;
		toDoList[i] = temp;
	console.log(toDoList);
	out();
	localStorage.setItem('todo', JSON.stringify(toDoList)); //переобразовует массив toDoList в JSON строчный формат методом stringify
}
function out() {
	var out = '';
	for (var key in toDoList) {
		if(toDoList[key].check == true){
			out += '<input type="checkbox" checked>';
		}else{
			out += '<input type="checkbox">';
		}
		out += toDoList[key].todo + "<br>";
	}
	document.getElementById('out').innerHTML = out; 
}
