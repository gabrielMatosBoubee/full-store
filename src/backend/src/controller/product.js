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

const insertProduct = async (req, res) => {
    const { productName, productPrice, productDescription, discountPercent, categories, image } = req.body;
    const { type, message } = await services.product.insertProduct({ productName, productPrice, productDescription, discountPercent, categories, image })
    return res.status(type).json(message)
};

const updateProduct = async (req, res) => {
    const { productName, productPrice, productDescription, discountPercent, categories, image } = req.body;
    const { id } = req.params;

    const { type, message } = await services.product.updateProduct({ productName, productPrice, productDescription, discountPercent, categories, image, id })

    return res.status(type).json(message);
}

module.exports = { getAll, getOne, insertProduct, updateProduct }