'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('product_categories', [
      { product_id: 1, category_id: 1 },
      { product_id: 1, category_id: 3 },
      { product_id: 1, category_id: 4 },
      { product_id: 2, category_id: 2 },
      { product_id: 2, category_id: 3 },
      { product_id: 2, category_id: 9 },
      { product_id: 3, category_id: 2 },
      { product_id: 3, category_id: 3 },
      { product_id: 3, category_id: 4 },
      { product_id: 3, category_id: 10 },
      { product_id: 4, category_id: 1 },
      { product_id: 4, category_id: 3 },
      { product_id: 4, category_id: 11 },
      { product_id: 5, category_id: 2 },
      { product_id: 5, category_id: 3 },
      { product_id: 5, category_id: 4 },
      { product_id: 5, category_id: 8 },
      { product_id: 5, category_id: 10 },
      { product_id: 6, category_id: 2 },
      { product_id: 6, category_id: 3 },
      { product_id: 6, category_id: 11 },
      { product_id: 7, category_id: 2 },
      { product_id: 7, category_id: 10 },
      { product_id: 8, category_id: 2 },
      { product_id: 8, category_id: 6 },
      { product_id: 8, category_id: 4 },
      { product_id: 9, category_id: 2 },
      { product_id: 9, category_id: 3 },
      { product_id: 9, category_id: 4 },
      { product_id: 9, category_id: 6 },
      { product_id: 10, category_id: 12 },
      { product_id: 11, category_id: 12 },
      { product_id: 12, category_id: 12 },
      { product_id: 13, category_id: 12 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
