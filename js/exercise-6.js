const books = [
  { title: '', author: '', pages: 0, available: true },
  { title: '', author: '', pages: 0, available: false },
];

function getAvailableBooks() {
  let bookTitles = [];
  for (const book of books) {
    if (book.available === true) {
      bookTitles.push(book.title);
    }
  }
  return bookTitles;
}

function findBookByTitle(title) {
  for (const book of books) {
    if (title === book.title) {
      return book;
    }
  }
  return 'Book not found!';
}

function countTotalPages() {
  let totalPages = 0;
  for (const book of books) {
    totalPages += book.pages;
  }
  return totalPages;
}
// Завдання:
// Уявімо, що ти розробляєш систему для управління бібліотекою. Створи масив об'єктів books, де кожен об'єкт містить такі властивості:
// title (рядок) — назва книги.
// author (рядок) — автор книги.
// pages (число) — кількість сторінок.
// available (булеве значення) — чи доступна книга для видачі.
// Твоє завдання:
// Написати функцію getAvailableBooks(), яка повертає масив назв книг, які доступні (available: true).
// Написати функцію findBookByTitle(title), яка шукає книгу за назвою (title). Якщо така книга є — поверни об'єкт із її інформацією, якщо немає — "Book not found!".
// Написати функцію countTotalPages(), яка повертає загальну кількість сторінок у всіх книгах.
// Приклад виклику функцій:
console.log(getAvailableBooks());
// Може повернути: ["Гаррі Поттер", "1984"]

console.log(findBookByTitle('1984'));
// Якщо є, поверне: { title: "1984", author: "Джордж Орвелл", pages: 328, available: false }
// Якщо немає, поверне: "Book not found!"

console.log(countTotalPages());
// Припустимо, якщо в масиві 3 книги по 200, 300 і 150 сторінок, поверне 650.
