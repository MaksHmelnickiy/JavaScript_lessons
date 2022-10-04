// ********* В JavaScript есть 8 основных типов. ***********

// ⁡⁢⁣⁣number⁡ для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// ⁡⁢⁣⁣bigint⁡ для целых чисел произвольной длины.
// ⁡⁢⁣⁣string⁡ для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// ⁡⁢⁣⁣boolean⁡ для ⁡⁣⁢⁣true/false⁡.
// ⁡⁢⁣⁣null⁡ для неизвестных значений – отдельный тип, имеющий одно значение null.
// ⁡⁢⁣⁣undefined⁡ для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// ⁡⁢⁣⁣object⁡ для более сложных структур данных.
// ⁡⁢⁣⁣symbol⁡ для уникальных идентификаторов.

// ********** Object ***********
// B JavaScript существует ⁡⁢⁣⁣8 типов данных⁡. ⁡⁣⁣⁢Семь⁡ из них называются ⁡⁣⁣⁢«примитивными»⁡, 
// так как содержат только одно значение (будь то строка, число или что-то другое). 
// ⁡⁢⁣⁣Object⁡ - это коллекция которая может содержать множество ключей и значений.

// Пустой объект («пустой ящик») можно создать, используя один из двух вариантов синтаксиса:

let user = new Object(); // синтаксис "⁡⁣⁣⁢конструктор объекта⁡"
let user2 = {
    name: 'john',
    age: 32,
    "likes birds": true  // имя свойства из нескольких слов ⁡⁣⁣⁢должно быть в кавычках⁡ /
};  // синтаксис "литерал объекта"
// что бы обратиться к "likes birds" мы должны использовать квадратные скобки []
console.log(user2['likes birds'])

// ************ ⁡⁢⁣⁣delete:⁡ ****************
// Для удаления свойства мы можем использовать оператор ⁡⁢⁣⁣delete:⁡ /
delete user.age;

// Также существует специальный оператор "⁡⁢⁣⁣in⁡" для проверки существования свойства в объекте.

let userIn = { name: "John", age: 30 };
console.log( "age" in userIn ); // ⁡⁣⁣⁢true⁡, ⁡⁣⁢⁣user.age⁡ существует
console.log( "blabla" in userIn ); // ⁡⁣⁣⁢false⁡, ⁡⁣⁢⁣user.blabla⁡ не существует

// В большинстве случаев прекрасно сработает ⁡⁣⁣⁢сравнение с undefined⁡. 
// Но есть особый случай, когда оно не подходит, и нужно использовать "⁡⁢⁣⁣in⁡".
// Это когда свойство существует, но содержит значение ⁡⁣⁢⁣undefined⁡:
let obj = {
    test: undefined
  };

// ⁡⁣⁢⁡⁣⁣⁢Переменная⁡⁡ ⁡⁣⁣⁢х͟р͟а͟н͟и͟т н͟е с͟а͟м о͟б͟ъ͟е͟к͟т⁡, а его ⁡⁣⁣⁢«адрес в памяти»⁡, другими словами ⁡⁢⁣⁣«ссылку»⁡ на него.

// ************* ⁡⁣⁣⁢Цикл «for…in»⁡ *************
// Для перебора всех свойств объекта используется цикл ⁡⁢⁣⁣for..in⁡ /

let userFor = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in userFor) {
    // ключи
    console.log( key );  // name, age, isAdmin
    // значения ключей
    console.log( userFor[key] ); // John, 30, true
  }


  // Метод ⁡⁢⁣⁣Object.assign()⁡ используется для ⁡⁣⁣⁢копирования значений⁡ всех собственных перечисляемых свойств 
  // из одного или более исходных объектов в ⁡⁣⁣⁢целевой объект⁡. 
  // После копирования он возвращает ⁡⁣⁣⁢целевой объект⁡.

  let assign1 = {
    name: 'Maks', 
    the: 'Seter',
  }
  let assign2 = {
    name: 'TheMaks',  
    test: 'one',
    bed: {
      name: 'love',
      list: 'cool',
    }
  }

 let assignResult = Object.assign({}, assign1, assign2); // assign1.name будет перезаписан и заменен на assign2.name


 console.log('assign', assignResult);

let v = {name: 'MAks'};
let m = {name: 'MAks'};

if(v === m){
  console.log('compare', true)
}
else {
  console.log('compare', false) // Будет false так как у них разные ссылки , а если мы сделаем let m = v ; Тогда будет true ; так как m копирует ссылку.
}

document.write('<b>Задачи</b>')
// Задача 1
let doc = {};
doc.name = 'John';
console.log('test_1',doc);
doc.surname = 'Smith';
doc.name = 'Peat';
console.log('test_1', doc);
delete doc.name
console.log('test_1', doc);

// Задача 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let shedule = {}
function isEmpty (obj) {
  for(key in obj) { // Для перебора всех ключей объекта используется цикл for..in или еесли нужно получить значение то obj[key].
    return false
  }
  return true
}
console.log('Test_2', isEmpty(shedule))

// Задача 3 
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

// Задача 4 
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
console.log('test4', menu)