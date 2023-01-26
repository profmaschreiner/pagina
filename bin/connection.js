let mysql = require('mysql2');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'marcosantonio',
    password : 'mbs2mvb8',
    database : 'teste'
});

connection.connect();
// query retorna uma (erro, resultado, campos)
connection.query("SELECT * FROM usuario;", function(err, result, fields){
    if (err) throw err;
    Object.keys(result).forEach(function(key){
        var row = result[key];
        console.log(row.usuario)
    });
});
connection.end();