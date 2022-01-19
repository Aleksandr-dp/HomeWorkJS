/*
Задача 5. Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, где останутся лежать только положительные числа `[1, 2, 3, 7]`. 
Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать число и возвращать true, если число положительное, 
и false — если отрицательное. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
*Для добавление нового элемента в конец массива используйте метод push*
*/

function newArr(array) {
    let newArr = [];

    array.forEach(element => {
        if (isPositive(element)) {
            newArr.push(element);
        }
    });

    return newArr;
}

function isPositive(i) {
    if (typeof i != "number") {
        throw new Error("Parameter type is not a Number");
    }

    if (i > 0) {
        return true;
    } else {
        return false;
    }
}

newArr([1, 2, -4, 3, -9, -1, 7]);
//newArr([1, 2, -4, 3, "-9", -1, 7]);
