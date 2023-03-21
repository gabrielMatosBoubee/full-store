const { Product, Category } = require('../models')

const getAll = async () => {
    const dataValues = await Product.findAll({
        include: [
            { model: Category, as: "categories", through: { attributes: [] } }]
    })
    const result = { type: 200, message: dataValues }
    return result
}

const getOne = async ({ id }) => {
    const dataValues = await Product.findOne({
        where: { id },
        include: [
            { model: Category, as: "categories", through: { attributes: [] } }]
    })
    const result = { type: 200, message: dataValues }
    return result
}

getOne({ id: 1 })

module.exports = { getAll, getOne }