const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_abc', {
    bat_abc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ABCバッチID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "規格ID1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "規格ID2"
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品名"
    },
    quantity_sum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "売上個数"
    },
    sales_sum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "売上高"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "バッチ終了月日"
    }
  }, {
    sequelize,
    tableName: 'dtb_bat_abc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bat_abc_id" },
        ]
      },
    ]
  });
};
