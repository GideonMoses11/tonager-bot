'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      telegram_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      telegram_username: {
        type: Sequelize.STRING,
        allowNull: true
      },
      balance: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      referred: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      automate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};