//Первое его отличие от Map в том, что ключи в WeakMap должны быть объектами, а не примитивными значениями:
//В основном, WeakMap используется в качестве дополнительного хранилища данных.
// WeakMap и WeakSet самоочищаються например после выполнения функции куда добавили новые значения для WeakMap и WeakSet
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // работает (объект в качестве ключа)
// console.log(weakMap)
// нельзя использовать строку в качестве ключа
// weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект

let john = { name: "John" };


// Теперь, если мы используем объект в качестве ключа и если больше нет ссылок на этот объект, 
// то он будет удалён из памяти (и из объекта WeakMap) автоматически.
let weakMapSl = new WeakMap();
weakMapSl.set(john, "...");

john = null; // перезаписываем ссылку на объект

console.log(weakMapSl)

