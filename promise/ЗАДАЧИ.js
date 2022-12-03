// Promise  ⁡⁣⁣⁢then,catch, finaly⁡
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
// так чтобы мы могли добавить к нему .then:

function delay(ms) {
    return new Promise(function(resolve, reject){
        return setTimeout(() => resolve()  , ms)
    })
  }

  delay(3000).then(() => console.log('выполнилось через 3 секунды')).then(() => console.log('last'))

  console.log('start');

  const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
  })
  
  promise1.then(res => {
    console.log(res)
  })
  
  console.log('end');