//arr.push(...items) – добавляет элементы в конец,
//arr.pop() – извлекает элемент из конца,
//arr.shift() – извлекает элемент из начала,
//arr.unshift(...items) – добавляет элементы в начало.

let fruitsPop = ["Яблоко", "Апельсин", "Слива"];

document.write('pop: ' + ` <b>${fruitsPop.pop()} //</b> after: ${fruitsPop} </br> </br>` )





let fruitsPush = ["Яблоко", "Апельсин", "Слива"];

document.write('push: ' + ` <b>${fruitsPush.push('Мандарин')} //</b> after: ${fruitsPush} </br> </br>` );



let fruitsShift = ["Яблоко", "Апельсин", "Слива"];

document.write('shift: ' + ` <b>${fruitsShift.shift()} //</b> after: ${fruitsShift} </br> </br>` );



let fruitsUnshift = ["Яблоко", "Апельсин", "Слива"];

document.write('unshift: ' + ` <b>${fruitsUnshift.unshift('Мандарин')} //</b> after: ${fruitsUnshift} </br> </br>` );