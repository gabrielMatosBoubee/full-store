const services = require('../services')

const getAll = async (_req, res) => {
    const { type, message } = await services.product.getAll();
    return res.status(type).json(message);
}

const getOne = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await services.product.getOne({ id })
    return res.status(type).json(message)
}

module.exports = { getAll, getOne }