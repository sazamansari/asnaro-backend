const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_classified_config', {
    class_config_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "使用設定ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    classified_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "加工分類ID"
    },
    classified_use_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "加工分類使用フラグ"
    },
    creator_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_classified_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "class_config_id" },
        ]
      },
    ]
  });
};
