// var m=[4, 12, 'hello'];
// console.log( m )
var m = {};
var n = {
	"one" : 12,
	"hello" : "world",
	"prim" : 2000,
	"double key": 777
};
n.one = 9000;
// console.log(n['prim']);
// console.log(n.one);
// console.log (n.double key); //ошибка
console.log( n['double key'] );
var ppp = 'hello';
// n.ppp //ошибке
console.log(n[ppp]);
var out = document.getElementById('out');
for (var key in n){ // в переменную key попадает ключ массива n 
	out.innerHTML += key +' ---- '+n[key]+ '<br> '; // в n[key] значение ключа массива n 
}


var man = {
	"name" : "Alex",
	"age" : 67,
	"id" : "223344d",
	"sex" : "male"
};
var man2 = {
	"name" : "Alex",
	"age" : 12,
	"id" : "223344d",
	"sex" : "male",
	"year" : function (){
		return 2019 - this.age;
	}
};

// console.log(man);
// console.log(man.name);
// console.log(man['name']);
// var a = 'name';
// console.log(man[a]);
console.log ( man2.year() );

var m = {
	"mas" : [2, 8, 79, 11, 42],
	"sum" : function (){
		var sum = 0;
		for (var i=0; i<this.mas.length; i++){
			sum = sum + this.mas[i];
		}
		return sum;
	}
}

console.log(m.sum());


var goods = {
	"28292" : {
		"name" : "Банан",
		"cost" : 30,
		"img" : "https://cdn2.iconfinder.com/data/icons/jetflat-fruits/90/002_014_banana_banan_plant_herb_fruit_food-128.png",
		"sklad" : "да"
	},
	"23729" : {
		"name" : "Помидор",
		"cost" : 40,
		"img" : "https://cdn0.iconfinder.com/data/icons/nature-life-in-color/128/tomato-color-128.png",
		"sklad" : "нет"
	},
	"11223" : {
		"name" : "Клубника",
		"cost" : 60,
		"img" : "https://cdn3.iconfinder.com/data/icons/fruits-and-vegetables-13/32/strawberry-fruit-berry-128.png",
		"sklad" : "да"
	}
};

console.log(goods);
var good = '';
for (var key in goods) {
	good+='Название: '+goods[key].name + '<br>';
	good+='Цена: '+goods[key].cost + '<br>';
	good+='Наличие: '+goods[key].sklad + '<br>';
	// <img src="">
	good+='<img src="'+goods[key].img+'">';
	document.getElementById('good').style.cssText = `
		display: flex;
		justify-content: center;
		align-items: center;
	`
};
document.getElementById('good').innerHTML = good;








