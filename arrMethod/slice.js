
// Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). 
// Оба индекса start и end могут быть отрицательными. 
// В таком случае отсчёт будет осуществляться с конца массива.


let arr = ["t", "e", "s", "t"];

document.write(`<b>Slice</b></br> <b>Before</b>:${arr} </br>arr.slice(0,2) </br> <b>After</b>: ${arr.slice(0,2)}`);
let a = arr.slice(1,2);
console.log(a)
//Можно вызвать slice и вообще без аргументов: arr.slice() создаёт копию массива arr. 