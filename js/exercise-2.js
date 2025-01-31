function rentCar(country, days, budget) {
  let pricePerDay;

  switch (country) {
    case 'Germany':
      pricePerDay = 45;
      break;
    case 'USA':
      pricePerDay = 50;
      break;
    case 'France':
      pricePerDay = 55;
      break;
    case 'Japan':
      pricePerDay = 60;
      break;
    case 'India':
      pricePerDay = 30;
      break;

    default:
      return `Sorry, car rental is not available in ${country}.`;
  }

  const totalPrice = days * pricePerDay;
  const remainingCredits = budget - totalPrice;

  if (remainingCredits >= 0) {
    return `Car rental confirmed! The total cost for ${days} days in ${country} is ${totalPrice} credits. You have ${remainingCredits} credits left.`;
  } else {
    const missingCredits = -remainingCredits;
    return `Sorry, you need ${missingCredits} more credits to rent a car in ${country} for ${days} days.`;
  }
}

// Оголоси функцію rentCar(country, days, budget), яка перевірятиме вартість оренди авто в різних країнах, підраховуватиме загальну ціну за певну кількість днів і перевірятиме, чи вистачає користувачеві коштів. Обов'язково використовуй switch.
//  Формат рядка, що повертається:
// Якщо коштів вистачає:
// "Car rental confirmed! The total cost for <days> days in <country> is <totalPrice> credits. You have <remainingCredits>(це сума грошей, яка залишиться у користувача після оплати оренди авто) credits left."
// Якщо коштів не вистачає:
// "Sorry, you need <missingCredits>(це сума грошей, якої не вистачає для оренди) more credits to rent a car in <country> for <days> days."
// Якщо країна відсутня у списку:
// "Sorry, car rental is not available in <country>."
//  Список країн і ціна оренди авто за один день:
// USA — 50 кредитів
// Germany — 45 кредитів
// France — 55 кредитів
// Japan — 60 кредитів
// India — 30 кредитів
// Функція приймає три параметри:
// country — назва країни (рядок)
// days — кількість днів оренди (число)
// budget — бюджет користувача (число)
// Якщо країна відсутня у списку, функція повинна повернути рядок:
// "Sorry, car rental is not available in <country>."
// Результати, які очікуються:
console.log(rentCar('USA', 5, 300)); // "Car rental confirmed! The total cost for 5 days in USA is 250 credits. You have 50 credits left."
console.log(rentCar('Germany', 3, 200)); // "Car rental confirmed! The total cost for 3 days in Germany is 135 credits. You have 65 credits left."
console.log(rentCar('India', 7, 250)); // "Car rental confirmed! The total cost for 7 days in India is 210 credits. You have 40 credits left."
console.log(rentCar('Japan', 4, 200)); // "Sorry, you need 40 more credits to rent a car in Japan for 4 days."
console.log(rentCar('France', 2, 80)); // "Sorry, you need 30 more credits to rent a car in France for 2 days."
console.log(rentCar('Brazil', 3, 200)); // "Sorry, car rental is not available in Brazil."
console.log(rentCar('Canada', 5, 500)); // "Sorry, car rental is not available in Canada."
