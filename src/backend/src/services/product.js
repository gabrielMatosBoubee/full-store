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

const insertProduct = async ({ productName, productPrice, productDescription, discountPercent, categories, image }) => {
    const { dataValues } = await Product.create({ productName, productPrice, productDescription, discountPercent, image })

    await insertProductCategory({ categories, id: dataValues.id })

    const message = { ...dataValues, categories }

    const result = { type: 201, message };

    return result;

}


const updateProduct = async ({ productName, productDescription, productPrice, id, discountPercent, categories, image }) => {
    await Product.update({ productName, productPrice, productDescription, discountPercent, image }, { where: { id } });

    await ProductCategory.destroy({ where: { productId: id } })

    await insertProductCategory({ categories, id })

    const message = { productName, productPrice, id, discountPercent, categories, image };

    const result = { type: 201, message };

    return result
}

const deleteProduct = async ({ id }) => {
    const dataValues = await Product.destroy({ where: { id: id } });

    if (dataValues === 0) {
        return { type: 404, message: "Product not found or not exist" }
    };

    await ProductCategory.destroy({ where: { productId: id } });

    const result = { type: 204, message: [] }

    return result
}

module.exports = { getAll, getOne, insertProduct, updateProduct, deleteProduct }