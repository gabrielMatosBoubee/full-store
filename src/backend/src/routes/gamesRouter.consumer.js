const express = require('express');
const services = require('../services')

const router = express.Router();

router.get('/', async (_req, res) => {
    const { type, message } = await services.product.getOne({ id: 1 })
    res.status(type).json(message);
});

router.post('');

module.exports = router;