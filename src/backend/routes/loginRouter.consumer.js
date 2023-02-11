const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const result = { message: 'ok', email };
    res.status(200).json(result);
});