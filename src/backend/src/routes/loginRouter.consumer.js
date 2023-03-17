const express = require('express');
const { emailValidation } = require('../midlleware/email.services');
const { passwordValidation } = require('../midlleware/password.services');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, async (req, res) => {
    const { email } = req.body;
    const result = { message: 'ok', email };
    res.status(200).json(result);
});

module.exports = router;