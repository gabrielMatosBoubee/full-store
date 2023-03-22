const services = require('../services')

const getAll = async (_req, res) => {
    const { type, message } = await services.product.getAll();
    return res.status(type).json(message);
}

module.exports = { getAll }