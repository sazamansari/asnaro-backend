const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_subscribe_order_detail', {
    subscribe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "定期購入ID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品ID"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "規格ID1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "規格ID2"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "数量"
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品名"
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品コード"
    },
    classcategory_name1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格名1"
    },
    classcategory_name2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格名2"
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "価格"
    },
    discount_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額"
    },
    credit_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "クレジット割引"
    },
    member_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "メンバー割引"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税額"
    }
  }, {
    sequelize,
    tableName: 'dtb_subscribe_order_detail',
    timestamps: false
  });
};
