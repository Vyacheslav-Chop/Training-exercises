// Задачка 1: Сума парних чисел (цикл for)
// Напишіть функцію, яка приймає масив чисел і повертає суму всіх парних чисел у цьому масиві. Якщо масив порожній, повертає 0.
// Приклад:
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
// console.log(sumEvenNumbers([])); // 0

// function calculateEvenSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (!(array[i] % 2)) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }

// console.log(calculateEvenSum([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
// console.log(calculateEvenSum([])); // 0

// Задачка 2: Перевірка на наявність парних чисел (цикл
// for...of)
// Напишіть функцію, яка перевіряє, чи є хоча б одне парне число в масиві. Якщо є — вивести 'Парне є', якщо ні — 'Парних немає'.
// Приклад:
// console.log(hasEvenNumber([1, 3, 5, 7])); // 'Парних немає'
// console.log(hasEvenNumber([2, 3, 5, 7])); // 'Парне є'

// function hasEvenNumber(array) {
//   for (const number of array) {
//     if (!(number % 2)) {
//       return 'Парне є';
//     }
//   }
//   return 'Парних немає';
// }
// console.log(hasEvenNumber([1, 3, 5, 7])); // 'Парних немає'
// console.log(hasEvenNumber([2, 3, 5, 7])); // 'Парне є'

// Задачка 3: Підрахунок чисел у масиві, що більші за 10 (цикл
// while)
// Напишіть функцію, яка рахує скільки чисел у масиві більші за 10, використовуючи цикл while.
// Приклад:
// console.log(countNumbersGreaterThanTen([1, 5, 12, 8, 20, 3])); // 3 (12, 20)
// console.log(countNumbersGreaterThanTen([1, 2, 3])); // 0

// function countNumbersGreaterThanTen(array) {
//   let count = 0;
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] > 10) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }
// console.log(countNumbersGreaterThanTen([1, 5, 12, 8, 20, 3])); // 3 (12, 20)
// console.log(countNumbersGreaterThanTen([1, 2, 3])); // 0

// Задачка 4: Пошук мінімального значення (цикл
// do...while)
// Напишіть функцію, яка знаходить мінімальне значення у масиві чисел, використовуючи цикл do...while. Якщо масив порожній, функція повинна повернути 'Масив порожній'.

// function findMinValue(array) {
//   if (array.length === 0) {
//     return 'Масив порожній';
//   };

//   let number = array[0];
//   let i = 1;
//   do {
//     if (array[i] < number) {
//       number = array[i];
//     }
//     i++;
//   } while (i < array.length);
//   return number;
// }

// // Приклад:
// console.log(findMinValue([5, 2, 9, 1, 7])); // 1
// console.log(findMinValue([])); // 'Масив порожній'

// Задачка 5: Пошук найбільшого числа на парних індексах (цикл
// for)
// Напишіть функцію, яка знаходить найбільше число серед елементів, що знаходяться на парних індексах. Якщо таких чисел немає, повертає 'Немає чисел на парних індексах'.

// function findMaxOnEvenIndexes(array) {
//   let newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!(i % 2)) {
//       newArr.push(array[i]);
//     };
//   };

//   if (newArr.length === 0) {
//     return 'Немає чисел на парних індексах';
//   };

//   let maxNumber = newArr[0];
//   for (let i = 0; i < newArr.length; i++) {
//     if (maxNumber < newArr[i]) {
//       maxNumber = newArr[i];
//     }
//   }

//   return maxNumber;
// }
// // Приклад:
// console.log(findMaxOnEvenIndexes([3, 8, 1, 4, 5, 6])); // 5
// console.log(findMaxOnEvenIndexes([1, 2, 3])); // 3

// Задачка 6: Масив чисел, які діляться на 3 (цикл
// for...of)
// Напишіть функцію, яка виводить в консоль всі числа, що діляться на 3 з масиву чисел.

// function getNumbersDivisibleBy3(array) {
//   let newArr = [];

//   for (const num of array) {
//     if (!(num % 3)) {
//       newArr.push(num);
//     }
//   }

//   if (newArr.length === 0) {
//     return 'Немає чисел, що діляться на 3';
//   }

//   return newArr;
// }

// // Приклад:
// console.log(getNumbersDivisibleBy3([1, 3, 4, 9, 15, 17])); // 3, 9, 15
// console.log(getNumbersDivisibleBy3([2, 4, 5, 7])); // немає чисел, що діляться на 3

// Задачка 7: Виведення числа в зворотному порядку (цикл
// for)
// Напишіть функцію, яка виводить числа масиву у зворотному порядку.

// function reverseNumbers(array) {
//   let newArr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArr.push(array[i]);
//   }
//   return newArr.join(', ');
// }

// // Приклад:
// console.log(reverseNumbers([1, 2, 3, 4, 5])); // 5, 4, 3, 2, 1
// console.log(reverseNumbers([6, 7, 8])); // 8, 7, 6

// Задачка 8: Видалення елементів з масиву (цикл
// while)
// Напишіть функцію, яка приймає масив чисел та видаляє всі парні числа.

