'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    category: DataTypes.STRING
  }, {
    tableName: 'categories',
    timestamps: false,
    modelName: 'Category',
  })
  return categories;
};