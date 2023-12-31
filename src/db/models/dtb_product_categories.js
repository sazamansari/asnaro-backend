const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_product_categories', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品ID"
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "カテゴリID"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    shop_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ランク"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_product_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "category_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "dtb_product_categories_update_date_idx",
        using: "BTREE",
        fields: [
          { name: "update_date" },
        ]
      },
      {
        name: "ix_category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
