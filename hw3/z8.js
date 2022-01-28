/*
Задача 8. Напишите функцию `f`. Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех 
элементов на всех уровнях. Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа. Функция 
должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив
*/

function f(array) {
    if (!Array.isArray(array)) {
        throw new Error("Parameter type should be an Array");
    }

    return array.flat(Infinity).reduce((result, currentValue) => {
        if (typeof(currentValue) != "number") {
            throw new Error("Parameter type should be an Number");
        }

        return result + currentValue;
    }, 0);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
const arr6 = [[[1, 2], [1, 2]], [["s", 1], [1, 2]]];
f(arr6); // Error
const arr7 = "String";
f(arr7); // Error
