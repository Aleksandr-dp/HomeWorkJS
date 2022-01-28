/*
Задача 5. Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода. Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
*/

const arr = [1, 2, 3];
const accumulator = 0;

Array.prototype.reduce = function(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new Error("Parameter type should be an Array");
    }

    if (typeof(callback) != "function") {
        throw new Error("Parameter type should be an Function");
    }

    //if (arguments.length === 3) {
        if (typeof(initialValue) != "number" && typeof(initialValue) != "string") {
            throw new Error("Parameter type should be an Number or String");
        }
    //}

    let i = 0;

    if (arguments.length < 3) {
        i = 1;
        initialValue = this[0];
    }

    for(; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this);
    }

    return initialValue;
}

arr.reduce(arr, (accumulator, currentValue, i, arr) => {
    return accumulator + currentValue;
}, accumulator);
