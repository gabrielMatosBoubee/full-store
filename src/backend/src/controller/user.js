const services = require('../services')

const insertUser = async (req, res) => {
    const { email, password, username } = req.body
    const { type, message } = await services.user.insertUser({ email, password, username })
    return res.status(type).json(message)
}

const login = async (req, res) => {
    const { email, password } = req.body
    const { type, message } = await services.user.login({ email, password })
    return res.status(type).json(message)
}

module.exports = { insertUser, login }