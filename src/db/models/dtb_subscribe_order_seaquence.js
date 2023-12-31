const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_subscribe_order_seaquence', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_subscribe_order_seaquence',
    timestamps: false
  });
};
