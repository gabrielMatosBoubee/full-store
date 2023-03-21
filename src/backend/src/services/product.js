const { Product, Category } = require('../models')

const getAll = async () => {
    const dataValues = await Product.findAll({
        include: [
            { model: Category, as: "categories", through: { attributes: [] } }]
    })
    const result = { type: 200, message: dataValues }
    return result
}

// getAll()

module.exports = { getAll }