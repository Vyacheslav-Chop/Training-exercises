const cars = [
  { brand: 'Toyota', model: 'Corolla', price: 15000, quantity: 5 },
  { brand: 'Honda', model: 'Civic', price: 18000, quantity: 3 },
  { brand: 'Ford', model: 'Focus', price: 17000, quantity: 4 },
  { brand: 'BMW', model: 'X5', price: 50000, quantity: 2 },
];

function getCarModels(brand) {
  const carModels = [];

  for (let car of cars) {
    if (car.brand === brand) {
      carModels.push(car.model);
    }
  }

  return carModels;
}

function calculateCarTotalPrice(model) {
  for (let car of cars) {
    if (car.model === model) {
      return car.price * car.quantity;
    }
  }
  return `${model} not found!`;
}

// У тебе є масив об'єктів cars, де кожен об'єкт містить інформацію про авто:
// const cars = [
//   { brand: "Toyota", model: "Corolla", price: 15000, quantity: 5 },
//   { brand: "Honda", model: "Civic", price: 18000, quantity: 3 },
//   { brand: "Ford", model: "Focus", price: 17000, quantity: 4 },
//   { brand: "BMW", model: "X5", price: 50000, quantity: 2 }
// ];
// Твоє завдання:
// Написати функцію getCarModels(brand), яка приймає назву бренду (brand) і повертає масив моделей цього бренду.
// Якщо бренд є в масиві, поверни масив моделей.
// Якщо такого бренду немає, поверни пустий масив [].
// Написати функцію calculateCarTotalPrice(model), яка приймає назву моделі (model) і повертає загальну вартість всіх авто цієї моделі (ціна * кількість).
// Якщо модель є в масиві — поверни вартість.
// Якщо моделі немає — поверни "Model not found!".
// Приклад роботи:
console.log(getCarModels('Toyota')); // ["Corolla"]
console.log(getCarModels('Honda')); // ["Civic"]
console.log(getCarModels('Mercedes')); // []

console.log(calculateCarTotalPrice('Civic')); // 54000 (18000 * 3)
console.log(calculateCarTotalPrice('Focus')); // 68000 (17000 * 4)
console.log(calculateCarTotalPrice('Tesla')); // "Model not found!"
