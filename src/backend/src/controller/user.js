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

const update = async (req, res) => {
    const { email, password } = req.body
    const { type, message } = await services.user.update({ email, password })
    return res.status(type).json(message)
}

const deleteUser = async (req, res) => {
    const { email } = req.body
    const { type, message } = await services.user.deleteUser({ email })
    return res.status(type).json(message)
}

module.exports = { insertUser, login, update, deleteUser }