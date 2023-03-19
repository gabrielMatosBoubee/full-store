const { validateToken, hasAuthorization } = require('./authorization')
const { emailValidation } = require('./email')
const { passwordValidation } = require('./password')
const { usernameValidation } = require('./username')
const { categoryValidation, idValidation } = require('./category')

module.exports = {
    validateToken, hasAuthorization,
    emailValidation, passwordValidation,
    usernameValidation, categoryValidation,
    idValidation
}