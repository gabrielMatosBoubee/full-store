const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password, username, cpf, cep, city, uf, rg } = req.body;
    const result = { message: 'register', email, password, username, cpf, cep, city, uf, rg };
    res.status(200).json(result);
});