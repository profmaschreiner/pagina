const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
router.get('/', function(req,res,next){
    res.status(200,).send({
        title: "Node Express API",
        version: "16.17.2"
    });
});

module.exports = router;
