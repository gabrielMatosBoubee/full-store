const express = require('express');
const middleware = require('../middleware')
const controller = require('../controller')

const router = express.Router();

router.get('/', controller.category.getAll)

router.post('/', controller.category.insertCategory)

module.exports = router