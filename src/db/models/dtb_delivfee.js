const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_delivfee', {
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送業者ID"
    },
    fee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "配送料ID"
    },
    fee: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "配送料金"
    },
    pref: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "都道府県"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_delivfee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fee_id" },
        ]
      },
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
