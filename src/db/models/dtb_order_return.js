const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_return', {
    order_return_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "返品ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "担当者ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    return_amount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "返品総計"
    },
    adjust_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "全体金額調整"
    },
    return_point: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "返却ポイント"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "税額"
    },
    tax_rule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 2,
      comment: "税率ルール"
    },
    tax_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "税率"
    },
    receipt_price_card: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "クレジット支払金額"
    },
    receipt_price_cash: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "キャッシュ支払金額"
    },
    receipt_price_emoney: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "電子マネー支払金額"
    },
    receipt_price_debit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "デビット支払金額"
    },
    receipt_price_gift1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "商品券01支払金額"
    },
    receipt_price_gift2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "商品券02支払金額"
    },
    pos_order_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "POS受注ID"
    },
    order_property_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "オーダー属性ID"
    },
    order_property_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "オーダー属性名"
    },
    memo01: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ01"
    },
    memo02: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ02"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
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
    tableName: 'dtb_order_return',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_return_id" },
        ]
      },
      {
        name: "dtb_order_return_index",
        using: "BTREE",
        fields: [
          { name: "order_return_id" },
        ]
      },
    ]
  });
};
