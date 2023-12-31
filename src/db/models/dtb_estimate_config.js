const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_estimate_config', {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    estimate_use_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "見積使用フラグ"
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
    est_config_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "見積設定ID"
    },
    estimate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "見積ID"
    },
    est_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "工程内容ID"
    },
    del_flag: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_estimate_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "est_config_id" },
        ]
      },
    ]
  });
};
