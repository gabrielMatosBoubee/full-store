const { createToken } = require('../auth/auth')
const { User } = require('../models')



const insertUser = async ({ email, username, password }) => {
    const { dataValues } = await User.create({ email, username, password });
    delete dataValues.password
    const token = createToken(dataValues);
    const result = { type: 201, message: token }
    return result
}

module.exports = { insertUser }