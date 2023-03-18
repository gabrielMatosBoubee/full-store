const { Category } = require('../models')

const insertCategory = async ({ category }) => {
    const { dataValues } = await Category.create({ category })

    const result = { type: 201, message: dataValues }

    return result
};

module.exports = { insertCategory }