const mysql = require("mysql");
const config = {
    secret: "cmpe273_secret_key",
    frontendURL: "http://localhost:3000",
    mongoDB: 'mongodb+srv://admin:<password>@<cluster_id>.mongodb.net/<collection>?retryWrites=true&w=majority',

    sqlDB: mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        // port: '',
        database: 'EtsyDatabase',
    })
};


module.exports = config;