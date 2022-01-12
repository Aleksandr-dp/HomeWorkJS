/*
Задача 1. Перепишите код, заменив оператор `if` на тернарный оператор `?`

var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
*/

let a = 3;
let b = 4;

let result = (a + b < 4) ? true : false;

console.log(result);

/*
Задача 2. Перепишите `if..else` с использованием нескольких операторов `?`.
Для читаемости — оформляйте код в несколько строк.

var message;
if (login == 'Pitter') {
message = 'Hi';
} else if (login == 'Owner') {
message = 'Hello';
} else if (login == '') {
message = 'unknown';
} else {
message = '';
}
*/

let login = "Owner";

let message = (login == "Pitter") ? "Hi" :
	          (login == "Owner") ? "Hello" :
	          (login == "") ? "unknown" :
	          "";
	      
console.log(message);

/*
Задача 3. Перепишите код, заменив оператор `switch` на оператор `if..else`:

switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
*/

let val = "c";

if (val == "a") {
    console.log("a");
} else if (val == "b" || val == "c" ||
   	       val == "d" || val == "e") {
    console.log("others");
} else {
    console.log("unknown");
}

/*
Задача 4. Перепишите код с использованием одной конструкции `switch`:

var a = 0;
if (a == 0) {
console.log( 0 );
}
if (a == 1) {
console.log( 1 );
}
if (a == 2 || a == 3) {
console.log( '2,3' );
}
*/

let a = 0;

switch (a) {
    case 0:
    	console.log(0);
    	break;
    case 1:
    	console.log(1);
    	break;
    case 2:
    case 3:
    	console.log("2, 3");
    	break;
    default:
    	console.log("Error");
    	break;
}

/*
Задача 5. Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.

for (var i = 0; i < 3; i++) {
console.log(i);
}
*/

let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}

/*
Задача 6. Написать код который посчитает сумму всех элементов в масиве.

var arr = [1,2,3,4];

**Внимание**! Не разрашается использовать специальные методы массивов.
*/

let sum = 0;
let arr = [1,2,3,4];

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

/*
Задача 7. Написать код который посчитает сумму всех парных элементов в масиве.

var arr = [1,2,3,4];

**Внимание**! Не разрашается использовать специальные методы массивов.
*/

//!!!Парных или четных?

// --- Четные ---
let sum = 0;
let arr = [1,2,3,4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
	sum += arr[i];
    }
}

console.log(sum);

// --- Парные (повторяющиеся) ---
let arr1 = [1,2,3,4,1,6,5,3,1];
let arr2 = [];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    arr2[arr1[i]] = (arr2[arr1[i]] || 0) + 1;
}

for (let j = 0; j < arr1.length; j++) {
    if (arr2[arr1[j]] > 1) {
    	sum += arr1[j];
    }
}

console.log(sum);

/*
Задача 8. Написать код который посчитает сумму всех четных элементов в массиве, в суммировании учaствуют только элементы больше 3.

var arr = [1,2,3,4];

**Внимание**! Не разрашается использовать специальные методы массивов.
*/

let sum = 0;
let arr = [1,2,3,4,5,6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] > 3) {
	    sum += arr[i];
    }
}

console.log(sum);

/*
Задача 9. Отсортировать массив по убыванию.

var arr = [1,2,3,4,5,6];

**Внимание**! Не разрашается использовать специальные методы массивов.
*/

let arr = [1,2,3,4,5,6];

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
}

console.log(arr);

/*
Задача 10. Отсортировать массив по возрастанию.

var arr = [6,5,4,3,2,1];

**Внимание**! Не разрашается использовать специальные методы массивов.
*/

let arr = [6,5,4,3,2,1];

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
}

console.log(arr);

/*
Задача 11. Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. С помощью цикла `for` и оператора `if` 
выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
**Внимание**! Не разрашается использовать специальные методы массивов.
*/

let arr = [2, 5, 9, 15, 0, 4];
let msg = "";

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
    	msg += arr[i] + "\n";
    }
}

alert(msg);

/*
Задача 12. Дан массив с числами: `[1,2,3,-5,-2,1,-4]`. Найдите сумму положительных элементов массива.
**Внимание**! Не разрашается использовать специальные методы массивов.
*/

let arr = [1,2,3,-5,-2,1,-4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
    	sum += arr[i];
    }
}

console.log(sum);

/*
Задача 13. Дан массив с элементами `[1, 2, 5, 9, 4, 13, 4, 10]`. С помощью цикла `for` и оператора `if` 
проверьте есть ли в массиве элемент со значением, равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла. 
Если нет - ничего делать не надо.
*/

let arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
    	alert("Yes!");
    	break;
    }
    console.log(arr[i]); //Для проверки выхода из массива
}

/*
Задача 14. Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
*/

let n = 1000,
    num = 0;
    
while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("n = " + n + "; Итераций - " + num);
