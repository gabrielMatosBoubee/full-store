const express = require('express');
const services = require('../services')

const router = express.Router();

router.get('/', async (_req, res) => {
    const { type, message } = await services.product.updateProduct({ productName: 'okok', productPrice: 99.99, discountPercent: 0, categories: [1, 2,], image: null, id: 14 })
    res.status(type).json(message);
});

router.post('');

module.exports = router;