class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create element
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.isbn}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a id=${book.isbn} href="#" class="delete">X</a></td>
        `;
    list.appendChild(row);
  }
  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(div, heading);
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 2000);
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
  static checkIsbn(isbn) {
    let isExist = false;
    const isbnStore = Store.getBooks();
    isbnStore.forEach(isbnOnStore => {
      if (isbn === isbnOnStore.isbn) {
        isExist = true;
      }
    });
    return isExist;
  }
}
// DOM Load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
// Event Listener
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  const isIsbn = Store.checkIsbn(isbn);

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill the form', 'danger');
  } else {
    if (isIsbn === true) {
      ui.showAlert(`ISBN : ${isbn} already exist`, 'danger');
    } else {
      ui.addBookToList(book);
      ui.showAlert('Book added', 'success');
      Store.addBook(book);
    }
    ui.clearFields();
  }
});

// Event Listener - for delete (event delegation)
document.getElementById('book-list').addEventListener('click', function (e) {
  e.preventDefault();
  const ui = new UI();
  if (confirm('Are you sure?')) {
    ui.deleteBook(e.target);
    Store.removeBook(e.target.id);
    ui.showAlert('Book deleted', 'success');
  }
});
