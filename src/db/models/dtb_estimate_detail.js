const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_estimate_detail', {
    estimate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "見積ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格ID1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格ID2"
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
      comment: "割引き額"
    },
    credit_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "掛払い割引率"
    },
    member_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "会員割引率"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "消費税"
    },
    quantity: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "数量"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_estimate_detail',
    timestamps: false
  });
};
