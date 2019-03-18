// Замечание. В задачах 1-3 используем только локальные переменные!

// Задача 1
// Напишите функцию, которая выделяет все параграфы на странице красным цветом фона.


// function Allp() {
// 	for (let i = 1; i <= 10; i++) {
// 		let body = document.getElementsByTagName('body')[0];
// 		let p = document.createElement('p');
// 		p.innerHTML = ('Lorem ipsum dolor sit amet');
// 		p.style.backgroundColor = 'red';
// 		body.appendChild(p);
// 	};
// };
// Allp();

// Задача 2
// Напишите функцию, которая добавляет тень всем изображениям на странице.

// function Allimg() {
// 	for (let i = 1; i <= 6; i++) {
// 		let body = document.getElementsByTagName('body')[0];
// 		let img = document.createElement('img');
// 		img.setAttribute('src', [i]+'.jpg');
// 		body.appendChild(img);
// 		img.style.cssText = `
// 			width: 200px;
// 			height: 150px;
// 			margin: 20px;
// 			box-shadow: 10px 10px 37px -5px rgba(0,0,0,0.75);
// 		`;
// 	};
// };
// Allimg();

// Задача 3
// Напишите функцию, которая нумерует все абзацы страницы и добавляет номер перед текстом абзацев.

// function Allp() {
// 	for (let i = 1; i <= 10; i++) {
// 		let body = document.getElementsByTagName('body')[0];
// 		let p = document.createElement('p');
// 		p.innerHTML = ('Lorem ipsum dolor sit amet');
// 		p.prepend(i + ' ');
// 		body.appendChild(p);
// 	};
// };
// Allp();

// Задача 4
// Используя глобальную переменную напишите функцию, которая будет подсчитывать количество нажатий на кнопки. Кнопок – две, реализуйте их в HTML

// let body = document.getElementsByTagName('body')[0];

// for (var i = 1; i <= 2; i++) {
// 	let button = document.createElement('button');
// 		button.innerHTML = ('Кнопка ' + i);
// 		body.appendChild(button);
// };

// let btns = document.querySelectorAll('button');
// let div = document.createElement('div');
// 	body.appendChild(div);

// let count = 0;// глобальный счетчик
// for (var i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener('click', () => {
// 		count++;
// 		div.innerHTML = (count);
// 	});
// };


// Задачa 5
// Создайте функцию, которая получает два параметра – число и степень числа. Используя Math.Pow внутри функции, возведите число в степень и выведите с помощью alert.

// pow = (b, e) =>{
// 	p = Math.pow(b, e);
// 	alert(p);
// };
// pow(2, 10);


// Задача 6
// Создайте функцию, которая принимает один параметр – строку, которая содержит тег. При вызове функции, она подчеркивает все элементы на странице с данным тегом. Т.е. если пользователь вызвал функцию с параметром ‘p’ – то подчеркиваются абзацы.

// let body = document.getElementsByTagName('body')[0];

// for (var i = 1; i <= 10; i++) {

// 	let p = document.createElement('p');
// 	p.innerHTML = ('paragraf paragraf paragraf paragraf paragraf paragraf');
// 	body.appendChild(p);

// 	let div = document.createElement('div');
// 	div.innerHTML = ('div div div div div div div div div div div div div div');
// 	body.appendChild(div);
// };

// underlineTag = tag =>{
// 	let t = document.getElementsByTagName(tag);
// 	for (var i = 0; i < t.length; i++) {
// 		t[i].style.background = 'red';
// 	};
// };
// underlineTag('p');


// Задача 7
// Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// age = a => {
// 	(a >= 16) ? console.log('добро пожаловать') : console.log('вы еще молоды')
// };
// age(26);
// age(16);
// age(8);


// Задача 8
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// age = a => {
// 	(a >= 16) ? console.log('добро пожаловать') :
// 	(a == undefined) ? console.log('введите возраст') :
// 	console.log('вы еще молоды')
// };
// age(26);
// age(16);
// age(8);
// age();


// Задача 9
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

