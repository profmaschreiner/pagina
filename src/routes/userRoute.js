const express = require('express');
const router = express.Router();
const userControll = require('../controllers/userControll');

router.get('/',userControll.findAll);
router.get('/:id',userControll.findById);
router.post('/',userControll.create);
router.put('/:id',userControll.update);
router.delete('/:id',userControll.delete);

module.exports = router;