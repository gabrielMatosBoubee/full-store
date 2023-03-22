const express = require('express');
const controller = require('../controller')

const router = express.Router();

router.get('/', controller.product.getAll);

router.post('');

module.exports = router;