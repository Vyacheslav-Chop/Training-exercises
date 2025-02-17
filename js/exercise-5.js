const movieStore = {
  movies: [
    { title: 'Inception', price: 800 },
    { title: 'The Matrix', price: 600 },
    { title: 'Avatar' , price: 1200},
  ],

  getMovies() {
    return this.movies;
  },

  addMovie(newMovie) {
    this.movies.push(newMovie);
  },

  getTotalPrice() {
    let totalPrice = 0;
    for (const movie of this.movies) {
      totalPrice += movie.price;
    }
    return totalPrice;
  }
};



// Задача:
// Створіть об'єкт movieStore, який зберігає масив доступних фільмів. Кожен фільм має такі властивості:
// title — назва фільму.
// price — ціна фільму.
// Додайте метод getMovies(), який повертає всі фільми з масиву movies.
// Додайте метод addMovie(newMovie), який дозволяє додавати новий фільм до масиву movies.
// Додайте метод getTotalPrice(), який підраховує і повертає загальну суму цін всіх фільмів.
// Завдання:
// Створіть масив фільмів, де кожен фільм матиме назву та ціну.
// Використайте методи для:
// Додавання фільмів до списку.
// Отримання всіх фільмів.
// Підрахунку загальної вартості фільмів.
// Фільми для додавання:
// "Inception" — ціна: 800
// "The Matrix" — ціна: 600
// "Avatar" — ціна: 1200
// Завдання:
// Створіть ці фільми в масиві.
// Додайте методи для отримання всіх фільмів і підрахунку загальної суми цін.
// Перевірте результат для методу getTotalPrice() після додавання кількох фільмів.
