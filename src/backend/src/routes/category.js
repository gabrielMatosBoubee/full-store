const express = require('express');
const middleware = require('../middleware')
const controller = require('../controller')

const router = express.Router();

router.get('/', controller.category.getAll);

router.post('/', middleware.validateToken, middleware.hasAuthorization,
    middleware.categoryValidation, controller.category.insertCategory);

router.put('/:id', middleware.validateToken, middleware.hasAuthorization,
    middleware.categoryValidation, middleware.idValidation,
    controller.category.updateCategory);

module.exports = router