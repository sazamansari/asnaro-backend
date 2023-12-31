const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_grouped_products_class', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品ID"
    },
    product_code_min: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "最小商品コード"
    },
    product_code_max: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "最大商品コード"
    },
    price01_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最小価格01"
    },
    price01_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最大価格01"
    },
    price02_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最小価格02"
    },
    price02_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最大価格02"
    },
    price03_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最小価格03"
    },
    price03_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最大価格03"
    },
    price02_tax_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最小税額02"
    },
    price02_tax_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最大税額02"
    },
    price03_tax_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最小税額03"
    },
    price03_tax_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最大税額03"
    },
    stock_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最小在庫"
    },
    stock_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "最大在庫"
    },
    stock_unlimited_min: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "最小在庫無制限"
    },
    stock_unlimited_max: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "最大在庫無制限"
    },
    class_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "規格数"
    },
    product_codes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "商品コード"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_grouped_products_class',
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
