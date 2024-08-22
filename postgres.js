const { Pool } = require('pg');

//parses the Postgres connection details as shown
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

//exports the query method
module.exports = {
  query: (text, params) => pool.query(text, params),
};