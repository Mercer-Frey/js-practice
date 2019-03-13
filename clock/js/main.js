var sec = 6;
var min = 0;
var hour = 0;
var speed = 1000;
// var range = document.querySelector('#r1');
// var input = document.querySelector('#input');
// 	range.addEventListener('input', function (){
// 		console.log(this.value);
// 		speed = this.value;
// 		console.log(speed);
		
// 	});

	setInterval(fSec, speed);
function fSec(){
	document.querySelector('#sec').style.transform = 'rotate('+sec+'deg)';
	document.querySelector('#min').style.transform = 'rotate('+min+'deg)';
	document.querySelector('#hour').style.transform = 'rotate('+hour+'deg)';
	if (sec+6 == 360) {
		sec = 0;
		min = min + 6;
		if(min+30 == 360){
			min = 0;
			hour = hour + 30;
		}
	}
	sec = sec +6;
	input.value = `${sec/6} : ${min/6} : ${hour/30}`;
}