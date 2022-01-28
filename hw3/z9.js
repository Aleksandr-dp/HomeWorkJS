/*
Задача 9. Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
а вторым — сколько элементов должно быть в массиве. Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число
*/

function arrayFill(symbol, amount) {
    if(typeof(symbol) != "number" && typeof(symbol) != "string" && 
       !Array.isArray(symbol) && (symbol === null || typeof(symbol) != "object")) 
    {
        throw new Error("Parameter type should be an Number / String / Array / Object");
    }

    if (typeof(amount) != "number") {
        throw new Error("Parameter type should be an Number");
    }

    let array = new Array(amount);
    
    return array.fill(symbol);
}

arrayFill('x',5); // [x,x,x,x,x]
