//Методы ⁡⁢⁣⁣arr.reduce⁡ и ⁡⁢⁣⁣arr.reduceRight⁡ похожи на методы выше, но они немного сложнее. 
//Они используются для ⁡⁣⁣⁢вычисления⁡ какого-нибудь единого значения на основе ⁡⁣⁣⁢всего массива⁡.

//Синтаксис:
//let value = arr.reduce(function(previousValue, item, index, array) {
    // ...
//}, [initial]);

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current, index) => sum + current + index, 0);  // где 0 это начальное значение.

console.log(result); // 15

// reduceRight 
// Метод ⁡⁢⁣⁣arr.reduceRight⁡ работает аналогично, но проходит по массиву ⁡⁢⁣⁣справа налево⁡.
