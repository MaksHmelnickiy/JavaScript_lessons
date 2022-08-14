// delete - удаляет значение с заданным ключем , но длина массива остается прежней
document.write('</br><b>DELETE</b></br>')
let arr = ["I", "go", "home"];

document.write(`<b>delete</b>: before - ${arr} </br>`)

delete arr[1]; // удалить "go"

document.write(`<b>delete</b>: after - ${arr}`)


//Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.

document.write('</br></br></br><b>SPLICE</b></br>')

let arrSplice = ["Я", "изучаю", "JavaScript"];

document.write(`<b>delete</b>: before - ${arrSplice} </br>`)

arrSplice.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

document.write(`<b>delete</b>: after - ${arrSplice}`)

//Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:

let arrSplice2 = ["Я", "изучаю", "JavaScript"];
arrSplice2.splice(-1,0, 'сложный', 'язык') //В этом и в других методах массива допускается использование отрицательного индекса. Он позволяет начать отсчёт элементов с конца
document.write(`</br>arrSplice2.splice(2,0, 'сложный', 'язык')  <b>Result:</b>  ${arrSplice2}`)