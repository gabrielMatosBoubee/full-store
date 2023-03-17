'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    productName: DataTypes.STRING(2000),
    productPrice: DataTypes.FLOAT,
    productDescription: DataTypes.STRING,
    discountPercent: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    tableName: 'Products',
    modelName: 'Product',
    underscored: true,
    timestamps: false,
  });
  return Product;
};