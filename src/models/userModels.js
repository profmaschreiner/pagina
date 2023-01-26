let dbConn = require('../../config/dbConfig');
//Criar objeto usuario
let User = function(user){
    this.id = user.id;
    this.usuario = user.usuario;
    this.senha = user.senha;
};

User.findAll = function(result){
    dbConn.query("SELECT * FROM usuario", function(err,res){
        if (err){
            result(err,null);
        } else {
            result(null, res);
        }
    })
}

User.findById = function(id, result){
    dbConn.query("SELECT * FROM usuario WHERE id = ?", id, function(err,res){
        if (err){
            result(err, null)
        } else {
            result(null, res);
        }
    })
}


User.create = function(newUser, result){
    dbConn.query("INSERT INTO usuario SET ?", newUser, function(err, res){
        if(err){
            console.log("Erro: ",);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};

User.update = function(id, user, result){
    //console.log(id);
    //console.log(user);
    dbConn.query("UPDATE usuario SET usuario = ?, senha = ? WHERE id = ?", [user.usuario, user.senha, id],
    function(err, res){ // deveria dar erro, mas não deu
        if(err){
            result(err,null);
        } else {
            result(null, res);
        }
    });
};

User.delete = function(id, result){
    dbConn.query("DELETE FROM usuario WHERE id = ?", id, function(err,res){
        if (err){
            result(err, null)
        } else {
            result(null, res);
        }
    });
};

module.exports = User;