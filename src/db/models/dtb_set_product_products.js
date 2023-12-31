const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_set_product_products', {
    set_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "セット商品ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ショップID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品ID"
    },
    set_product_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "定価"
    },
    set_product_discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "値引額"
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
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_set_product_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "set_product_id" },
          { name: "product_id" },
        ]
      },
    ]
  });
};
