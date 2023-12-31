const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_option', {
    shipping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "出荷ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "受注ID"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品規格ID"
    },
    option1: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      comment: "オプション1"
    },
    option2: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      comment: "オプション2"
    },
    quantity: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "数量"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_option',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shipping_id" },
          { name: "order_id" },
          { name: "product_class_id" },
          { name: "option1" },
          { name: "option2" },
        ]
      },
      {
        name: "ix_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
