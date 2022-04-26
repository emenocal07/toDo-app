const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fichico07',
    database: 'todotaskmanager'
})

module.exports = connection
