// Задача 1
// Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.
// let out = document.getElementById('out');
// 	out.innerHTML = 'block';
// 	out.style.cssText = 
// 	` 
// 		padding: 100px;
// 		border: 1px solid red;
// 		display: inline-block;
// 	`;
	
// 	out.addEventListener('mousemove', event => {
// 		console.log(event);
// 		out.innerHTML = event.offsetX + ' X: ' + event.offsetY + ' Y: ';
// 	})

// Задача 2
// Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки

// let out = document.getElementById('out');
// 	out.innerHTML = 'block';
// 	out.style.cssText = 
// 	` 
// 		padding: 100px;
// 		border: 1px solid red;
// 		display: inline-block;
// 	`;

// 	out.addEventListener('dblclick', () => {
// 		if (out.classList.contains('open')) {
// 			out.classList.add('close');
// 			out.classList.remove('open');
// 			out.innerHTML = 'з0крыт0';
// 		}else if (!out.classList.contains('open')) {
// 			out.classList.remove('close');
// 			out.classList.add('open');
// 			out.innerHTML = '0ткрыт0';
// 		}
// 	});

// Задача 3
// Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. Добавление элементов выполните с помощью цикла. Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга.

// Для замедления эффекта скругления в CSS можно добавить transition.

// let out = document.getElementById('out');
// 	for (let i = 0; i < 400; i++) {
// 			div = document.createElement('div');
// 			div.style.cssText = `
// 				width: 30px;
// 				height: 30px;
// 				border: 1px solid grey;
// 				background-color: black;
// 				float: left;
// 				transition: all ease .3s;
// 			`;
// 		out.appendChild(div);
// 	}
// 	out.addEventListener('mouseover', event => {
// 		event.target.style.borderRadius = '50%';
// 	})
// 	out.addEventListener('mouseout', event => {
// 		event.target.style.borderRadius = '';
// 	})


// Задача 4
// Создайте div размерами ширина – 100%, высота 250px. Ниже добавьте 4-5 изображений с одинаковыми классами, разного размера. Добавьте событие, которое будет при клике на изображении устанавливать его фоном блока div со свойством background-size: contain.
// let body = document.getElementsByTagName('body')[0];
// let out = document.getElementById('out');
// let div = document.createElement('div');
// 	div.classList.add('contain');
// 	body.prepend(div);
// 	div.style.cssText = 
// 	` 
// 		width: 100%;
// 		height: 250px;
// 		border: 1px solid red;
// 		display: inline-block;
// 	`;
// 	for (let i = 1; i <= 6; i++) {
// 		let img = document.createElement('img');
// 		img.classList.add('contain');
// 		img.setAttribute('src', [i]+'.jpg');
// 		out.appendChild(img);
// 		img.style.cssText = `
// 			width: 200px;
// 			height: 150px;
// 			margin: 20px;
// 			box-shadow: 10px 10px 37px -5px rgba(0,0,0,0.75);
// 		`;
// 	};

// 	out.addEventListener('click', (event) => {
// 		if (event.target.getAttribute('src')) {
// 			// div.innerHTML = '<img src="' + event.target.getAttribute('src') + '">'
// 			div.style.backgroundImage = 'url(' + event.target.getAttribute('src') + ')';
// 		}
// 	});



// Задача 5
// Создайте блок размерами 50x50px. Добавьте событие клик, так, что при каждом клике на блоке он отодвигается на 100px вниз от предыдущего положения.

// let out = document.getElementById('out');
// 	out.style.cssText = 
// 	` 
// 		position: absolute;
// 		padding: 25px;
// 		border: 1px solid red;
// 		display: inline-block;
// 		transition: all ease .3s;
// 		top: 0;
// 	`;
// let top1 = 0;
// 	out.addEventListener('click', () => {
// 		top1 += 100;
// 		out.style.top = top1 + 'px';
// 	})


// Задача 6
// Реализуйте триггер переключатель следующего вида:

// Изображение переключателя
// Поведение триггера:

// При загрузке переключатель находится в первом положении
// При клике, он переходит в положение два (средняя картинка), а в консоль выводится цифра 1
// При следующем клике переключатель переходит в состояние три(нижняя картинка), а в консоль выводится цифра 2
// При следующем клике, переключатель переходит в состояние 1 (верхняя картинка), а в консоль выводится 0

