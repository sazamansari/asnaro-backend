const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_return_detail', {
    order_return_detail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "返品商品ID"
    },
    order_return_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "返品ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注ID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
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
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "商品価格"
    },
    discount_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "割引価格"
    },
    quantity: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "数量"
    },
    addsub_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "交換フラグ"
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
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "部門"
    },
    order_detail_property_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "オーダー詳細属性ID"
    },
    order_detail_property_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "オーダー詳細属性名"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
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
      comment: "商品規格名1"
    },
    classcategory_name2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品規格名2"
    },
    regular_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引前単価(税込)"
    },
    credit_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "掛払い割引率"
    },
    member_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "メンバー割引額"
    },
    point_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "ポイント率"
    },
    discount_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "個別割引率"
    },
    tax: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "税金額"
    },
    tax_rule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "税率ルール"
    },
    tax_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "税率"
    },
    margin: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "粗利"
    },
    cost_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "原価"
    },
    option1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "オプション1"
    },
    option2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "オプション2"
    },
    product_property1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性1"
    },
    product_property2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性2"
    },
    product_property3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性3"
    },
    product_property4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性4"
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ブランド"
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ブランド名"
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "部門名"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_return_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_return_detail_id" },
        ]
      },
      {
        name: "ix_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
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
