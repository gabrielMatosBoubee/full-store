const services = require('../services');
const Joi = require('joi');

const productValidation = (req, res, next) => {
    const { productName, productPrice, productDescription, discountPercent, categories, image } = req.body;

    const schema = Joi.object().keys({
        productName: Joi.string().required(),
        productPrice: Joi.number().required(),
        productDescription: Joi.string().required(),
        discountPercent: Joi.number().max(100).required(),
        categories: Joi.array().items(Joi.number()),
        image: Joi.required(),
    })

    const { error } = schema.validate({ productName, productPrice, productDescription, discountPercent, categories, image });
    if (error) {
        const [{ message }] = error.details
        return res.status(400).json({ message })
    }
    next();
}

const categoriesValidation = async (req, res, next) => {
    const { categories } = req.body;
    const result = await services.category.findAndCountAll({ categories });

    if (categories.length !== result) {
        return res.status(404).json({ message: 'One or more categories not found or not exist' })
    }

    next();
}

module.exports = { productValidation, categoriesValidation }