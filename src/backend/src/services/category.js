const { Category } = require('../models')

const insertCategory = async ({ category }) => {
    const { dataValues } = await Category.create({ category })

    const result = { type: 201, message: dataValues }

    return result
};

const getAll = async () => {
    const { dataValues } = await Category.findAll()

    const result = { type: 200, message: { categories: dataValues } }

    return result
}

module.exports = { insertCategory, getAll }