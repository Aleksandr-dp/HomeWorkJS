/*
Задача 2. Создать имплементацию функции `filter`, логика работы такая же как и у родного метода. Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
*/

const arr = [1, 2, 3];

Array.prototype.filter = function(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Parameter type should be an Array");
    }

    if (typeof(callback) != "function") {
        throw new Error("Parameter type should be an Function");
    }

    let result = [];

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}

arr.filter(arr, (item, i, arr) => {
    return (item % 2) === 0;
});
