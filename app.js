// this function handles the user login
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();  //here the default behaviour is prevented in order to control what happens after submission of the form

    // Here the username and password provided by the user are retrieved
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // The Fetch API is used here to send a POST request to the server for authentication
    let response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // here the user provided credentials are converted to JSON then placed into the body of request
        body: JSON.stringify({ username: username, password: password }),
    });

    if (response.ok) {
        let data = await response.json();
        localStorage.setItem('token', data.token);  // here the JWT token is stored in local storage
        alert('Login successful');  //here a confirmation alert is shown if login is successful
        loadBooks();  // the list of books is loaded after successful login
    } else {
        alert('Login failed');  // here an error message is shown if login fails
    }
});

// this function loads and display the list of books
async function loadBooks() {
    let token = localStorage.getItem('token');  // the JWT token is retrieved from local storage
    let response = await fetch('/api/books', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    });

    let books = await response.json();  // The JSON response is parsed here in order to get the list of books

    let booksList = document.getElementById('booksList');
    booksList.innerHTML = ''; 

    // this loops through the existing books to display them all
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

    // The JWT token is retrieved from local storage and included in the request headers
    let token = localStorage.getItem('token');  // the JWT token is retrieved from local storage

    // Here the Fetch API is used to send a POST request to the server
    let response = await fetch('/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // the token is included in the Authorization header
        },
        // here the user provided data is converted to JSON then placed into the body of request
        body: JSON.stringify({ title: title, author: author, genre: genre }),
    });

    if (response.ok) {
        loadBooks();  // This will reload the list after the addition of the new book (if it was successful)
    }
});

// When the page loads, so does the list of books
loadBooks();
