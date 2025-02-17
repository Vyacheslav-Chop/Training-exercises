const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Phone', price: 800 },
  { name: 'Headphones', price: 150 },
  { name: 'Monitor', price: 400 },
  { name: 'Keyboard', price: 100 },
];

const expensiveProducts = products.filter(product => product.price > 500);
const productPrices = products.map(product => product.price);
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);



// Завдання:
// У тебе є масив об'єктів, де кожен об'єкт містить інформацію про товар: його назву та ціну.
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Headphones", price: 150 },
//   { name: "Monitor", price: 400 },
//   { name: "Keyboard", price: 100 }
// ];
// Завдання:
// Використовуй метод
// map, щоб створити новий масив з усіма цінами товарів.
// Використовуй метод reduce, щоб знайти загальну суму всіх товарів.
// Використовуй метод filter, щоб створити масив товарів, ціна яких більше за 500.
// Підказка:
// Для методу map подумай, як витягти ціну кожного товару.
// Для методу reduce подумай, як по черзі додавати кожну ціну до загальної суми.
// Для методу filter подумай, як перевірити умову для кожного товару.


