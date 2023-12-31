const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_sequence', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_sequence',
    timestamps: false
  });
};
