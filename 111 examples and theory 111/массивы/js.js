
let a = [];
let b = [12, 13, 66, 999];
console.log( b.length );
let c = [3, 'Hello', true];
console.log( c );
c[2] = 999;
c[5] = 777;
delete c[5];
console.log( c );

let out = document.getElementById('out');
let str = '';
for (let i = 0; i< c.length; i++  ) {
	if (c[i]!==undefined) str +=i+' - '+c[i]+'<br>';
}
// out.innerHTML = str;

// Метод push() Позволяет добавить один или несколько элементов в конец массива
console.log('*** Метод push() ***');

let с = [3,5];
с.push(6);
с.push(12);
с.push(28);
console.log(с) // 3,5,6,12,28

// Метод pop() удаляет элемент в конце массива и возвращает его. 
console.log('*** Метод pop() ***');

let d = [3,5,7,9];
d.pop();
console.log(d) // 3,5,7

// Метод shift() удаляет первый элемент массива и возвращает его. 
console.log('*** Метод shift() ***');

let e = [3,5,7,9];
e.shift();
console.log(e) // 5, 7, 9

// Метод unshift() позволяет добавить элемент в начало массива. 
console.log('*** Метод unshift() ***');

let f = [5,7,9];
f.unshift(6);
console.log(f); //6, 5, 7, 9

// метод строки split - позволяет превратить строку в массив, разбив ее по разделителю указанному в скобочках
console.log('*** Метод split ***');

let string = "Строка, текста, пример"; // это строка
let g = string.split(",");
console.log(g); // ["Строка", " текста", " пример"]
console.log(g[1]); // текста

// Метод join("разделитель") - объединяет массив в строку, используя указанный в скобках разделитель.
console.log('*** Метод join() ***');

let h = ["Hello", "foo", "world"];
let r = h.join(" "); // указываем разделитель  - пробел
console.log(r); // Hello foo world

// Метод slice(a,b) - примененный к массиву создает новый массив куда копирует элементы с источника, начиная с элемента под номером a, и до элемента b. Если b не указан, то до конца массива. Метод не изменяет исходный массив.
console.log('*** Метод slice() ***');

const clients = ["A", "B", "C", "D"];

// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log( clients.slice(1, 3) ); // ["B", "C"]

// Вернет новый массив в котором будут элементы с индексами от 1 до (clients.length - 1)
console.log( clients.slice(1) ); // ["B", "C", "D"]

// Вернет копию исходного массива
console.log( clients.slice() ); // ["A", "B", "C", "D"]

// Вернет новый массив состоящих из последних двух элементом исходного
console.log( clients.slice(-2) ); // ["C", "D"]



// деструктуризация массива - присвоение значений массива переменным.
console.log('*** деструктуризация массива ***');

let k = [6, 7, 8, 9]; // массив;
// применяет деструктор. Загоним первые три значения массива
// в переменные a, b, c
let [l, m, n] = k;
console.log(l); // 6
console.log(m); // 7
console.log(n); // 8


//метод map перебирает массив и возвращает новый массив
// let b = a.map(function (currentValue, index, array){
// 	return tralalala;
// })
console.log('*** Метод map() ***');

// умножить каждый елемент массива на два
let o = [3, 4, 5, 6];
let p = [];
	o[5] = 8;
	o[7] = 10;
	delete o[5];
for (var i = 0; i < o.length; i++) {
	p[i] = o[i] * 2;
}
console.log(o);
console.log(p);

let s = o.map(function (currentValue, index, array) {
	// console.log(index);
	// console.log(array);
	return currentValue * 2;
});
console.log(s);


// фильтрует массив по результатам функции внутри. если return дает true тогда елемент присваивается в нвоый массив 
// let c = a.filter(function(){
//});
console.log('*** Метод filter() ***');

// выбрать елементы массива больше нуля
let u = [3,-12,0,4,5,-8];
let y =[];
for (let i =0; i< u.length; i++){
	if (u[i]>=0) y.push(u[i]);
}
console.log (u);
console.log (y);

let j = u.filter(function(currentValue, index, array){
	return index%2==0;
});

console.log(j);

//методы every и some применяют какую либо функцию к каждому елементу массива. возвращает либо True либо False

let arr = [3, 4, 5, 9];
console.log('*** Метод every() ***');

let q = arr.every(function(b){
	console.log(b);
	return b<5;
})	
console.log(q); //переберт весь массив и вернет False потому что наткнется на 9

console.log('*** Метод some() ***');

let w = arr.some(function(b){	
	console.log(b);
	return b<5;
})
console.log(w); //переберт весь массив и вернет true потому что массив содержит хотя бы один елемент соответствующий условию

//методы reduce и reduceRight применяют какую либо функцию к каждому елементу массива. возвращает либо True либо False
// аргумент prev возвращает первый елемент массива
// аргумент current возвращает следующий елемент идущий после prev
// аргумент index возвращает номер елемента в массиве
console.log('*** Метод reduce() ***');

let x = arr.reduce(function(prev, current, index){
	console.log('prev вернет - ' + prev);
	console.log('current вернет - ' + current);
	console.log('index вернет - ' + index);
	return prev + current;
})	
console.log(x);

console.log('*** Метод reduceRight() ***');

let z = arr.reduceRight(function(prev, current, index){
	console.log('prev вернет - ' + prev);
	console.log('current вернет - ' + current);
	console.log('index вернет - ' + index);
	return prev + current;
})	
console.log(z);