/*
Задача 7. Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная 
от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
*/

function getDivisors(n) {
    if (typeof n != "number") {
        throw new Error("Parameter type is not a Number");
    }

    if (n < 1) {
        throw new Error("Parameter can't be less than 0");
    }

    let arr = [1];

    for(let i = 2; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    return arr;
}

getDivisors(12);
//getDivisors('Content');
//getDivisors(0);
