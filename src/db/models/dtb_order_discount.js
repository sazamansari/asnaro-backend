const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_discount', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "受注ID"
    },
    sequence_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    discount_type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "値引区分"
    },
    discount_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "セット、バンドル、タイムセールID"
    },
    discount_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "値引額"
    },
    payment_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "値引後合計"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_discount',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "sequence_no" },
        ]
      },
    ]
  });
};
