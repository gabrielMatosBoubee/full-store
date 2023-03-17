const express = require('express');
const { emailValidation } = require('../midlleware/email.services');
const { passwordValidation } = require('../midlleware/password.services');
const { usernameValidation } = require('../midlleware/username.services');
const controller = require('../controller')

const router = express.Router();

router.post('/', emailValidation, passwordValidation,
    usernameValidation, controller.user.insertUser);

module.exports = router;