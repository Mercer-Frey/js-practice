// Задача 1
// Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
// document.getElementById('btn').onclick = function (){
// 	a = document.getElementById('inp1').value;
// 	b = document.getElementById('inp2').value;
// 	a = parseInt(a);
// 	b = parseInt(b);
// 	(a>b) ? console.log(a) : console.log(b);
// };


// Задача 2
// Найти максимальное из двух чисел. Учтите вариант равенства чисел

// document.getElementById('btn').onclick = function (){
// 	a = document.getElementById('inp1').value;
// 	b = document.getElementById('inp2').value;
// 	a = parseInt(a);
// 	b = parseInt(b);
// 	(a > b) ? console.log(a) : 
// 	(a == b) ? console.log('числа равны') : console.log(b);
// };


// Задача 3
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
// let numApp = prompt('Номер квартиры', 1);

// let message = (numApp < 20) ? 'квартира в первом подьезде' :
//   (numApp < 48) ? 'квартира во втором подьезде' :
//   (numApp < 90) ? 'квартира в третьем подьезде' :
//   'такой квартиры нет';
// alert( message );


// Задача 4
// Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа»
	// Данные для задачи:
// Логин  // ivan	// alex  // petr
// Пароль // 334455 // 777   // b5678

// document.getElementById('btn').onclick = function(){
// 	let login = document.getElementById('inp1').value;
// 	let password = document.getElementById('inp2').value;
// 	(login == 'ivan' && password == '334455') ?	alert('Welcome') :
// 	(login == 'alex' && password == '777')    ? alert('Welcome') :
// 	(login == 'petr' && password == 'b5678')  ? alert('Welcome') :
// 		alert('Incorrect login or pass');
// }


// Задача 5
// Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать», если нет – «вход воспрещен».

// let year = prompt('Введи свой год рождения', 2019);
// let age = 2019 - year;
// let message = (age >= 16) ? alert('твой возраст ' + age + ' добро пожаловать') :
// 			  (age <= 16 && age>0) ? alert('твой возраст ' + age + ' вход воспрещен') :
// 			  	  					 alert('некорректно задан год рождения');


// Задача 6
// Создайте программу, которая выводит надбавку за стаж. Пользователь вводит стаж работы, а программа пишет ему надбавку.
// Стаж от  	0		3 лет	10 лет	20 лет
// Стаж до  	3 лет	10 лет	20 лет	выше
// Надбавка 	0%		10%		20%		25%
// Учтите вариант ошибки – пользователь вводит отрицательное число.

// let stage = prompt('Введи свой стаж работы в годах', 5);
// 	stage = parseInt(stage);
// 	(stage >= 0 && stage < 3) 	? alert('0%')	:
// 	(stage >= 3 && stage < 10) 	? alert('10%')	:
// 	(stage >= 10 && stage < 20) ? alert('20%')	:
// 	(stage >= 20 && stage < 80) ? alert('25%')	:
// 								  alert('Error');
