const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_category_count', {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "カテゴリID"
    },
    product_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品数"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_category_count',
    timestamps: false,
    indexes: [
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
