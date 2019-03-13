window.onload = function(){
	for (var i=0; i<9; i++) {
		document.getElementById('game').innerHTML+='<div class="block"></div>';
	}

	var step = 0;

	document.getElementById('game').onclick = function(event){
		console.log(event);
		if (event.target.className == 'block'){
			if (step%2==0) {
				event.target.innerHTML = 'x';
			}
			else {
				event.target.innerHTML = '0';
			}
			step++;
			checkWinner();
		}
	}


	function timeOutCross() {
		setTimeout("alert('Победили крестики')", 50);
	};
	function timeOutZero() {
		setTimeout("alert('Победили нолики')", 50);
	};
	function checkWinner(){
		var a = document.getElementsByClassName('block');
		console.log(a);
		if (a[0].innerHTML=='x' && a[1].innerHTML=='x' && a[2].innerHTML=='x') timeOutCross();
		if (a[3].innerHTML=='x' && a[4].innerHTML=='x' && a[5].innerHTML=='x') timeOutCross();
		if (a[6].innerHTML=='x' && a[7].innerHTML=='x' && a[8].innerHTML=='x') timeOutCross();
		if (a[0].innerHTML=='x' && a[3].innerHTML=='x' && a[6].innerHTML=='x') timeOutCross();
		if (a[1].innerHTML=='x' && a[4].innerHTML=='x' && a[7].innerHTML=='x') timeOutCross();
		if (a[2].innerHTML=='x' && a[5].innerHTML=='x' && a[8].innerHTML=='x') timeOutCross();
		if (a[0].innerHTML=='x' && a[4].innerHTML=='x' && a[8].innerHTML=='x') timeOutCross();
		if (a[2].innerHTML=='x' && a[4].innerHTML=='x' && a[6].innerHTML=='x') timeOutCross();
		//нолики
		if (a[0].innerHTML=='0' && a[1].innerHTML=='0' && a[2].innerHTML=='0') timeOutZero();
		if (a[3].innerHTML=='0' && a[4].innerHTML=='0' && a[5].innerHTML=='0') timeOutZero();
		if (a[6].innerHTML=='0' && a[7].innerHTML=='0' && a[8].innerHTML=='0') timeOutZero();
		if (a[0].innerHTML=='0' && a[3].innerHTML=='0' && a[6].innerHTML=='0') timeOutZero();
		if (a[1].innerHTML=='0' && a[4].innerHTML=='0' && a[7].innerHTML=='0') timeOutZero();
		if (a[2].innerHTML=='0' && a[5].innerHTML=='0' && a[8].innerHTML=='0') timeOutZero();
		if (a[0].innerHTML=='0' && a[4].innerHTML=='0' && a[8].innerHTML=='0') timeOutZero();
		if (a[2].innerHTML=='0' && a[4].innerHTML=='0' && a[6].innerHTML=='0') timeOutZero();
	}

}

