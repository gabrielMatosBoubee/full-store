const Joi = require('joi')
const services = require('../services')

const categoryValidation = async (req, res, next) => {
    const { category } = req.body;

    const schema = Joi.object().keys({
        category: Joi.string().min(3).required()
    });

    const { error } = schema.validate({ category });
    if (error) {
        const [{ message }] = error.details
        return res.status(400).json({ message })
    }
    next();
}

const idValidation = async (req, res, next) => {
    const { id } = req.params;

    const schema = Joi.object().keys({
        id: Joi.number().min(1).required()
    });

    const { error } = schema.validate({ id });
    if (error) {
        const [{ message }] = error.details
        return res.status(400).json({ message })
    }
    next();
}

const existCategory = async (req, res, next) => {
    const { id } = req.params;
    const { type, message } = await services.category.existCategory({ id });

    if (type === 404) {
        return res.status(type).json(message);
    }

    next();
}

module.exports = { categoryValidation, idValidation, existCategory }