/*
Задача 2. Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать 
проверку входных параметров, потому что принимать она может только числа.
*/

function f() {
    let sum = 0;

    for(variable of arguments) {
        if (typeof variable === "number") {
            sum += variable;
        } else {
            throw new Error("All parameters type should be a Number");
        }
    }

    return sum;
}

f(3, 6, 9, 1);
//f(2, "4", 7, 8)
