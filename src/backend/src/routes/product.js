const express = require('express');
const controller = require('../controller')

const router = express.Router();

router.get('/', controller.product.getAll);

router.get('/:id', controller.product.getOne);

module.exports = router;