require('dotenv').config();
const express = require('express'); //for importing express

const app = express(); //initializes express

app.use(express.json()); //this is used to parse requests

//starts the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
}
);