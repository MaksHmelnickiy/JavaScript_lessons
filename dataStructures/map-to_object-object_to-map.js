// массив пар [ключ, значение]
// Object превращаем в Map.
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);

console.log( map ); // str1

let obj = {
    name: "John",
    age: 30
};

let toMap = new Map(Object.entries(obj));  // Object превращаем в Map. Будет так [ ["name","John"], ["age", 30] ]

console.log('toMap',toMap)

// Map превращаем в Object.

let toObject = Object.fromEntries(toMap.entries()) // Map превращаем в Object (*).  Будет так {banana: 1, orange: 2, meat: 4}
console.log('toObject', toObject)

let maptoObj = new Map();
maptoObj.set('banana', 1);
maptoObj.set('orange', 2);
maptoObj.set('meat', 4);

let toObj = Object.fromEntries(maptoObj.entries()); // Map превращаем в Object (*).  Будет так {banana: 1, orange: 2, meat: 4}

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(toObj); // 2
