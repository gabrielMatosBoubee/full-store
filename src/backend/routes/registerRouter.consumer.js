const express = require('express');
const { emailValidation } = require('../midlleware/email.services');
const { passwordValidation } = require('../midlleware/password.services');
const { cpfValidation } = require('../midlleware/cpf.services');
const { usernameValidation } = require('../midlleware/username.services');
const { cepValidation } = require('../midlleware/cep.services');
const { cityValidation } = require('../midlleware/city.service');
const { ufValidation } = require('../midlleware/uf.service');
const { rgValidation } = require('../midlleware/rg.service');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, usernameValidation, 
cpfValidation, cepValidation, cityValidation, ufValidation, rgValidation, async (req, res) => {
    const { email, password, username, cpf, cep, city, uf, rg } = req.body;
    const result = { message: 'register', email, password, username, cpf, cep, city, uf, rg };
    res.status(200).json(result);
});

module.exports = router;