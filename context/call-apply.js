//call, apply позволяют указать в каком контексте будет вызванна указанная функция. 

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