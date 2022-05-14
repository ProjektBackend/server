const mysql = require("mysql");

 const dataBase = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "projekt"

})

module.exports = dataBase;
