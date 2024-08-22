// Function to load and display the list of books
async function loadBooks() {
    let response = await fetch('/api/books');  // Here the list of books is retrieved from the server
    let books = await response.json();  // The JSON response is parsed here in order to get the list of books

    let booksList = document.getElementById('booksList');
    booksList.innerHTML = ''; 

    // Loop through the books and display each
    books.forEach(function(book) {
        let listItem = document.createElement('li'); //a new list item is created here
        //here the specific 'sort by' functionality is set here
        listItem.textContent = `${book.title} by ${book.author} - ${book.genre}`;
        booksList.appendChild(listItem); //the list is then restructured based on the requirement
    });
}

// an event listener is used so that a book can be added using the form 
document.getElementById('addBookForm').addEventListener('submit', async function(event) {
    event.preventDefault();  //here the default behaviour is prevented in order to control what happens after submission of the form

    // Here the information provided by the user is retrieved
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;

    // Here the Fetch API is used to send a POST request to the server
    let response = await fetch('/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        //here the user provided data is converted to JSON then placed into the body of request
        body: JSON.stringify({ title: title, author: author, genre: genre }),
    });

    if (response.ok) {
        loadBooks();  // This will reload the list after the addition of the new book (if it was successful)
    }
});

// When the page loads, so do the list of books
loadBooks();