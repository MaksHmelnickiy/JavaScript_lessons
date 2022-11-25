// ⁡⁣⁣⁢Синтаксис⁡ /
// ⁡⁣⁢⁣let func = new Function([arg1, arg2, ...argN], functionBody)⁡;
// Функция создаётся с заданными аргументами ⁡⁢⁣⁣arg1...argN⁡⁢⁢⁢(но можно и без arg., а только тело функции)⁡⁡ и ⁡⁢⁣телом ⁡⁢⁣⁣functionBody⁡⁡.
let sum = new Function('a', 'b', 'return a + b'); // аргументы и тело функции записуються ⁡⁢⁣⁢строкой⁡ /
console.log( sum(1, 2) ); // 3

// Главное ⁡⁣⁣⁢отличие⁡ от других функций, что ⁡⁣⁢⁡⁣⁢⁣new⁡⁡ ⁡⁣⁢⁣Function⁡⁡ ⁡⁣⁣⁢создаётся⁡ полностью «на лету» ⁡⁢⁣⁣из строки⁡, 
// переданной во время выполнения. ⁡⁣⁣⁢Например⁡, можно получить новую функцию с ⁡⁢⁣⁣сервера⁡ и затем выполнить её:

let newFunc = new Function('console.log("as")') // 
newFunc()

// ​‌‍‌⁡⁣⁣⁢new Function() и замыкание⁡​ /
// ⁡⁢⁣⁣new Function⁡, в её ⁡⁢⁣⁣[[Environment]]⁡ записывается ссылка не на внешнее лексическое окружение, в котором она была создана, 
// а на ⁡⁢⁣⁢глобальное⁡. Поэтому такая функция имеет доступ только к глобальным переменным.