// При использовании функций call и apply можно задать значение this напрямую, передав его первым параметром.
// Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).

function getPrice(currency = '$', cur = 2) { // функция  принимает в себее параметры currency , cur 
    console.log('getPrice', currency + this.price + cur)
    
}

const prod2 = {
    name: 'Amd',
    price: 50,
}

getPrice.call(prod2, '*', 3) // здесь мы задали контекст в котором хотим вызвать функцию getPrice 
// первый параметр это наш объект
// второй и третий - это параметр функции на строке (3) которым мы можем менять значения 
getPrice.apply(prod2, ['/']) 
// Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.


