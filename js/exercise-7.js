function getEvenNumbersArray(min, max) {
  let array = [];

  if (min % 2 !== 0) {
    min++;
  }
  do {
    array.push(min);
    min += 2;
  } while (min <= max);

  return array;
}

// Завдання:
// Напиши функцію getEvenNumbersArray(min, max), яка приймає два числа (min і max). Функція має створити масив, що містить усі парні числа в діапазоні від min до max включно, використовуючи цикл do...while. Поверни цей масив.
// Приклад виклику:

console.log(getEvenNumbersArray(3, 10));
// Очікуваний результат:
// [4, 6, 8, 10]

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);
