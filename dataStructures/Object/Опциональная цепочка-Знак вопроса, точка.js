// Опциональная цепочка ⁡⁢⁣⁣?.⁡ — это ⁡⁣⁣⁢безопасный способ доступа к свойствам вложенных объектов⁡, 
// даже если какое-либо из промежуточных свойств не существует.

// Как было сказано ранее, ⁡⁢⁣⁣?.⁡ немедленно останавливает вычисление, если левая часть не существует.
// Так что если после ⁡⁢⁣⁣?.⁡ есть какие-то вызовы функций или операции, то они не произойдут.

let user = null;

alert( user?.address ); // undefined


// Мы можем использовать ⁡⁢⁣⁣?.⁡ для ⁡⁣⁣⁢безопасного⁡ чтения и удаления,⁡⁣⁢⁣ но не для записи⁡ /

let person = null;

person?.name = "John"; // Ошибка, не работает
// то же самое что написать undefined = "John"