// length = l => {
// 	count = 0;
// 	if(l == undefined){
// 		console.log('error')
// 	}
// 	else{
// 		for (var i = 0; i < l.length; i++) {
// 			count++;
// 		};
// 		console.log(count);
// 	}
// }

// length([2, 45, ,5 ,6 , 21, 3]);
// length([2]);
// length();


// Задача 10
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.

// let u = prompt('веди число');

// user = y => {
// 	if (y >= 10){
// 		return Math.pow(y, 2);
// 	}
// 	else if(y > 7){
// 		return y - 1;
// 	}
// 	else{
// 		return 'число меньше 7';
// 	}
// };

// 	alert(user(u));

// Задание 11
// Напишите игру «Угадай число». При загрузке страницы генерируется случайное число от 0 до 10. Пользователю дается три попытки угадать число (число вводиться в input). При каждой проверке выдается подсказка: больше или меньше. При угадывании, завершении числа попыток выдается оповещение.

// Количество попыток выводится на экран.

// let body = document.getElementsByTagName('body')[0];
// let input = document.createElement('input');
// let button = document.createElement('button');
// let div = document.createElement('div');
// let p = document.createElement('p');
// let count = 3;
// 	body.appendChild(p);
// 	body.appendChild(input);
// 	body.appendChild(button);
// 	body.appendChild(div);
// 	p.innerHTML = ('угадай число от 0 до 10');
// 	button.innerHTML = ('угадай');
// 	div.innerHTML = ('осталось попыток: ' + count);

// let rand = 1 + Math.random() * (10 + 1 - 1);
//     rand = Math.floor(rand);
//     console.log(rand);

//     button.addEventListener('click', () => {
//     	count--;
//     	let user = input.value
//     	div.innerHTML = ('осталось попыток: ' + count);
//     	if (+user == +rand && count > -1){
//     		div.innerHTML = ('ТЫ УГАДАЛ');
//     	}
//     	else if (+user > +rand && count > -1){
//     		alert('твое число больше чем нужно');
//     	}
//     	else if (+rand > +user && count > -1){
//     		alert('твое число меньше чем нужно');
//     	}
//     	else if(count <= -1){
//     		input.remove();
// 			button.remove();
// 			p.remove();
//     		div.innerHTML = ('у тебя закончились попытки');
//     	}
//     });


// Задача 12
// Магазин предлагает 2 размера гамбургеров:

// маленький (17грн, 250 ккал)
// большой (25грн, 340 ккал)
// Бургер дополняется одной или несколькими начинками (обязательно одна должна быть):

// сыром (+ 4грн, + 25 ккал)
// салатом (+ 5грн, + 5 ккал)
// ветчиной (+ 10грн, + 50 ккал)
// Дополнительно (не обязательно), гамбургер можно дополнить соусами (+5грн, 0 ккал) и полить майонезом (+ 4грн, + 10 ккал).

// Напишите программу, рассчитывающею стоимость и калорийность бургера. 

// Дополнительно: используя localStorage реализуйте просчет среднего чека заказа (сумма всех заказов поделенная на их количество).

document.getElementById('burger').onchange = () =>{
	let menu = document.getElementsByClassName('menu');
	let small = document.getElementsByClassName('small')[0];
	let big = document.getElementsByClassName('big')[0];
	let cost = 0;
	let kkal = 0;

	if (small.checked) {
		big.setAttribute('disabled', '');
		small.removeAttribute('disabled', '');
	}
	else if(big.checked){
		small.setAttribute('disabled', '');
		big.removeAttribute('disabled', '');
	}

	for (var i = 0; i < menu.length; i++) {
		if (menu[i].checked) {
			cost += parseFloat(menu[i].getAttribute('data-cost'));
			kkal += parseFloat(menu[i].getAttribute('data-kkal'));

		}
	}
	document.getElementById('cost').innerHTML = cost;
	document.getElementById('kkal').innerHTML = kkal;
} 

let count = 0;
document.getElementById('button').onclick = () =>{
	let bill = {};
		bill.count = count;
		bill.cost = cost.innerText;
		bill.kkal = kkal.innerText;
		console.log(bill);
	let strBill = JSON.stringify(bill);
	localStorage.setItem('aveBill', strBill);
	count++;
}