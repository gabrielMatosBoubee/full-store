const express = require('express');
const controller = require('../controller')
const middleware = require('../middleware')

const router = express.Router();

router.get('/', controller.product.getAll);

router.get('/:id', controller.product.getOne);

router.post('/', middleware.productValidation,
    middleware.categoriesValidation, controller.product.insertProduct)

router.put('/:id', middleware.productValidation, middleware.categoriesValidation,
    middleware.existProduct, controller.product.updateProduct)

module.exports = router;