require('dotenv').config(); //loads environment variables from .env file
const express = require('express'); //for importing express

const app = express(); //initializes express

app.use(express.json()); //this is used to parse requests

const routes = require('./routes'); //imports the routes defined in routes.js

app.use(routes); //applies the routes without a specific path prefix

app.use(express.static('public')); //serves static files from the 'public' directory

//starts the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
