// Задание 1. Создайте ассоциативный массив содержащий описание человека. Задайте поля: имя, возраст, пол, индивидуальный номер. Заполните массив. Выведите его в консоли.
// let person = {
// 	'name' 		: 'bob',
// 	'age' 		: '25',
// 	'gender' 	: 'male',
// 	'number'	: function () {
// 		return Math.floor(1 + Math.random() * (100 + 1 - 1));

// 	}
// };

// 	console.log(person);
// 	console.log(person.number());

// Задание 2. Создайте ассоциативный массив содержащий описание человека. Задайте поля: имя, возраст, пол, индивидуальный номер. Заполните массив. Выведите его в консоли.

// Добавьте в массив метод, который будет рассчитывать год рождения человека исходя из его возраста и возвращать его.
// let person = {
// 	'name' 		: 'bob',
// 	'age' 		: '26',
// 	'gender' 	: 'male',
// 	'number'	: function () {
// 		return Math.floor(1 + Math.random() * (100 + 1 - 1));
// 	},
// 	"year" : function (){
// 		return 2019 - this.age;
// 	},
// };

// 	console.log(person);
// 	console.log(person.number());
// 	console.log(person.year());

// Задание 3. Создайте ассоциативный массив свойство mas которое содержит массив чисел (любого количества), добавьте метод, который выводит сумму чисел содержащихся в mas.

// 	mas = [5, 6, 34, 12, 45];	
// let m = {
// 	"mas" : [5, 6, 34, 12, 45],
// 	"sum" : function (){
// 		let sum = 0;
// 		for (let i = 0; i < this.mas.length; i++){
// 			sum = sum + this.mas[i];
// 		}
// 		return sum;
// 	}
// }
// console.log(m.sum());


// Задание 4. Создайте массив, ключами которого служат артикулы товара (любое пятизначное число), а значениями – ассоциативный массив, который содержит название товара, стоимость, вес единицы товара, ссылку на изображение, отметку о доступности товара на складе.

// Выведите массив в консоль. Выведите на страницу HTML описание первого товара.

// let goods = {
// 	"28292" : {
// 		"name" : "Банан",
// 		"cost" : 30,
// 		"img" : "https://cdn2.iconfinder.com/data/icons/jetflat-fruits/90/002_014_banana_banan_plant_herb_fruit_food-128.png",
// 		"sklad" : "да"
// 	},
// 	"23729" : {
// 		"name" : "Помидор",
// 		"cost" : 40,
// 		"img" : "https://cdn0.iconfinder.com/data/icons/nature-life-in-color/128/tomato-color-128.png",
// 		"sklad" : "нет"
// 	},
// 	"11223" : {
// 		"name" : "Клубника",
// 		"cost" : 60,
// 		"img" : "https://cdn3.iconfinder.com/data/icons/fruits-and-vegetables-13/32/strawberry-fruit-berry-128.png",
// 		"sklad" : "да"
// 	}
// };

// console.log(goods);
// let good = '';
// for (let key in goods) {
// 	good+='Название: '+goods[key].name + '<br>';
// 	good+='Цена: '+goods[key].cost + '<br>';
// 	good+='Наличие: '+goods[key].sklad + '<br>';
// 	// <img src="">
// 	good+='<img src="'+goods[key].img+'">';
// 	document.getElementById('out').style.cssText = `
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 	`
// };
// document.getElementById('out').innerHTML = good;



// Задание 5. Дан ассоциативный массив. Выведите его на страницу html в формате ключ — значение. Каждый элемент с новой строки.

// 	let day = {
// 	"d1" : "Понедельник",
// 	"d2" : "Вторник",
// 	"d3" : "Среда",
// 	"d4" : "Четверг"
//         };	

// let days = '';
// 	for (let key in day) {
// 		days += key + ' : ' + day[key] + '<br>';
// 	}

// console.log(Object.keys(day));
// document.getElementById('out').innerHTML = days;



// Задание 6. Дан ассоциативный массив. Выведите его на страницу html в формате ключ *** значение. Каждый элемент с новой строки.

// let arr = {
// 	"k1" : "17w4",
// 	"k2" : "1sfsg7",
// 	"k3" : "17nd",
// 	"k16" : "1237",
// 	"k14" : "1w37",
// 	"3k1" : "1wrw7"
//        };

// let arrs = '';
// 	for (let key in arr) {
// 		arrs += key + ' *** ' + arr[key] + '<br>';
// 	}
// console.log(Object.keys(arr));
// document.getElementById('out').innerHTML = arrs;


// Задание 7. Дан ассоциативный массив. Выведите его в консоль. Преобразуйте строку и сохраните в LocalStorage под именем mass. Считайте из LocalStorage запись mass. Выведите в консоль. Преобразуйте в массив и повторите вывод в консоль.

// let arr = {
// 	"k1" : "17w4",
// 	"k2" : "1sfsg7",
// 	"k3" : "17nd",
// 	"k16" : "1237",
// 	"k14" : "1w37",
// 	"3k1" : "1wrw7"
// };

// 	console.log(arr);

// 	localStorage.setItem('mass', JSON.stringify(arr));

// 	newArr = JSON.parse(localStorage.getItem('mass'));

// 	console.log(newArr);


// Задание 8. Дан массив товаров, выведите товары на страницу цены которых больше 20

// let goods = {
// 	"dd" : {
// 		"name": "Яблоки",
// 		"cost": 13
// 	},
// 	"dc" : {
// 		"name": "Груши",
// 		"cost": 23
// 	},
// 	"cd" : {
// 		"name": "Абрикосы",
// 		"cost": 33
// 	},
// 	"dee" : {
// 		"name": "Сливы",
// 		"cost": 43
// 	},
// 	"dd2" : {
// 		"name": "Вишни",
// 		"cost": 19
// 	},
// };

// let good = '';
// 	for(let key in goods){
// 		if(+goods[key].cost > 20){
// 			good += 'name: ' + goods[key].name + '<br>';
// 			good += 'cost: ' + goods[key].cost + '<br>';
// 		}
// 	}
// document.getElementById('out').innerHTML = good;




// Задание 9. Дан массив товаров, выведите товары на страницу HTML, цены которых лежат в диапазоне от 220 до 300 и количество (amount) больше 200

// let goods = {
// 	"apple" : {
// 		"name": "Яблоки",
// 		"cost": 23,
// 		"amount":300
// 	},
// 	"pear" : {
// 		"name": "Груши",
// 		"cost": 34,
// 		"amount":100
// 	},
// 	"apricot" : {
// 		"name": "Абрикосы",
// 		"cost": 23,
// 		"amount":170
// 	},
// 	"plum" : {
// 		"name": "Сливы",
// 		"cost": 21,
// 		"amount":250
// 	},
// 	"cherry" : {
// 		"name": "Вишни",
// 		"cost": 19,
// 		"amount":312
// 	},
// };

// let good = '';
// 	for(let key in goods){
// 		if(+goods[key].cost >= 22 && 
// 			+goods[key].cost <= 30 && 
// 			 +goods[key].amount >= 300){

// 			good += 'name: ' + goods[key].name + '<br>';
// 			good += 'cost: ' + goods[key].cost + '<br>';
// 			good += 'amount: ' + goods[key].amount + '<br>';
			
// 		}
// 	}
// document.getElementById('out').innerHTML = good;