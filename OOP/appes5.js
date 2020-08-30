// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // Create element
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.isbn}</td>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};

UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(div, heading);
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2000);
};

// Event Listener
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill the form', 'danger');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book added', 'success');
    ui.clearFields();
  }
});

// Event Listener - for delet (event delegation)
document.getElementById('book-list').addEventListener('click', function (e) {
  e.preventDefault();
  const ui = new UI();
  if (confirm('Are you sure?')) {
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted', 'success');
  }
});
