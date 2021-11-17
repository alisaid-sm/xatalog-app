'use strict';

const bcrypt = require('bcrypt');
const uuid = require('uuid');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(process.env.PASSWORD_ADMIN || 'password', salt);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
    */
    await queryInterface.bulkInsert('Users', [{
      id: uuid.v1(),
      username: process.env.USER_NAME_ADMIN || 'alisaid',
      email: process.env.EMAIL_ADMIN || 'alisaid@gmail.com',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
