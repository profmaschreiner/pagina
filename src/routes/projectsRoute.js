const express = require('express');
const router = express.Router();
const projectsControll = require('../controllers/projectsControll');

router.get('/',projectsControll.findAll);


module.exports = router;