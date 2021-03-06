// Метод find ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true.

// На тот случай, если найденных элементов может быть много, предусмотрен метод arr.filter(fn).

// Синтаксис этого метода схож с find, но filter возвращает массив из всех подходящих элементов

// let results = arr.filter(function(item, index, array) {
//     // если true - элемент добавляется к результату, и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
//   });

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Вася"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
console.log('filter', someUsers)
document.write(`<b>filter</b></br>`)
document.write(`<b>Result: ${someUsers}</b></br>`)


// map - Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
// map и forEach. forEach ничего не создает просто выполняет функц для каждого елемента, а map создает новый массив преобразовав элементы старого
document.write(`</br><b>map</b></br>`);
let someUsersMap = users.map(item => item.name.length);

document.write(`<b>Result: ${someUsersMap}</b></br>`);