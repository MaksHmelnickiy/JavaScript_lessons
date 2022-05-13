// Композиция генераторов – это особенная возможность генераторов, которая позволяет прозрачно «встраивать» генераторы друг в друга.

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);  // используется генератор на строке 3 и результат будет 48,49,50 и т.д.
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  console.log(str); // 0..9A..Za..z