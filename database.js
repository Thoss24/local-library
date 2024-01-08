const { Client } = require('pg');

const client = new Client ({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Noodles11!",
  database: "thomas"
})

client.connect();

client.query('Select * from books', (err, res) => {
    if (!err) {
        console. log(res.rows)
    } else {
        console.log(err.message)
    }
})