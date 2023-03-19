const services = require('../services');

const getAll = async (_req, res) => {
    const { type, message } = await services.category.getAll();
    return res.status(type).json(message)
}

const insertCategory = async (req, res) => {
    const { category } = req.body
    const { type, message } = await services.category.insertCategory({ category })
    return res.status(type).json(message);
}

const updateCategory = async (req, res) => {
    const { category } = req.body;
    const { id } = req.params;

    const { type, message } = await services.category.update({ category, id })

    return res.status(type).json(message)
}

module.exports = { getAll, insertCategory, updateCategory }