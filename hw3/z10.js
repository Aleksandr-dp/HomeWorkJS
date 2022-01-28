/*
Задача 10. Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке. Функция должна 
содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив
*/

const arr = [3, 2, 1];

Array.prototype.reverse = function(array) {
    if (!Array.isArray(array)) {
        throw new Error("Parameter type should be an Array");
    }

    if (array.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let result = [],
        len = array.length;

    for(let i = 0; i < len; i++) {
        result.push(array.pop());
    }

    return result;
}

arr.reverse(arr);
