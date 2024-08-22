const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/books', async (req, res) => {
    try {
      const books = await model.getBooks();
      res.status(200).json(books); 
    } catch (error) {
      res.status(500).json({ error: error.message });  
    }
  });
  
  
  router.post('/books', async (req, res) => {
    try {
      const { title, author, genre } = req.body;
      const newBook = await model.addBook(title, author, genre);
      res.status(201).json(newBook);  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.patch('/books/:id', async (req, res) => {
    try {
      const { title, author, genre } = req.body;
      const updatedBook = await model.updateBook(req.params.id, title, author, genre);
      if (updatedBook) {
        res.status(200).json(updatedBook);
      } else {
        res.status(404).json({ error: 'Unable to find requested book' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.delete('/books/:id', async (req, res) => {
    try {
      const deletedBook = await model.deleteBook(req.params.id);
      if (deletedBook) {
        res.status(200).json(deletedBook); 
      } else {
        res.status(404).json({ error: 'Unable to find requested book' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;