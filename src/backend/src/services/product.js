const { Product, Category, ProductCategory } = require('../models')

const getAll = async () => {
    const dataValues = await Product.findAll({
        attributes: { exclude: 'productDescription' },
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

    if (!dataValues) {
        return { type: 404, message: { message: "Product not found or not exist" } }
    }

    const result = { type: 200, message: dataValues }

    return result
}

const insertProduct = async ({ productName, productPrice, discountPercent, categories, image }) => {
    const dataValues = await Product.create({ productName, productPrice, discountPercent, image })
    const categoryArray = categories.map(async (catId) =>
        ({ categoryId: catId, productId: dataValues.id }));

    const newProductCategory = await Promise.all(categoryArray);
    await ProductCategory.bulkCreate(newProductCategory);

    const result = { type: 201, message: dataValues };

    return result;

}

module.exports = { getAll, getOne, insertProduct }