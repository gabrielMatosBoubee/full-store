const express = require('express');
const middleware = require('../middleware')
const controller = require('../controller')

const router = express.Router();

router.post('/', middleware.emailValidation, middleware.passwordValidation,
    middleware.usernameValidation, controller.user.insertUser);

router.put('/', middleware.validateToken,
    middleware.hasAuthorization, middleware.emailValidation,
    middleware.passwordValidation, controller.user.update)

router.delete('/', middleware.validateToken,
    middleware.hasAuthorization,
    middleware.emailValidation, controller.user.deleteUser)

module.exports = router;