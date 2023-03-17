const express = require('express');
const { emailValidation } = require('../midlleware/email.services');
const { passwordValidation } = require('../midlleware/password.services');
const controller = require('../controller')

const router = express.Router();

router.post('/', emailValidation, passwordValidation, controller.user.login);

module.exports = router;