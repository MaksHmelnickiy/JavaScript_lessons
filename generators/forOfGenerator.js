// Генераторы являются перебираемыми объектами.
// Возвращаемые ими значения можно перебирать через for..of:

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
let generator = generateSequence();

for(let value of generator) {
    console.log(value); // 1, затем 2  // что бы вывело 3  нужно заменить return на yield
}
  
let seq = [0, ...generateSequence()]  //  ...generateSequence() превращает перебираемый объект-генератор в массив элементов// Оператор расширения ... не работает асинхронно
console.log(seq) // выведет (4) [0, 1, 2, 3]


// Для генераторов есть особый синтаксис yield*, который позволяет «вкладывать» генераторы один в другой (осуществлять их композицию).  
