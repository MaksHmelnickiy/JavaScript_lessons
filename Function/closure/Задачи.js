// ⁡⁣⁣⁢Задача 1⁡ /
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a){
    return (b) => b + a
}
console.log('Taks N1: ', sum(3)(5))

// ⁡⁣⁣⁢Задача 2 ⁡/
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
// Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a,b){
    return function(item){
        if(item >= a && item <=b) return item
    }
}
function inArr(arr){
    return item => arr[item]
}
console.log('Task N2: ',arr.filter(inBetween(3,6)))
console.log('Task N2: ',arr.filter(inArr([1,2,10])))

// ⁡⁣⁣⁢Задача 3 ⁡/
// У нас есть массив объектов, который нужно отсортировать по полям:
let users2 = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(el) {
    return (first, second) => first[el] > second[el] ? 1 : -1;
  }
  
// По возрасту
users2.sort(byField('age'))
let age = users2.slice(0)
console.log('Task N3 (age): ', age);

// По имени
users2.sort(byField('name'))
let namer = users2.slice(0)
console.log('Task N3 (namer): ', namer);

// ⁡⁣⁣⁢Задача 4⁡ /
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
function makeArmy() {
    let shooters = [];
  
    for(let i =0; i<10; i++){
        let shooter = function() { 
            console.log( i ); 
        };
        shooters.push(shooter);
    }
    return shooters;
  }
  
  let army = makeArmy();
  console.log(army)
  army[0](); // 0
  army[5](); // 5