// let tr = document.getElementById('trigger');
// let sw = document.getElementById('switch');
// let onOff = 0;
// let count = 0;

// 	tr.addEventListener('click', () => {
// 		count++;
// 		onOff += 70;
// 		if (onOff <= 140 && count <= 2) {
// 			sw.style.marginLeft = onOff + 'px';
// 			console.log(count);
// 		}
// 		else{
// 			count = 0;
// 			onOff = 0;
// 			sw.style.marginLeft = onOff + 'px';
// 			console.log(count);
// 		}
// 	})


// Задача 7
// Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

// Для увеличения наглядности, подключите фреймворк materialize.

// Задача 8
// Модифицируйте задачу 7. Добавьте три radiobutton. При выборе первого включается класс bordered, при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

// Задача 9
// Измените radiobuttons в задаче 8 на checkbox. При выборе checkbox включается соответствующий класс. Теперь несколько классов могут включаться одновременно.

// Задача 10
// ​Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. Вывод осуществлять с помощью alert.

// Примечание: <button>​Именно этот текствыводить</button>.​ Напомню, что получить данный текст можно с помощью this.innerHTML.

// Создайте кнопку отключающую события на предыдущей кнопке.

// let body = document.getElementsByTagName('body')[0];
// let out = document.getElementById('out');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// 	out.innerHTML = 'выводS';

// 	btn1.addEventListener('click', sayHi);
// 	btn2.addEventListener('click', () => {
// 		btn1.removeEventListener('click', sayHi);
// 	});

// let count = 0;
// function sayHi() {
//   out.innerHTML = this.innerHTML;
//   out.innerHTML += ' ' + count;
//   count++;
// }



// Задача 11
// ​
// Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.
// let body = document.getElementsByTagName('body')[0];
// let div = document.createElement('div');
// let p = document.createElement('p');
// let button = document.createElement('button');
// let a = document.createElement('a');
// 	div.innerHTML = 'div1';
// 	p.innerHTML = 'paragraf1';
// 	button.innerHTML = 'button1';
// 	a.innerHTML = 'link1';
// 	body.appendChild(div);
// 	body.appendChild(p);
// 	body.appendChild(button);
// 	body.appendChild(a);

// 	this.addEventListener('click', element);

// function element(event) {
// 	alert(event.target.localName);
// }

// Задача 12
// Создайте три div идущих подряд. Пусть они вложены в общего родителя (другой блок div). С помощью relatedTarget выведите в элемент запись о переходах мыши между этими блоками.
 
// let body = document.getElementsByTagName('body')[0];
// let out = document.getElementById('out');
// 	out.style.cssText = 
// 	` 	padding: 20px;
// 		border: 1px solid red;
// 		display: inline-block;
// 	`;
// 	for (let i = 0; i < 3; i++) {
// 	let div = document.createElement('div');
// 		div.classList.add('divs')
// 		div.style.cssText = 
// 		` 	width: 50px;
// 			height: 50px;
// 			border: 1px solid green;
// 			display: inline-block;
// 			margin: 10px;
// 			text-align: center;
// 			line-height: 48px
// 		`;
// 		out.appendChild(div);
// 	}

// let divs = document.getElementsByClassName('divs');
// 	for (var i = 0; i < divs.length; i++) {
// 		divs[i].addEventListener('mouseout', relT);
// 	}
// function relT(event) {
// 	this.innerHTML = (event.relatedTarget.nodeName);
// 		console.log(event.relatedTarget.nodeName);	
// }

// Задача 13
// ​Используя event which \ button напишите программу, которая будет оповещать пользователя о том, какой кнопкой мыши он кликнул на блоке.

// let body = document.getElementsByTagName('body')[0];
// let out = document.getElementById('out');
// let button = document.createElement('button');
// 	button.innerHTML = 'button';
// 	body.appendChild(button);
// window.addEventListener('contextmenu', event => {
// 	event.preventDefault();
// });

