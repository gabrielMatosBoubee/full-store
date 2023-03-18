const express = require('express');
const middleware = require('../middleware')
const controller = require('../controller')

const router = express.Router();

router.get('/', controller.category.getAll)

module.exports = router