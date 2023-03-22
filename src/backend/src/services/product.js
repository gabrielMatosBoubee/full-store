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

const insertProductCategory = async ({ categories, id }) => {
    const categoryArray = categories.map(async (catId) =>
        ({ categoryId: catId, productId: id }));

    const newProductCategory = await Promise.all(categoryArray);
    await ProductCategory.bulkCreate(newProductCategory);
    return { categories, id }
}

const insertProduct = async ({ productName, productPrice, discountPercent, categories, image }) => {
    const { dataValues } = await Product.create({ productName, productPrice, discountPercent, image })

    await insertProductCategory({ categories, id: dataValues.id })

    const message = { ...dataValues, categories }

    const result = { type: 201, message };

    return result;

}


const updateProduct = async ({ productName, productPrice, id, discountPercent, categories, image }) => {
    await Product.update({ productName, productPrice, discountPercent, image }, { where: { id } });

    await ProductCategory.destroy({ where: { productId: id } })

    await insertProductCategory({ categories, id })

    const message = { productName, productPrice, id, discountPercent, categories, image };

    const result = { type: 201, message };

    return result
}

module.exports = { getAll, getOne, insertProduct, updateProduct }