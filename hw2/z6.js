/*
Задача 6. Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. Если чётное — функция возвращает `true`, 
если нечётное — `false`. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
*Чётные числа могут делится на 2 без остатка.*
*/

function isEven(n) {
    if (typeof n != "number") {
        throw new Error("Parameter type is not a Number");
    }

    if (Math.abs(n % 2) > 0) {
        return false;
    } else {
        return true;
    }
}

isEven(3);
//isEven(8);
//isEven(-5);
//isEven(-10);
//isEven("Content");
