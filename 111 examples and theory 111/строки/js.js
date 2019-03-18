// Задание 1
// Вычитайте строку из input. Высчитайте ее длину. Выведите результат.

// let body = document.getElementsByTagName('body')[0];
// let input = document.createElement('input');
// let button = document.createElement('button');
// 	button.innerHTML = ('узнать длину')
// 	body.appendChild(input);
// 	body.appendChild(button);

// button.addEventListener('click', () => {
// 	alert('длина строки - ' + input.value.length);
// });

// Задание 2
// Создайте массив, который содержит имена изображений в определенной папке. Запустите цикл по массиву и выведите все изображения на страницу. Подсказка, для вывода изображения используйте тег <img src=”xxxx”> где xxx – путь к файлу.

// 	let body = document.getElementsByTagName('body')[0];
// 	let mas = [1, 2, 3, 4, 5, 6]; // массив с именами

// for (let i = 1; i <= mas.length; i++) { 
// 	let img = document.createElement('img');
// 	img.setAttribute('src', [i]+'.jpg');
// 	body.appendChild(img);
// 	img.style.cssText = `
// 		width: 200px;
// 		height: 150px;
// 		margin: 20px;
// 		box-shadow: 10px 10px 37px -5px rgba(0,0,0,0.75);
// 	`;
// };


// Задание 3
// Пользователь вводит URL адрес в input в формате http или https. Выведите только имя домена без префиксов http://, https://.

// let body = document.getElementsByTagName('body')[0];
// let input = document.createElement('input');
// let button = document.createElement('button');
// 	button.innerHTML = ('сайт')
// 	body.appendChild(input);
// 	body.appendChild(button);

// 	button.addEventListener('click', () => {
// 		let user = input.value
// 		let http = 'http://';
// 		let https = 'https://';
// 		let site = '';

// 		(user.match(http)) ? site = user.substring(7) :
// 		(user.match(https)) ? site = user.substring(8) :
// 		site = 'введите сайт';

// 		alert(site);
// 	});



// Задание 4
// Пользователь может ввести адрес сайта в формате http://site.ua, https://site.ua, http://www.site.ua, https://www.site.ua или site.ua. Ваша задача используя поиск в подстроке вывести site в виде: site.ua.

// let body = document.getElementsByTagName('body')[0];
// let input = document.createElement('input');
// let button = document.createElement('button');
// 	button.innerHTML = ('сайт')
// 	body.appendChild(input);
// 	body.appendChild(button);

// 	button.addEventListener('click', () => {
// 		let user = input.value
// 		let http = 'http://';
// 		let https = 'https://';
// 		let httpWWW = 'http://www.';
// 		let httpsWWW = 'https://www.';
// 		let site = '';
// 		(user.match(httpsWWW)) ? site = user.substring(12) :
// 		(user.match(httpWWW)) ? site = user.substring(11) :
// 		(user.match(https)) ? site = user.substring(8) :
// 		(user.match(http)) ? site = user.substring(7) :
// 		site = 'введите сайт';

// 		alert(site);
// 	});


// Задание 5
// Пользователь заполняет форму состоящую из фамилии, имени пароля и email. Используя приведенные методы выполните обработку формы состоящую из удаления пробелов до и после введённых слов, пароль не должен быть меньше 5 символов, email должен содержать один символ @ и не содержать пробелов. Если форма заполнена корректно, возвращать true.

// let firstName = document.getElementsByClassName('firstName')[0];
// let lastName = document.getElementsByClassName('lastName')[0];
// let password = document.getElementsByClassName('password')[0];
// let email = document.getElementsByClassName('email')[0];
// let button = document.getElementsByTagName('button')[0];
	
// 	button.addEventListener('click', () => {
// 		firstName1 = firstName.value.split(' ').join('');
// 		lastName1 = lastName.value.split(' ').join('');
// 		password1 = password.value.split(' ').join('');
// 		email1 = email.value.split(' ').join('');
// 		if (password1.length > 5 && email1.match('@')) {
// 			alert('true');
// 		}
// 		else{
// 			alert('false');
// 		}
// 	});
	
// Задание 6
// Пользователь вводит символ, выведите его код.

// document.addEventListener('keydown', (event) => {
// 	console.log('keyCode = ' + event.keyCode);
// });


// Задание 7
// Пользователь вводит код, выведите символ соответствующий этому коду в Unicode.

// document.addEventListener('keypress', function (event) {
//     // Get the proper character code
//     let charCode = (typeof event.which === 'number') ? event.which : event.keyCode;

//     console.log('charCode = ' + charCode);
//     console.log('fromCharCode returns ' + String.fromCharCode(charCode));
// });