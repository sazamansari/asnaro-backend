const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_pos_info', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受注ID"
    },
    pos_order_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "POSオーダーID"
    },
    settlement_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "精算フラグ"
    },
    settlement_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "精算日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店鋪ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_pos_info',
    timestamps: false
  });
};
