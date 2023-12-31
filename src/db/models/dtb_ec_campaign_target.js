const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_ec_campaign_target', {
    ec_campaign_target_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    ec_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "対象キャンペーンID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    exec_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "実施済みフラグ"
    },
    target_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "対象フラグ"
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "SHOP ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_ec_campaign_target',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ec_campaign_target_id" },
        ]
      },
    ]
  });
};
