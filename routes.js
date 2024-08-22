const express = require('express'); //imports express
const router = express.Router(); //a new instance of the router is created here
const model = require('./model'); //the functions in model are imported to be used here

// this route retrieves all books in the database
router.get('/books', async (req, res) => {
    try {
      const books = await model.getBooks(); //this is where the books are retrieved
      res.status(200).json(books); //the books are sent here with a successful status
    } catch (error) {
      res.status(500).json({ error: error.message }); //any error will send back an error message
    }
  });
  
  // this route adds a new book into the databse
  router.post('/books', async (req, res) => {
    try {
      const { title, author, genre } = req.body; //the request retrieves all book information provided by user
      const newBook = await model.addBook(title, author, genre);//the new book is added to the databse here
      res.status(201).json(newBook); //the new book and it's details are sent here  
    } catch (error) {
      res.status(500).json({ error: error.message }); //error message will be sent if any errors are encountered
    }
  });
  // this route updates an already existing book by use of its ID
  router.patch('/books/:id', async (req, res) => { //this route searches by ID for the book
    try {
      const { title, author, genre } = req.body; //this is where the books updated information is received
      const updatedBook = await model.updateBook(req.params.id, title, author, genre); //this is where the book information is updated
      if (updatedBook) {
        res.status(200).json(updatedBook); //if its successful the new book will be sent
      } else {
        res.status(404).json({ error: 'Unable to find requested book' }); //if the book is not found, an error will be sent
      }
    } catch (error) {
      res.status(500).json({ error: error.message });//if any other error is enountered, this error message will be sent
    }
  });
  // this route deletes a specific book by use of its ID
  router.delete('/books/:id', async (req, res) => { //the book is searched for here
    try {
      const deletedBook = await model.deleteBook(req.params.id); //the book is deleted here
      if (deletedBook) {
        res.status(200).json(deletedBook); //once deleted the book information will be sent 
      } else {
        res.status(404).json({ error: 'Unable to find requested book' }); //this will be sent if the book is unable to be found
      }
    } catch (error) {
      res.status(500).json({ error: error.message }); //if another error is encountered, this error message will be sent
    }
  });
  
  module.exports = router;