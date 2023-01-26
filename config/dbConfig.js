const mysql = require('mysql2');
// criar arquivo base para confiurações. É mais seguro
const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'marcosantonio',
    password : 'R@nd0m1c@',
    database : 'mydb'
});

dbConn.connect(function(err){
    if (err) throw err;
    console.log("Banco de Dados Conectado");
});

module.exports = dbConn;