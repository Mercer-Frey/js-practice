// прямоугольник

var block = document.getElementById('one');
//клик мышью
// block.onclick = function (){
// 	this.style.background = 'green';
// 	// this.onclick = null;
// }
//двойной клик
block.ondblclick = function (){
	this.style.background = 'red';
}
//клик правой кнопкой мыши
block.oncontextmenu = function (){
	this.style.background = 'black';
	return false;
}
//мышь входит на элемент
block.onmouseenter = function (){
	console.log('in!!!');
	this.style.background = 'gold';
}
//мышь уходит с элемента
block.onmouseleave = function (){
	this.style.background = 'orange';
}
//движение мышью 
var a=0;
block.onmousemove = function(){
	a += 10;
	this.style.width = 100 + a+'px';
}
//нажимаем и держим кнопку мыши(любую)
block.onmousedown = function(event){
	this.style.background = 'cyan';
	console.log('button:' +event.button);
	console.log('which:' +event.which);
}
block.onmouseup = function (){
	this.style.background = 'pink';
}


// кот на мышке
document.onmousemove = function (){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-48.png" id="cat">');
	var cat = document.getElementById('cat');
	cat.style.position = 'fixed';
	cat.style.transition = 'all .2s';

	document.onmousemove = function(event){
		cat.style.left = event.clientX +20+'px';
		cat.style.top = event.clientY +20+'px';
	}

}


// фото
document.getElementById('myslide').onmousemove = function (event){
	var x = event.offsetX;//относительно родителя!
	console.log(x);
	document.getElementById('foto2').style.width = x + 'px';
}

// document.getElementById('myslide').onmouseleave = function(event){
// 	document.getElementById('foto2').style.width = '375px';
// }

