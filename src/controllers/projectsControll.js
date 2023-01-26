
const Projects = require('../models/projectsModels');
// busca todos os usuários

exports.findAll = function(req, res){
    Projects.findAll(function(err, proj){
        console.log("Controller Projects");
        if(err) res.send(err);
        console.log('res', proj);
        res.send(proj)
    });
};
