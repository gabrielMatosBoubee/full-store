'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      { category: "Horror" },
      { category: "Adventure" },
      { category: "Action" },
      { category: "RPG" },
      { category: "Race" },
      { category: "Roguelike" },
      { category: "Metroidvania" },
      { category: "Hack & Slash" },
      { category: "Fight game" },
      { category: "Open world" },
      { category: "FPS" },
      { category: "Console" }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
