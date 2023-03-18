const express = require('express');
const middleware = require('../middleware')
const controller = require('../controller')

const router = express.Router();

router.post('/', middleware.emailValidation,
    middleware.passwordValidation, controller.user.login);

module.exports = router;