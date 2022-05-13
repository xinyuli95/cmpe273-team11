const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Javeed@123',
    // port: '',
    database: 'Stackoverflow',
});

db.connect(function (err) {
    if (err) throw err;
    console.log("MYSQL Connected");
});
module.exports = db;