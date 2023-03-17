'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      username: 'John Doe',
      email: "dev@gmail.com",
      password: "Te123456789!",
      admin: true
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});
  }
};
