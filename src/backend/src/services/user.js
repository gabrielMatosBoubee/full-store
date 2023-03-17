const { createToken } = require('../auth/auth')
const { User } = require('../models')



const insertUser = async ({ email, username, password }) => {
    const { dataValues } = await User.create({ email, username, password });
    delete dataValues.password
    const token = createToken(dataValues);
    const result = { type: 201, message: token }
    return result
}

const login = async ({ email, password }) => {
    const { dataValues } = await User.findOne({ where: { email } }) || {};

    if (!dataValues) {
        return { type: 404, message: { message: 'User not found or not exist' } }
    }
    if (password !== dataValues.password) {
        return { type: 400, message: { message: 'Wrong password' } }
    }

    delete dataValues.password
    const token = createToken(dataValues)
    const result = { type: 200, message: token }

    return result
}

module.exports = { insertUser, login }