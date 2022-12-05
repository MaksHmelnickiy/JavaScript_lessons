// ⁡⁢⁣⁣Генераторы⁡ это некая функция которая ⁡⁣⁣⁢выполняясь⁡, может в некоторый момент ⁡⁢⁣⁢остановится⁡. 
// В отличии от ⁡⁢⁣⁣обычных функций⁡ которые выполняются ⁡⁣⁣⁢целиком⁡.

// ⁡⁣⁣⁢Для объявления генератора⁡ используется специальная синтаксическая конструкция: ⁡⁢⁣⁣function*⁡, которая называется «⁡⁢⁣⁣функция-генератор⁡».
// Генераторы были добавлены в язык JavaScript, в частности, с целью упростить создание перебираемых объектов.
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  // "функция-генератор" создаёт объект "генератор"
  let generator = generateSequence();
  console.log(generator); // [object Generator]

// ⁡⁣⁣⁢Основным методом генератора⁡ является ⁡⁢⁣⁣next()⁡.

let one = generator.next() // ⁡⁣⁣⁢value:⁡ ⁡⁣⁢⁣1⁡⁡⁡ ⁡⁣⁣⁢, done:⁡ ⁡⁢⁣⁢false⁡⁡;
console.log(one)

// Повторный вызов уже будет иметь результат ⁡⁣⁣⁢value:⁡ ⁡⁣⁢⁣2⁡⁡ ⁡⁣⁣⁢, done:⁡ ⁡⁢⁣⁢false⁡⁡;
let two = generator.next() // ⁡⁣⁢⁡⁣⁣⁢value:⁡ ⁡⁣⁢⁣2⁡⁡ ⁡⁣⁣⁢, done:⁡ ⁡⁢⁣⁢false⁡⁡;
console.log(two)

// И, наконец, ⁡⁣⁣⁢последний вызов⁡ завершит выполнение функции и вернёт результат ⁡⁢⁣⁣return⁡:
let three = generator.next() // ⁡⁣⁣⁢value:⁡ ⁡⁣⁢⁣3⁡⁡⁡ ⁡⁣⁣⁢, done:⁡ ⁡⁢⁡⁢⁢⁢true⁡⁡⁡;
console.log(three)


// Результатом метода ⁡⁢⁣⁣next()⁡ всегда является ⁡⁣⁣⁢объект с двумя свойствами⁡:

// ⁡⁢⁣⁣value⁡: значение из ⁡⁢⁣⁣yield⁡.
// ⁡⁣⁣⁢done: true⁡, если выполнение функции завершено, иначе ⁡⁢⁣⁢false⁡.


// ​‌‍‌⁡⁣⁣⁢Перебор генераторов⁡​ ⁡⁢⁣⁣​‌‍‌for of​⁡/

function* generatorForOf(){
  yield 1;
  yield 2;
  yield 3;
}

for(let i of generatorForOf()){
  console.log('Generator for...of: ', i)
}

// Так как ⁡⁢⁣⁣генераторы⁡ ⁡⁣⁣⁢являются перебираемыми объектами⁡, мы можем использовать всю связанную с ними функциональность, 
// например оператор расширения ⁡⁢⁣⁣...⁡ / 
let spreadGenerator = [...generatorForOf()];
console.log(spreadGenerator) //⁡⁣⁢⁣ 0, 1, 2, 3 ⁡/
// В коде выше ⁡⁢⁣⁣...generateSequence()⁡ ⁡⁣⁣⁢превращает⁡ перебираемый ⁡⁢⁣⁣объект-генератор⁡ в ⁡⁢⁣⁣массив элементов⁡ /