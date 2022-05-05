//call, apply позволяют указать в каком контексте будет вызванна указанная функция. 

function getPrice() {
    console.log('getPrice', this.price)
}

const prod2 = {
    name: 'Amd',
    price: 50,
}

getPrice.call(prod2)