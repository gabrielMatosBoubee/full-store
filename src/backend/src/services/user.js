const { createToken } = require('../auth/auth')
const { User } = require('../models')



const insertUser = async ({ email, username, password }) => {
    const { dataValues } = await User.create({ email, username, password });
    delete dataValues.password
    const token = createToken(dataValues);
    const result = { type: 201, message: { token } }
    return result
}

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return { type: 404, message: { message: 'User not found or not exist' } }
    };

    const { dataValues } = user;

    if (password !== dataValues.password) {
        return { type: 400, message: { message: 'Wrong password' } }
    }

    delete dataValues.password
    const token = createToken(dataValues)
    console.log(typeof token)
    const result = { type: 200, message: { token } }

    return result
}

const update = async ({ email, password }) => {
    await User.update({ email, password }, { where: { email } });

    const result = { type: 200, message: { email, password } };

    return result
}

const deleteUser = async ({ email }) => {
    const dataValues = await User.destroy({ where: { email } })

    if (!dataValues) {
        return { type: 404, message: { message: 'User not found or not exist' } }
    }

    const result = { type: 204, message: [] }
    return result

}

const existUser = async ({ email }) => {
    const dataValues = await User.findOne({ where: email });

    if (!dataValues) {
        return { type: 404, message: { message: 'User not found or not exist' } }
    }

    const result = { type: 200, message: 'User found' }

    return result
}


module.exports = { insertUser, login, update, deleteUser, existUser }