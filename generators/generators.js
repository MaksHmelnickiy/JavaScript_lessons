// Для объявления генератора используется специальная синтаксическая конструкция: function*, которая называется «функция-генератор».

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  // "функция-генератор" создаёт объект "генератор"
  let generator = generateSequence();
  alert(generator); // [object Generator]

// Основным методом генератора является next().

let one = generator.next()
console.log(JSON.stringify(one))

// Результатом метода next() всегда является объект с двумя свойствами:

// value: значение из yield.
// done: true, если выполнение функции завершено, иначе false.


