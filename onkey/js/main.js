window.onload = function () {
	var str = '';
	document.getElementById('test1').onkeypress = function(event){
		//console.log(event);
		str = str + event.key;
		console.log(str);
		//console.log(String.fromCharCode());
		this.value += String.fromCharCode(getRandomInt(65, 122));
		return false;
		//97-122  65-90  65-122
	
	}
	
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}
	
	//onkeypress
	var block = document.getElementById('test2');
	var left = 0;
	var top1 = 0;
	
	document.onkeydown = function (event){
		console.log(event);
		if (event.key == 'ArrowRight'){
			block.style.left = left +'px';
			left++;
		}
	
		if (event.key == 'ArrowDown'){
			block.style.top = top1 +'px';
			top1++;
		}
	}
	document.onkeyup = function(event){
		console.log('отпустили клавишу');
	}



/// ex2

	document.querySelector('#menu').onmouseover = menuShow;
	document.querySelector('#menu').onmouseout = menuHide;
	document.onkeydown = function (event) {
		console.log(event);
		if (event.code == 'KeyM') {
			menuShow();
		}else if(event.code == 'Escape'){
			menuHide();
		}
	}
	function menuShow() {
		document.querySelector('#menu').style.left = 0;
	}
	function menuHide() {
		document.querySelector('#menu').style.left = '-230px';
	}
}