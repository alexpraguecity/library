require('dotenv').config(); //loads environment variables from .env file
const express = require('express'); //for importing express
const path = require('path'); //for working with file and directory paths

const app = express(); //initializes express

app.use(express.json()); //this is used to parse requests

const routes = require('./routes'); //imports the routes defined in routes.js

app.use(routes); //applies the routes without a specific path prefix

app.use(express.static(__dirname)); //serves static files from the current directory

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname }); //serves the index.html file for the root URL since an error was repeated
});

//starts the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});