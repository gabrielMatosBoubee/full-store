const express = require('express');
const { emailValidation } = require('../midlleware/email.services');
const { passwordValidation } = require('../midlleware/password.services');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, async (req, res) => {
    const { email, password, username, cpf, cep, city, uf, rg } = req.body;
    const result = { message: 'register', email, password, username, cpf, cep, city, uf, rg };
    res.status(200).json(result);
});

module.exports = router;