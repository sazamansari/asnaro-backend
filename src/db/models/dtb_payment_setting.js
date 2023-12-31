const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_payment_setting', {
    payment_cooporate_kbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "決済代行会社区分"
    },
    payment_cooporate_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "決済代行会社名"
    },
    payment_setting_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "決済代行会社設定情報"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ショップID"
    }
  }, {
    sequelize,
    tableName: 'dtb_payment_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_cooporate_kbn" },
          { name: "shop_id" },
        ]
      },
    ]
  });
};
