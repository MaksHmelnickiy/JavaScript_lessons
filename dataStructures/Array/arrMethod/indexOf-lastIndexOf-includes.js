//arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
//arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
//arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

let arr = ['first', 'second', 'third', 'fourth']
document.write(`<br/> <b>arr.indexOf(item, from)</b> </br>`)
document.write(`before: ${arr.indexOf('third', 0)}`)

document.write(`<br/> <b>arr.includes(item, from)</b> </br>`)
document.write(`before: ${arr.includes('third', 0)}`)
