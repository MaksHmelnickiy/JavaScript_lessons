//Метод ⁡⁢⁣⁣str.split(delim)⁡ именно это и делает. Он разбивает строку на ⁡⁣⁣⁢массив⁡ по заданному разделителю delim
//У метода ⁡⁢⁣⁣split⁡ есть необязательный второй числовой аргумент – ⁡⁣⁣⁢ограничение на количество элементов в массиве⁡. 
//Если их больше, чем указано, то остаток массива будет ⁡⁣⁣⁢отброшен⁡. На практике это редко используется:
let names = 'Вася Петя Маша';

let arrSplit = names.split(' ');
console.log(arrSplit)
for (let name of arrSplit) {
  console.log( 'split',`Method1: Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}
//Другой способ через forEach
arrSplit.forEach(element => {
    console.log('split',`Method2:  Сообщение получат: ${element}.`)
});


// JOIN
// Вызов ⁡⁢⁣⁣arr.join(glue)⁡ делает в точности противоположное ⁡⁢⁣⁣split⁡.
// Он ⁡⁣⁣⁢создаёт строку⁡ из элементов arr, вставляя glue между ними.


let arrJoin = ['Вася', 'Петя', 'Маша'];

let str = arrJoin.join('; '); // объединить массив в строку через ;

console.log('join', str ); // Вася;Петя;Маша