const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_cacco_setting', {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "店舗ID"
    },
    setting_data: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "設定情報"
    }
  }, {
    sequelize,
    tableName: 'dtb_cacco_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
