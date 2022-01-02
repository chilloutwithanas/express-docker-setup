const express = require('express');

// get the client
const mysql = require('mysql2/promise');


const app = express();

let db;

async function go() {
    db = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'example',
        database: 'pets'
    })
    app.listen(3000); //http://localhost:3000
}

go();

app.get('/', async (req, res) => {
    //db gives an array of result and information about that query
    const [users] = await db.execute('SELECT * FROM users');
    console.log(users);
    res.send(`<h1>Hello! Welcom.</h1>`);
})