// button.addEventListener('mousedown', (event) => {
// 	event.preventDefault();
// 	(event.which == 5) ? out.innerHTML = 'пятая кнопка' :	
// 	(event.which == 4) ? out.innerHTML = 'четвертая кнопка' :	
// 	(event.which == 3) ? out.innerHTML = 'правая кнопка' :	
// 	(event.which == 2) ? out.innerHTML = 'колесико кнопка' :
// 	(event.which == 1) ? out.innerHTML = 'левая кнопка' :
// 	console.log(event);
// });

// СОБЫТИЕ ONCLICK
// Задача 14
// Изменить размер изображения по клику мыши. 

// let body = document.getElementsByTagName('body')[0];
// let img = document.createElement('img');
// let size = 1;
// 	img.setAttribute('src', '1.jpg');
// 	body.appendChild(img);

// 	img.addEventListener('click', event => {
// 		size += 0.2;
// 		img.style.transform = 'scale(' + size + ')';
// 	})
// 	img.addEventListener('mousemove', event => {
// 		size -= 0.01;
// 		img.style.transform = 'scale(' + size + ')';
// 	})

// Задание 2. Изменить прозрачность изображения по клику мыши на 10%. Последующие клики увеличивают прозрачность с шагом 10%.
// let body = document.getElementsByTagName('body')[0];
// let img = document.createElement('img');
// let inviz = 1;
// 	img.setAttribute('src', '1.jpg');
// 	body.appendChild(img);

// 	img.addEventListener('click', () => {
// 		inviz -= 0.2;
// 		img.style.opacity = inviz;
// 	})
// 	img.addEventListener('mousemove', () => {
// 		inviz += 0.01;
// 		img.style.opacity = inviz;
// 	})
// Задача 15
// Выполните задачу 14 с помощью onmousemove. Шаг изменения 0.2%.

// let body = document.getElementsByTagName('body')[0];
// let img = document.createElement('img');
// let inviz = .1;
// 	img.style.opacity = inviz;
// 	img.setAttribute('src', '1.jpg');
// 	body.appendChild(img);

// 	img.onmousemove =  () => {
// 		inviz += 0.02;
// 		img.style.opacity = inviz;
// 	}

// ONMOUSEOVER & ONMOUSEOUT
// Задача 16
// Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.
// let mo = document.getElementById('ONMOUSEOVER');
// let up = document.getElementsByClassName('up')[0];
// 	mo.addEventListener('mouseover', () => {
// 		up.style.zIndex = '-1';
// 	})
// 	mo.addEventListener('mouseout', () => {
// 		up.style.zIndex = '1';
// 	})
// Задача 17
// Используя код из первой задачи, сделайте увеличение изображения при наведении мыши на 40%. После выхода мыши за пределы изображения – оно восстанавливает свои размеры.
// let mo = document.getElementById('ONMOUSEOVER');
// let up = document.getElementsByClassName('up')[0];
// let dn = document.getElementsByClassName('down')[0];
// 	mo.addEventListener('mouseover', () => {
// 		up.style.zIndex = '-1';
// 		mo.style.width = '420px';
// 		mo.style.height = '280px';
// 	})
// 	mo.addEventListener('mouseout', () => {
// 		up.style.zIndex = '1';
// 		mo.style.width = '300px';
// 		mo.style.height = '200px';
// 	})


// Задача 18
// Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.

// let body = document.getElementsByTagName('body')[0];
// let ovl	= document.getElementById('overlay');
// let imgs = document.getElementById('imgs');
// let img = document.getElementsByClassName('img');

// 	imgs.onclick = (event) => {
// 		if(event.target.getAttribute('src')){
// 			for (let i = 0; i < img.length; i++) {
// 				img[i].classList.remove('active');
// 				img[i].style.width = '300px';
// 				img[i].style.height = '200px';		
// 				console.log(img[i]);				
// 			}		
// 			event.target.classList.add('active');
// 			event.target.style.width = '70vw';
// 			event.target.style.height = 'auto';
// 			body.style.backgroundColor = 'rgba(150,150,150, .5)';
// 		}
// 		else if(!event.target.getAttribute('src')){
// 			for (let i = 0; i < img.length; i++) {
// 				img[i].classList.remove('active');
// 				img[i].style.width = '300px';
// 				img[i].style.height = '200px';		
// 				console.log(img[i]);
// 			}
// 			body.style.backgroundColor = '';				
// 		}		
// 		console.log(event.target);
// 	}