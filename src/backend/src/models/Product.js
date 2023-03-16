'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING(2000),
    product_price: DataTypes.FLOAT,
    product_description: DataTypes.STRING,
    discount_percent: DataTypes.INTEGER,
  }, {
    tableName: 'Products',
    modelName: 'Product',
    timestamps: false,
  });
  return Product;
};