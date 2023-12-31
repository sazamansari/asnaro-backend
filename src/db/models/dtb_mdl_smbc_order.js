const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mdl_smbc_order', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credit_status: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'dtb_mdl_smbc_order',
    timestamps: false
  });
};
