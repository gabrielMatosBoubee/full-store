const { validateToken, hasAuthorization } = require('./authorization')
const { emailValidation } = require('./email')
const { passwordValidation } = require('./password')
const { usernameValidation } = require('./username')

module.exports = {
    validateToken, hasAuthorization,
    emailValidation, passwordValidation, usernameValidation
}