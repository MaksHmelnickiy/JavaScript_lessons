// Обработчики промисов ⁡⁢⁣⁣.then/.catch/.finally⁡ всегда ⁡⁣⁣⁢асинхронны⁡.

// В данном примере ниже, ⁡⁢⁣⁣алерт⁡ выполнится ⁡⁣⁣⁢первее чем ⁡⁢⁣⁣then⁡⁡, но до этого выполняется ⁡⁣⁣⁢первым⁡ ⁡⁢⁣⁣Promise.resolve()⁡,
// а ⁡⁢⁣⁣then⁡ ставится ⁡⁣⁣⁢в очередь⁡ после выполнения ⁡⁢⁣⁣Promise.resolve()⁡, но там уже лежит ⁡⁢⁣⁣алерт⁡ так как 
// список задач уже ⁡⁣⁣⁢был построен изначально⁡ /
let promise = Promise.resolve();
promise.then(() => console.log("Я номер 1")); // этот покажется ⁡⁢⁣⁣вторым⁡ .
console.log("Я номер 2"); // этот alert показывается ⁡⁢⁣⁣первым⁡ /


//⁡⁢⁣⁣ Асинхронные задачи⁡ требуют правильного управления. Для этого стандарт предусматривает внутреннюю очередь ⁡⁢⁣⁣PromiseJobs⁡, более известную как «⁡⁢⁣⁣очередь микрозадач⁡ (⁡⁣⁣⁢microtask queue⁡)» (термин V8).

// Как сказано в спецификации:
// * Очередь определяется как ⁡⁣⁣⁢первым-пришёл-первым-ушёл⁡ (⁡⁢⁣⁣FIFO⁡): задачи, попавшие в очередь первыми, ⁡⁣⁣⁢выполняются тоже первыми⁡.
// * Таким образом ⁡⁢⁣⁣.then/catch/finally⁡ вызываются после ⁡⁣⁣⁢выполнения текущего кода⁡.

// Если мы хотим ⁡⁣⁣⁢вывести код поочередно⁡ ⁡⁢⁣⁣код что выше⁡ будет выглядеть так:
let promise2 = Promise.resolve();
promise.then(() => console.log('Поочередное выполнение:', "Я номер 1"))
.then(() => console.log('Поочередное выполнение:', "Я номер 2"))