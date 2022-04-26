const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DBPASS,
    database: 'todotaskmanager'
})

module.exports = connection
