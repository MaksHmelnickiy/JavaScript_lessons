// Для перебора коллекции ⁡⁢⁣⁣Map⁡ есть ⁡⁣⁢⁣3 метода⁡:

// ⁡⁢⁣⁣map.keys()⁡ – возвращает итерируемый объект по ключам,
// ⁡⁢⁣⁣map.values()⁡ – возвращает итерируемый объект по значениям,
// ⁡⁢⁣⁣map.entries()⁡ – возвращает итерируемый объект по парам вида [⁡⁣⁣⁢ключ, значение⁡], этот вариант используется по умолчанию в ⁡⁣⁣⁡⁢⁣⁣for..of⁡⁡.

  let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  console.log(recipeMap.keys())
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
  }
  
  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    console.log(entry); // огурец,500 (и так далее)
  }
