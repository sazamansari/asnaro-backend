const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_grouped_products_noclass', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品ID"
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品コード"
    },
    price01: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "価格01"
    },
    price02: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "価格02"
    },
    price03: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "価格03"
    },
    stock: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "在庫"
    },
    stock_unlimited: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "在庫無制限"
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
    product_code_min: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "商品コード最小"
    },
    product_code_max: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "商品コード最大"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_grouped_products_noclass',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