// function removeEvenNumbers(array) {
//   let newArr = [];
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] % 2 !== 0) {
//       newArr.push(array[i]);
//     }
//     i++;
//   }
//   return newArr;
// }
// // Приклад:
// console.log(removeEvenNumbers([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
// console.log(removeEvenNumbers([2, 4, 6])); // []

// Задачка 9: Підсумок чисел, що діляться на 5 (цикл
// do...while)
// Напишіть функцію, яка підсумовує всі числа масиву, що діляться на 5, використовуючи цикл do...while.

// function sumDivisibleBy5(array) {
//   let sumOfNumbersDivisibleBy5 = 0;
//   let i = 0;
//   do {
//     if (!(array[i] % 5)) {
//       sumOfNumbersDivisibleBy5 += array[i];
//     }
//     i++;
//   } while (i < array.length);

//   return sumOfNumbersDivisibleBy5;
// }

// // Приклад:
// console.log(sumDivisibleBy5([5, 10, 20, 25])); // 60 (5 + 10 + 20 + 25)
// console.log(sumDivisibleBy5([7, 8, 9])); // 0

// Задачка 10: Перевірка на парність чисел (цикл for + розгалуження)
// Напишіть функцію, яка перевіряє, чи є парні числа в масиві. Якщо є хоча б одне парне число — вивести в консоль "Є парне число", якщо ні — "Парних чисел немає".

// function checkForEven(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (!(array[i] % 2)) {
//       console.log('Є парне число');
//       return;
//     }
//   }
//   console.log('Парних чисел немає');
// }

// // Приклад:
// console.log(checkForEven([1, 3, 5, 7])); // 'Парних чисел немає'
// console.log(checkForEven([2, 4, 6, 7])); // 'Є парне число'

// Задачка 11: Перевірка на найбільше число серед позитивних (цикл
// for + розгалуження)
// Напишіть функцію, яка знаходить найбільше число серед позитивних в масиві. Якщо в масиві немає жодного позитивного числа, функція повинна повернути 'Немає позитивних чисел'.

function findLargestPositive(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArr.push(array[i]);
    }
  }

  if (newArr.length === 0) {
    return 'Немає позитивних чисел';
  }

  let maxNum = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (maxNum < newArr[i]) {
      maxNum = newArr[i];
    }
  }
  return maxNum;
}

Приклад: console.log(findLargestPositive([3, -2, 8, -1])); // 8
console.log(findLargestPositive([-3, -2, -1])); // 'Немає позитивних чисел'

// Модуль 1: Змінні, типи, основи функцій
// Задача: Перевірка парності числа
// Напишіть функцію isEven(num), яка приймає число і повертає true, якщо число парне, і false — якщо непарне.
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// Задача: Привітання
// Напишіть функцію greet(name), яка приймає ім'я користувача і виводить в консоль привітання: Hello, [name]!
// console.log(greet("John")); // Hello, John!
// console.log(greet("Alice")); // Hello, Alice!
// Модуль 2: Розгалуження, логічні оператори, методи рядків, цикли
// Задача: Визначення максимального числа
// Напишіть функцію findMax(a, b, c), яка порівнює три числа і повертає максимальне.
// console.log(findMax(5, 9, 3)); // 9
// Задача: Перевірка на наявність підрядка
// Напишіть функцію containsSubstring(str, substring), яка перевіряє, чи є певний підрядок в рядку. Повертає true, якщо підрядок знайдено, інакше — false.
// console.log(containsSubstring("Hello World", "World")); // true
// console.log(containsSubstring("Hello World", "world")); // false
// Задача: Виведення парних чисел
// Напишіть функцію, яка приймає масив чисел і виводить в консоль тільки парні числа. Для цього використовуйте цикл for.
// printEvenNumbers([1, 2, 3, 4, 5, 6]); // 2, 4, 6
// Модуль 3: Масиви, методи масивів, ітерація по масиву, функції (частина 2)
// Задача: Підсумок чисел у масиві
// Напишіть функцію, яка приймає масив чисел і повертає їхню суму.
// console.log(sumArray([1, 2, 3, 4])); // 10
// Задача: Перевертання масиву
// Напишіть функцію, яка приймає масив і повертає новий масив, в якому елементи йдуть у зворотному порядку.
// console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
// Задача: Пошук найбільшого числа
// Напишіть функцію, яка приймає масив і знаходить найбільше число за допомогою циклу for.
// console.log(findMaxInArray([1, 5, 3, 9, 2])); // 9
// Модуль 4: Об'єкти, перебір об'єкта, масив об’єктів, методи об'єкта, spread і rest
// Задача: Оновлення об'єкта
// Створіть об'єкт, який містить ім'я, вік та хобі. Напишіть функцію, яка приймає цей об'єкт та додає до нього нове поле "місто".
// console.log(user); // { name: "John", age: 30, hobby: "reading", city: "New York" }
// Задача: Перебір масиву об'єктів
// Створіть масив об'єктів, де кожен об'єкт містить ім'я та вік. Напишіть функцію, яка виводить ім'я кожної особи старше 18 років.
// printAdults([{ name: "John", age: 30 }, { name: "Alice", age: 17 }, { name: "Bob", age: 25 }]); // John, Bob
// Задача: Копіювання об'єкта
// Напишіть функцію, яка приймає об'єкт і повертає його копію, використовуючи метод spread.
// console.log(newUser); // { name: "John", age: 30 }
// (edited)

// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }

//   static checkPrice(price) {
//     if (price > this.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
