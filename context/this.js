// this — это текущий контекст исполнения функции. Поскольку функцию можно вызвать четырьмя способами:

// * вызов функции: alert('Hello World!'),
// * вызов метода: console.log('Hello World!'),
// * вызов конструктора: new RegExp('\\d'),
// * непрямой вызов: alert.call(undefined, 'Hello World!'),
// и каждый из них определяет свой контекст, поведение this слегка не соответствует ожиданиям начинающих разработчиков. Кроме того, strict mode также влияет на контекст исполнения.

function getThis () {
    console.log('this', this)
}
getThis() // в данном случае оно будет ссылаться на область видимости в Window

function getPrice() {
    console.log('getPrice', this.price)
}

const prod1 = {
    name: 'Maks',
    price: 100,
    // getPrice: function() {
    //     console.log('getPrice', this.price)   //  Это вариант функции внутри области prod1
    // },
    getPrice,  // Когда мы вынесли функцию (строка 14) мы можем её записать так, и результат будет тот же что и на строчку выше (21). 
               // Таким образом мы можем использовать одну функцию во многих объектах
    getName: function(){
        console.log('getName', this.name)
    },
    info: {
        information: ['2.3ggs'],
        getInfo: function() {
            console.log(this)
        }
    }
}

prod1.getPrice() // Область видимости будет prod1

prod1.info.getInfo() // Область видимости будет info

// итого где была объявленна функция будет меняться наш this 

const prod2 = {
    name: 'Amd',
    price: 50,
}

prod2.getName = prod1.getName // Эта запись позволяет нам взять функцию которой нету в prod2  из prod1 (26) getName

prod2.getName()   // Здесь мы уже вызываем функцию которую добавили на строке (48) и результат будет 'Amd' (44)