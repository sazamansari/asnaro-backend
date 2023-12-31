const { QueryInterface, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('dtb_customer', 'resetPasswordToken', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('dtb_customer', 'resetPasswordExpires', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('dtb_customer', 'resetPasswordToken');
    await queryInterface.removeColumn('dtb_customer', 'resetPasswordExpires');
  }
};
