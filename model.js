const db = require('./postgres'); //imports the database connection

//the function for retrieving all of the books from the database
async function getBooks() {
  const result = await db.query('SELECT * FROM books');
  return result.rows;
} 

//the function for adding a new book to the databse
async function addBook(title, author, genre) {
    const result = await db.query(
      'INSERT INTO books (title, author, genre) VALUES ($1, $2, $3) RETURNING *',
      [title, author, genre]
    );
    return result.rows[0];
  }

  //the function for updating an existing book in the database
  async function updateBook(id, title, author, genre) {
    const result = await db.query(
      'UPDATE books SET title = $1, author = $2, genre = $3 WHERE id = $4 RETURNING *',
      [title, author, genre, id]
    );
    return result.rows[0];
  }

  //the function for deleting a specific book from the databse by using its id
  async function deleteBook(id) {
    const result = await db.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
  
  module.exports = { getBooks, addBook, updateBook, deleteBook };