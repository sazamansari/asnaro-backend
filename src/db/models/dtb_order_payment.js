const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_payment', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "受注ID"
    },
    order_tran_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "決済ID"
    },
    order_payment_status: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "受注決済ステータス"
    },
    order_payment_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "受注決済情報"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
