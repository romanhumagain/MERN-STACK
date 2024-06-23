// scripts.js

// Initialize an array to store the book list
let books = [];

// Function to display books
function displayBooks(filter = '') {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));

    filteredBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.className = book.favorite ? 'favorite' : '';
        li.innerHTML = `
            <span>${book.title}</span>
            <button onclick="selectBook(${index})">Select</button>
        `;
        bookList.appendChild(li);
    });
}

// Function to add a new book
function addBook() {
    const bookTitle = document.getElementById('book-title').value;
    if (bookTitle.trim()) {
        books.push({ title: bookTitle, favorite: false });
        document.getElementById('book-title').value = '';
        displayBooks();
    }
}

// Function to remove a selected book
function removeBook() {
    const selectedIndex = getSelectedBookIndex();
    if (selectedIndex !== -1) {
        books.splice(selectedIndex, 1);
        displayBooks();
    }
}

// Function to mark a selected book as favorite
function markFavorite() {
    const selectedIndex = getSelectedBookIndex();
    if (selectedIndex !== -1) {
        books[selectedIndex].favorite = !books[selectedIndex].favorite;
        displayBooks();
    }
}

// Utility function to get the index of the selected book
function getSelectedBookIndex() {
    const selectedButton = document.querySelector('#book-list button.selected');
    if (selectedButton) {
        return Array.from(selectedButton.parentNode.parentNode.children).indexOf(selectedButton.parentNode);
    }
    return -1;
}

// Function to select a book
function selectBook(index) {
    document.querySelectorAll('#book-list button').forEach((button, btnIndex) => {
        button.classList.toggle('selected', btnIndex === index);
    });
}

// Function to handle search input
document.getElementById('search').addEventListener('input', (event) => {
  displayBooks(event.target.value);
});

// Initial display of books
// displayBooks();