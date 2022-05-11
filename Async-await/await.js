// await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. 
// После чего оно вернёт его результат, и выполнение кода продолжится.

// await нельзя использовать в обычных функциях

// await нельзя использовать на верхнем уровне вложенности

const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos';

const testFetch = fetch(url).then(response => response.json())
console.log('testFetch', testFetch)

//  РЕАЛИЗАЦИЯ С ПОМОЩЬЮ промисов 
//  *********START**********
function fetchTodos() {
  console.log('fetch todo started')
  return delay(2000)
    .then(() => fetch(url))
    .then(response => response.json())
}

fetchTodos().then(data => {
  console.log('data', data) // После исполнения функции вызываем фетч запрос 
}).catch(e => console.error(e)) // Для отловки ошибок
// ********END*******


// РЕАЛИЗАЦИЯ С ПОМОЩЬЮ async/await 
// **********START**********
async function fetchAsyncTodos() {
  console.log('fetch todo started')
  try {   // try это аналог then() - выполняется успешно в случае ошибки переходит на catch строка (41) 
    await delay(2000) // код не будет читаться дальше пока данная функция не выполнится с права от await
    const response = await fetch(url)
    const data = await response.json()
    console.log('asyncData', data)
  } catch (e) { // если происходит ошибка 
    console.error(e)
  } finally {  // выполняется в любом случае независимо ошибка или выполненно успешно
    console.log('finally', 'finally')
  }
}
// *********END**********


// Хотя при работе с async/await можно обходиться без promise.then/catch, 
// иногда всё-таки приходится использовать эти методы (на верхнем уровне вложенности, например). 
// Также await отлично работает в сочетании с Promise.all, если необходимо выполнить несколько задач параллельно.