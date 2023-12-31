const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_corporation_favorite_products', {
    corporation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "会社ID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "規格1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'dtb_corporation_favorite_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "corporation_id" },
          { name: "product_id" },
          { name: "classcategory_id1" },
          { name: "classcategory_id2" },
        ]
      },
    ]
  });
};
