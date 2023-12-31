const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_favorite_products', {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "顧客ID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格2"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_favorite_products',
    timestamps: false
  });
};
