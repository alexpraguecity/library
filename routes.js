const express = require('express'); //imports express
const router = express.Router(); //a new instance of the router is created here
const model = require('./model'); //the functions in model are imported to be used here
const jwt = require('jsonwebtoken');

// this is the authentication token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // No token provided

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
};

// Middleware to authorize based on role
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Access denied' }); // Role not authorized
    }
    next(); // Proceed to the next middleware or route handler
  };
};

// this route allows the user to log in
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // the specific user data is retrieved from the database
    const user = await model.getUserByUsername(username);
    // if the user is not found the error message is shown
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }
    //if the password is incorrect this error message is shown
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // JWT is generated here for the sign in with set duration
    const token = jwt.sign({ username: user.username, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token });
    // if any other error occurs, this error message is shown
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// this route retrieves all books in the database (accessible by both roles)
router.get('/books', authenticateToken, async (req, res) => {
  try {
    const books = await model.getBooks(); //this is where the books are retrieved
    res.status(200).json(books); //the books are sent here with a successful status
  } catch (error) {
    res.status(500).json({ error: error.message }); //any error will send back an error message
  }
});

// this route adds a new book into the database (Librarian only)
router.post('/books', authenticateToken, authorizeRole('librarian'), async (req, res) => {
  try {
    const { title, author, genre } = req.body; //the request retrieves all book information provided by user
    const newBook = await model.addBook(title, author, genre); //the new book is added to the database here
    res.status(201).json(newBook); //the new book and its details are sent here  
  } catch (error) {
    res.status(500).json({ error: error.message }); //error message will be sent if any errors are encountered
  }
});

// this route updates an already existing book by use of its ID (Librarian only)
router.patch('/books/:id', authenticateToken, authorizeRole('librarian'), async (req, res) => {
  try {
    const { title, author, genre } = req.body; //this is where the book's updated information is received
    const updatedBook = await model.updateBook(req.params.id, title, author, genre); //this is where the book information is updated
    if (updatedBook) {
      res.status(200).json(updatedBook); //if successful, the updated book will be sent
    } else {
      res.status(404).json({ error: 'Unable to find requested book' }); //if the book is not found, an error will be sent
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); //if any other error is encountered, this error message will be sent
  }
});

// this route deletes a specific book by use of its ID (Librarian only)
router.delete('/books/:id', authenticateToken, authorizeRole('librarian'), async (req, res) => {
  try {
    const deletedBook = await model.deleteBook(req.params.id); //the book is deleted here
    if (deletedBook) {
      res.status(200).json(deletedBook); //once deleted, the book information will be sent
    } else {
      res.status(404).json({ error: 'Unable to find requested book' }); //this will be sent if the book is unable to be found
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); //if another error is encountered, this error message will be sent
  }
});

module.exports = router;
