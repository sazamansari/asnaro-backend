const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_shop_charge_monthly', {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    target_month: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "対象月"
    },
    fixed_charge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "固定料"
    },
    royalty_rate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "ロイヤリティ比率"
    },
    royalty_progits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ロイヤリティ収益"
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "合計"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_bat_shop_charge_monthly',
    timestamps: false
  });
};
