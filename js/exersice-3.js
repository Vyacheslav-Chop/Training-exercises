function calculateFoodCost(foodType, quantity, budget) {
  let pricePerFood;

  switch (foodType) {
    case 'Pizza':
      pricePerFood = 10;
      break;
    case 'Burger':
      pricePerFood = 5;
      break;
    case 'Sushi':
      pricePerFood = 15;
      break;
    case 'Pasta':
      pricePerFood = 8;
      break;
    case 'Salad':
      pricePerFood = 4;
      break;

    default:
      return `Sorry, we don't sell ${foodType}.`;
  }

  quantity = Number.parseFloat(quantity);
  budget = Number.parseFloat(budget);

  if (quantity !== quantity || budget !== budget) {
    return `Both quantity and budget must be valid numbers.`;
  }

  const totalCost = quantity * pricePerFood;
  const remainingCredits = budget - totalCost;

  if (remainingCredits >= 0) {
    return `Food purchase confirmed! The total cost for ${quantity} ${foodType}(s) is ${totalCost} credits. You have ${remainingCredits} credits left.`;
  } else {
    const missingCredits = -remainingCredits;
    return `Sorry, you need ${missingCredits} more credits to purchase ${quantity} ${foodType}(s).`;
  }
}

// /Оголоси функцію calculateFoodCost(foodType, quantity, budget), яка обчислюватиме загальну вартість їжі та перевірятиме, чи вистачає у користувача коштів на покупку. Крім того, якщо замість числа введено нечислові значення для quantity або budget, вони мають бути перетворені на числа, а якщо це неможливо, повернути повідомлення про помилку.
// Список продуктів і ціни за одиницю:
// Pizza — 10 кредитів
// Burger — 5 кредитів
// Sushi — 15 кредитів
// Pasta — 8 кредитів
// Salad — 4 кредити
// Параметри функції:
// foodType — тип їжі (рядок),
// quantity — кількість одиниць їжі (число),
// budget — бюджет користувача (число),
// totalCost -  вартість вибранної їжі,
// remainingCredits - це сума грошей, яка залишиться у користувача після оплати,
// missingCredits - це сума грошей, якої не вистачає для покупки.
// Завдання:
// Якщо користувач ввів нечислові значення для quantity або budget, треба перетворити їх на числа. Якщо перетворення не вдалося (наприклад, введено текст замість числа), потрібно повернути повідомлення: "Both quantity and budget must be valid numbers."
// Якщо тип їжі відсутній у списку, вивести повідомлення: "Sorry, we don't sell <foodType>."
// Якщо коштів вистачає, вивести: "Food purchase confirmed! The total cost for <quantity> <foodType>(s) is <totalCost> credits. You have <remainingCredits> credits left."
// Якщо коштів не вистачає, вивести: "Sorry, you need <missingCredits> more credits to purchase <quantity> <foodType>(s)."

console.log(calculateFoodCost('Pizza', 3, 30)); // "Food purchase confirmed! The total cost for 3 Pizza(s) is 30 credits. You have 0 credits left."
console.log(calculateFoodCost('Burger', 5, 20)); // "Food purchase confirmed! The total cost for 5 Burger(s) is 25 credits. You have -5 credits left."
console.log(calculateFoodCost('Sushi', 2, '50')); // "Food purchase confirmed! The total cost for 2 Sushi(s) is 30 credits. You have 20 credits left."
console.log(calculateFoodCost('Pasta', 5, 'abc')); // "Both quantity and budget must be valid numbers."
console.log(calculateFoodCost('Salad', 10, 30)); // "Sorry, you need 10 more credits to purchase 10 Salad(s)."
console.log(calculateFoodCost('Ice Cream', 2, 20)); // "Sorry, we don't sell Ice Cream."
