function getHotelPrice(country, nights) {
  let pricePerNight;
  switch (country) {
    case 'USA':
      pricePerNight = 200;
      break;
    case 'Germany':
      pricePerNight = 180;
      break;
    case 'France':
      pricePerNight = 220;
      break;
    case 'Japan':
      pricePerNight = 250;
      break;
    case 'India':
      pricePerNight = 90;
      break;

    default:
      return `Sorry, we have no hotels in ${country}.`;
  }
  const totalPrice = nights * pricePerNight;
  return `The total cost of staying in ${country} for ${nights} nights is ${totalPrice} credits.`;
}

// Оголоси функцію getHotelPrice(country, nights), яка перевірятиме вартість проживання в готелі в різних країнах та підраховуватиме загальну ціну за певну кількість ночей. Обов'язково використовуй switch.
// Формат рядка:
// "The total cost of staying in <country> for <nights> nights is <totalPrice> credits",
// де <country>, <nights> і <totalPrice> підставляються відповідно до введених значень.
// Список країн і ціна за одну ніч у готелі:
// USA — 200 кредитів
// Germany — 180 кредитів
// France — 220 кредитів
// Japan — 250 кредитів
// India — 90 кредитів
// Якщо країна відсутня у списку, то функція повинна повертати рядок:
// "Sorry, we have no hotels in <country>".
console.log(getHotelPrice('USA', 3)); // "The total cost of staying in USA for 3 nights is 600 credits"
console.log(getHotelPrice('Japan', 5)); // "The total cost of staying in Japan for 5 nights is 1250 credits"
console.log(getHotelPrice('India', 2)); // "The total cost of staying in India for 2 nights is 180 credits"
console.log(getHotelPrice('Brazil', 4)); // "Sorry, we have no hotels in Brazil"
