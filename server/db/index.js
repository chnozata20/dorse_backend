const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "1234",
    user: "root",
    database: "dorsedb",
    host: "localhost",
    port: "3306"
});

module.exports=pool;
