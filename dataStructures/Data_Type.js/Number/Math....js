// В JavaScript встроен объект ⁡⁢⁣⁣Math⁡, который содержит различные математические функции и константы.
// Одна из часто используемых операций при работе с числами – ⁡⁢⁣⁣это округление⁡⁡.
// В JavaScript есть несколько ⁡⁣⁣⁢встроенных функций для работы с округлением⁡:

// ⁡⁢⁣⁣Math.floor⁡
// Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
// ⁡⁢⁣⁣Math.ceil⁡
// Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
// ⁡⁢⁣⁣Math.round⁡
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
// ⁡⁢⁣⁣Math.trunc⁡ (не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.

// ⁡⁢⁣⁣Math.random()⁡ Возвращает псевдослучайное число в диапазоне от ⁡⁣⁢⁣0⁡ (включительно) до ⁡⁣⁢⁣1⁡ (но не включая ⁡⁣⁢⁣1⁡)
let mathRandom = Math.random()
let result = mathRandom * 100; // ⁡⁢⁣⁣Формула⁡ что бы получить целое число от ⁡⁣⁢⁣0⁡ до ⁡⁣⁢⁣99⁡
console.log('Math.random()',  Math.round(result) ) // Выводим и округляем случайное полученное число

// ⁡⁢⁣⁣Math.max(a, b, c...)⁡ / ⁡⁢⁣⁣Math.min(a, b, c...)⁡ Возвращает наибольшее/наименьшее число из перечисленных аргументов.
console.log('Math.max', Math.max(3, 5, -10, 0, 1) ); // 5
console.log('Math.min', Math.min(3,7,2)) // 2

// ⁡⁢⁣⁣Math.pow(n, power)⁡ Возвращает число ⁡⁢⁣⁣n⁡, возведённое в степень ⁡⁢⁣⁣power⁡
console.log('Math.pow', Math.pow(2, 3)) // 8 / Как двойка в третьей степени или ⁡⁢⁣⁢(2*2*2)