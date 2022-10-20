// ⁡⁣⁣⁢Задача 1⁡ /
let doc = {};
doc.name = 'John';
console.log('task_1',doc);
doc.surname = 'Smith';
doc.name = 'Peat';
console.log('task_1', doc);
delete doc.name
console.log('task_1', doc);

// ⁡⁣⁣⁢Задача 2⁡ /
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let shedule = {}
function isEmpty (obj) {
  for(key in obj) { // Для перебора всех ключей объекта используется цикл for..in или еесли нужно получить 
                    // значение то obj[key].
    return false
  }
  return true
}
console.log('task_2', isEmpty(shedule))

// ⁡⁣⁣⁢Задача 3⁡ /
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

let salaries = {
  John: 100,
  Mary: 160,
  Pete: 130,
}
let sum = 0;
function result(sumAll) {
  for (key in sumAll){
    sum+=sumAll[key]
  }
  return 0
}
result(salaries)
console.log(sum)

// ⁡⁣⁣⁢Задача 4⁡ /
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
  width: 200,
  height: 400,
  title: 'Title',
}

function multiple(event) {
  for(key in event){
    if(typeof event[key] === "number"){
      menu[key] = event[key] * 2;
    }
  }
}
multiple(menu)
console.log('task4', menu)

// ⁡⁣⁣⁢Задача 5⁡ /
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью 
// метода Object.values и цикла for..of.

let usersSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumUsersSalaries (obj) {
    sum = 0
    for(item of Object.values(obj)){
        sum+=item
    }
    return sum
}
console.log('Task N5:', sumUsersSalaries(usersSalaries)) // 650

// ⁡⁣⁣⁢Задача 6⁡ /
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let person = {
    one: 'lets',
    two: 'go'
}
function count(obj){
    return Object.entries(obj).length
}
console.log('Task N6: ', count(person))
