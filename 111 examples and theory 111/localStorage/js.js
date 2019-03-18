// Задача 1
// Напишите программу, которая проверяет поддержку localStorage в браузере. Результат проверки выведите в консоль.

// storage = () =>{
// 	if(window.localStorage!==undefined){
// 	    alert('true');
// 	}else{
// 	    alert('false');
// 	}
// }
// storage();


// Задача 2
// Создайте HTML страницу и два варианта оформления, которые размещены в разных css файлах. На странице сделайте переключатель тем оформления. При выборе оформления – происходит подключение соответствующего файла CSS. Запишите в localStorage выбранную тему оформления. При обновлении страницы загружайте ранее выбранную тему.

// let body = document.getElementsByTagName('body')[0];
// let head = document.getElementsByTagName('head')[0];
// let button = document.createElement('button');
// let link = document.createElement('link');
// 	link.setAttribute('rel', 'stylesheet');
// 	button.innerHTML = 'тема';
// 	body.appendChild(button);
// 	head.appendChild(link);

// 	button.addEventListener('click', () => {
// 		button.classList.toggle('night');
// 		if(button.classList.contains('night')){
// 			link.setAttribute('href', '2.css');
// 			localStorage.setItem('themes', 'night');
// 		}
// 		else{
// 			link.setAttribute('href', '1.css');
// 			localStorage.setItem('themes', 'day');
// 		}
// 	});

// 	window.addEventListener('load', () => {
// 		if(localStorage.getItem('themes') == 'night'){
// 			link.setAttribute('href', '2.css');
// 		}
// 		else if(localStorage.getItem('themes') == 'day'){
// 			link.setAttribute('href', '1.css');
// 		};
// 	});


// Задача 3
// Создайте массив, сохраните его в localStorage. Считайте массив из localStorage, выведите его на экран.
// let out = document.getElementById('out');

// let mas = ['sdg', 'sdg', 'ssedfgdg', 'sdgf', 'sdgf', 'wsdg', 1273, 2435, 23, 2, 2345 ,245, 34, 5, 3, 4];
	
// 	localStorage.setItem('randomMas', JSON.stringify(mas));

// let locMas = JSON.parse(localStorage.getItem('randomMas'));

// 	out.innerHTML = locMas.join(' ');

// Задача 4
// Создайте окно, которое всплывает через 4 секунды после загрузки страницы. В окне – опция «Согласен». Если пользователь выбирает данную опцию и закрывает окно – то при последующих обновлениях окно не показывается. Если пользователь не выбрал опцию «Согласен», то повторяйте вывод окна после загрузки.

// let modal = document.getElementsByClassName('modal')[0];
// let cancel = document.getElementsByClassName('cancel')[0];
// let yes = document.getElementsByClassName('yes')[0];

// 	window.addEventListener('load', () => {
// 		if (localStorage.getItem('modal') == undefined) {
// 			setTimeout(function () {
// 				modal.style.display = 'block';
// 			}, 1000);
// 		}
// 		else if(localStorage.getItem('modal') == 'yes'){
// 		}
// 	});
// 	cancel.addEventListener('click', () => {
// 		modal.style.display = 'none';
// 	});

// 	yes.addEventListener('click', () => {
// 		modal.style.display = 'none';
// 		localStorage.setItem('modal', 'yes');
// 	});


// Задача 5
// Напишите скрипт, который выводит все содержимое localStorage.
// let out = document.getElementById('out');

// for ( let i = 0, len = localStorage.length; i < len; ++i ) {
//   out.innerHTML += ('номер ' + (i+1) + ' => ' + localStorage.getItem(localStorage.key(i)) + '<br>');
//   console.log(len);
// }