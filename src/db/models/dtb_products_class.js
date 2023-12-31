const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_products_class', {
    product_class_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品規格ID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "規格ID1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "規格ID2"
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品コード"
    },
    stock: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "在庫数"
    },
    stock_unlimited: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "在庫無制限"
    },
    sale_limit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "購入制限"
    },
    price01: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "通常価格"
    },
    price02: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "販売価格"
    },
    price02_const: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "販売価格"
    },
    batch_flag_discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "割引バッチフラグ (0=なし,1=割引期間前,2=割引期間中,3=割引期間後)"
    },
    start_from_discount: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "期間割引開始日時"
    },
    end_to_discount: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "期間割引終了日時"
    },
    rate_discount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引率"
    },
    value_discount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額"
    },
    discount_num1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引番号1"
    },
    discount_price1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額1"
    },
    discount_num2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引番号2"
    },
    discount_price2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額2"
    },
    discount_num3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引番号3"
    },
    discount_price3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額3"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "商品ステータス"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    cost_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "原価"
    }
  }, {
    sequelize,
    tableName: 'dtb_products_class',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_class_id" },
        ]
      },
      {
        name: "product_class_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_class_id" },
        ]
      },
      {
        name: "dtb_products_class_product_id_key",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "classcategory_id1",
        using: "BTREE",
        fields: [
          { name: "classcategory_id1" },
        ]
      },
      {
        name: "classcategory_id2",
        using: "BTREE",
        fields: [
          { name: "classcategory_id2" },
        ]
      },
      {
        name: "product_class_key",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "classcategory_id1" },
          { name: "classcategory_id2" },
        ]
      },
      {
        name: "ix_product_code",
        using: "BTREE",
        fields: [
          { name: "product_code" },
        ]
      },
      {
        name: "ix_shop_id_update_date",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "update_date" },
        ]
      },
    ]
  });
};
