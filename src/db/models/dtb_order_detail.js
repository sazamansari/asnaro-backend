const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_detail', {
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
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
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
    product_short_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "省略名"
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
      comment: "掛払い割引率"
    },
    member_discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "メンバー割引額"
    },
    etc_discount_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "その他値引額"
    },
    etc_discount_kbn: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "値引区分"
    },
    is_tax_impose: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "課税:1・非課税:0"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税金額"
    },
    quantity: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "数量"
    },
    point_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "ポイント率"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
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
    discount_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "個別割引率"
    },
    tax_rule: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    tax_percent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "部門"
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "部門名"
    },
    regular_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引前単価(税込)"
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
    gain_point_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "割引時にポイントを付与するフラグ（0:付与する、1:付与しない）"
    },
    discount_tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "個別値引額（税額）"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_detail',
    timestamps: false,
    indexes: [
      {
        name: "dtb_order_detail_product_id_key",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "dtb_order_detail_order_id_index",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "dtb_order_detail_order_id_shop_id_index",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "shop_id" },
        ]
      },
      {
        name: "ix_product_name",
        using: "BTREE",
        fields: [
          { name: "product_name" },
        ]
      },
      {
        name: "ix_product_code",
        using: "BTREE",
        fields: [
          { name: "product_code" },
        ]
      },
    ]
  });
};
