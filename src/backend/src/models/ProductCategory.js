'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const product_category = sequelize.define('ProductCategory', {
    productId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
    {
      tableName: 'product_categories',
      underscored: true,
      timestamps: false,
      modelName: 'ProductCategory',
    });

  product_category.associate = (models) => {
    models.Product.belongsToMany(models.Category, {
      foreignKey: 'productId',
      otherKey: 'categoryId',
      through: product_category,
      as: 'products'
    });
    models.Category.belongsToMany(models.Product, {
      foreignKey: 'categoryId',
      otherKey: 'productId',
      through: product_category,
      as: 'categories'
    })
  }

  return product_category;
};