const Joi = require('joi')

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

module.exports = { categoryValidation }