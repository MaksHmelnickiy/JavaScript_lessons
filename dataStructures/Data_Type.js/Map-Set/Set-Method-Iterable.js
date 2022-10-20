// ⁡⁣⁣⁢Set⁡ имеет те же встроенные методы, что и ⁡⁣⁣⁢Map⁡:

// ⁡⁢⁣⁣set.values()⁡ – возвращает перебираемый объект для значений,
// ⁡⁢⁣⁣set.keys()⁡ – то же самое, что и ⁡⁢⁣⁣set.values()⁡, присутствует для обратной совместимости с Map,
// ⁡⁢⁣⁣set.entries()⁡ – возвращает перебираемый объект для пар вида ⁡⁣⁢⁣[значение, значение]⁡, 
// присутствует для обратной совместимости с Map.

// Мы можем ​‌‍‌⁡⁣⁣⁢перебрать⁡​ содержимое объекта ⁡⁢⁣⁣set⁡ как с помощью метода ⁡⁢⁣⁣for..of⁡, так и используя ⁡⁢⁣⁣forEach⁡:

let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set.entries()) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});