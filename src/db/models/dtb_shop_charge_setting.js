const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_shop_charge_setting', {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    fixed_charge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "月額固定料"
    },
    royalty_price1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ロイヤリティ 金額1"
    },
    royalty_price2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ロイヤリティ 金額2"
    },
    royalty_price3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ロイヤリティ 金額3"
    },
    royalty_price4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ロイヤリティ 金額4"
    },
    royalty_rate1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "ロイヤリティ 比率1"
    },
    royalty_rate2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "ロイヤリティ 比率2"
    },
    royalty_rate3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "ロイヤリティ 比率3"
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "契約日"
    },
    contract_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "契約期間"
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
    tableName: 'dtb_shop_charge_setting',
    timestamps: false
  });
};
