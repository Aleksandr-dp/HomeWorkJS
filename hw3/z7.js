/*
Задача 7. Код ниже получает из массива строк новый массив, содержащий их длины. Перепишите выделенный участок:
- используйте вместо цикла `for` метод `map`
*/

let arr = ['abcd', 'abcde', 'ab', 'abc'];

let arrLength = arr.map(element => {
    return element.length;
});

console.log(arrLength);
