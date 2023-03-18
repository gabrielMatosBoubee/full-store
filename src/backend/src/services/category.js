const { Category } = require('../models')

const insertCategory = async ({ category }) => {
    const { dataValues } = await Category.create({ category })

    const result = { type: 201, message: dataValues }

    return result
};

const getAll = async () => {
    const dataValues = await Category.findAll()

    const result = { type: 200, message: { categories: dataValues } }

    return result
}

const update = async ({ category, id }) => {
    const { dataValues } = await Category.update({ category }, { where: { id } }) || {}

    if (!dataValues) {
        return { type: 404, message: { message: 'Category not found or not exist' } }
    }

    const result = { type: 200, message: dataValues }

    return result
}

const deleteCategory = async ({ id }) => {
    const { dataValues } = await Category.destroy({ where: { id } }) || {}

    if (!dataValues) {
        return { type: 404, message: { message: 'Category not found or not exist' } }
    }

    const result = { type: 204, message: [] }

    return result
}


module.exports = { insertCategory, getAll, update, deleteCategory }