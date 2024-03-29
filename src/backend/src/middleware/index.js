const { validateToken, hasAuthorization } = require('./authorization')
const { emailValidation } = require('./email')
const { passwordValidation } = require('./password')
const { usernameValidation } = require('./username')
const { categoryValidation, idValidation, existCategory } = require('./category')
const { existUser } = require('./user')
const { productValidation, categoriesValidation, existProduct } = require('./product')

module.exports = {
    validateToken, hasAuthorization,
    emailValidation, passwordValidation,
    usernameValidation, categoryValidation,
    idValidation, existCategory, existUser,
    productValidation, categoriesValidation, existProduct
}