/*
Задача 1. Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода. Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
*/

const arr = [1, 2, 3];

Array.prototype.forEach = function(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Parameter type should be an Array");
    }

    if (typeof(callback) != "function") {
        throw new Error("Parameter type should be an Function");
    }

    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

arr.forEach(arr, (item, i, arr) => {
    console.log({item});
    console.log({i});
    console.log({arr});
});
