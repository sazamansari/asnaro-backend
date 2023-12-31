const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_relate_products', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品ID"
    },
    relate_product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "関連商品ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "集計日"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_bat_relate_products',
    timestamps: false,
    indexes: [
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
