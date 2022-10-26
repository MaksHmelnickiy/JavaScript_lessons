// ⁡⁣⁣⁢​‌‍‌Задачи⁡⁡ ⁡⁢⁣⁣Рекурсия и стек​⁡ /

// ⁡⁣⁣⁢Задача 1⁡ /
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// 1. С использованием цикла.
// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo1(n){
    let a = 0;
    for(var i = 0; i<=n; i++){
        a+=i
    }
    return a
}
console.log('Task N1, variant 1: ', sumTo1(33)) // 561

function sumTo2(n){
    return n===1 ? n : n + sumTo2(n-1)
}

console.log('Task N1, variant 2: ', sumTo2(33)) // 561

// ⁡⁣⁣⁢Задача 2⁡ /
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n){
    return n === 1 ? n : n * factorial( n - 1 ) 
}
console.log('Task N2: ', factorial(5)) // 720

// ⁡⁣⁣⁢Задача 3⁡ /
// Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(el){

}

console.log()