/*
Задача 6. Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода. Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
*/

const arr = [1, 2, 3];
const accumulator = 0;

Array.prototype.reduceRight = function(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new Error("Parameter type should be an Array");
    }
) != "function") {
        throw new Error("Parameter type should be an Function");
    }

    //if (arguments.length === 3) {
        if (typeof(initialValue) != "number" && typeof(initialValue) != "string") {
            throw new Error("Parameter type should be an Number or String");
        }
    //}

    let i = this.length - 1;

    // if (arguments.length < 3) {
    //     i = this.length - 2;
    //     initialValue = this[this.length - 1];
    // }

    for(; i >= 0; i--) {
        initialValue = callback(initialValue, this[i], i, this);
    }
    if (typeof(callback

    return initialValue;
}

arr.reduceRight(arr, (accumulator, currentValue, i, arr) => {
    return accumulator + currentValue;
}, accumulator);
