let dbConn = require('../../config/dbConfig');
//Criar objeto projeto
let Projects = function(project){
    this.id = project.id;
    this.usuario = project.nome;
    this.senha = project.descricao;
};

Projects.findAll = function(result){
    dbConn.query("SELECT p.nome, p.descricao  FROM projetos p;", function(err,res){
        if (err){
            result(err,null);
        } else {
            result(null, res);
        }
    });
};


module.exports = Projects;

