//Метод concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
// Его синтаксис: arr.concat(arg1, arg2...)

let arr = [1, 2];
document.write(`<br/><br/><b>arr.concat()</b><br/>`)
document.write(`Before: ${arr} after:  ${arr.concat('2ds')}`)

//Метод arr.forEach позволяет запускать функцию для каждого элемента массива.


let arrForEach = ["Bilbo", "Gandalf", "Nazgul"]
document.write(`<br/><br/><b>arr.forEach(item, index, array)</b>`)
arrForEach.forEach((item, index, array) => {
    document.write(`<br/>${item} имеет позицию ${index} в ${array}`);
});


