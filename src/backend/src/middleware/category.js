const Joi = require('joi')

const categoryValidation = async (req, res, next) => {
    const { category } = req.body;

    const schema = Joi.object({ category: Joi.string().min(3).required() });

    const { error } = schema.validate({ category });

    if (error) {
        return res.status(400).json({ message: error })
    }

}

module.exports = { categoryValidation }