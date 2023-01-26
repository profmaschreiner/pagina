const User = require('../models/userModels');
// busca todos os usuários
exports.findAll = function(req, res){
    User.findAll(function(err, user){
        console.log("Controller user");
        if(err) res.send(err);
        console.log('res', user);
        res.send(user)
    })
};
// cria novo usuário
exports.create = function(req, res){
    //console.log(req.body)
    var newUser = new User(req.body);
    //console.log("teste1");
    //console.log(newUser);
    //console.log("teste2");
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error: true,
            message: "Forneça os dados para todos os campos"
        });
    } else {
        
        User.create(newUser, function(err, user){
            console.log("efhksadhfkjsd")
            if(err) 
                res.send(err);
            res.json({
                error: false,
                message: "Usuário adicionado com sucesso",
                data: user
            });
        });
    }
};
// busca por ID
exports.findById = function(req, res){
    User.findById(req.params.id, function(err, user){
        console.log("Controller user id ");
        if(err) res.send(err);
        console.log('res', user);
        res.send(user)
    })
};

exports.update = function(req, res){
    //console.log(req.params.id)
    //console.log(req.body)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error: true,
            message: "Forneça os dados para todos os campos"
        });
    } else {
        User.update(req.params.id, new User(req.body), function(err, user){
            if(err) res.send(err);
            res.json({
                error: false,
                message: "Usuário atualizado com sucesso"
            });
        });
    }
};

exports.delete = function(req, res){
    User.delete(req.params.id, function(err, user){
        if(err) res.send(err);
        res.json({
            error: false,
            message: "Usuário excluido com sucesso"
        });
    });
};