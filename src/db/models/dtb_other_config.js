const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_other_config', {
    other_config_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "その他使用ID"
    },
    estimate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "見積ID"
    },
    other_expense_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "その他情報ID"
    },
    other_expense_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "その他使用フラグ"
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
    tableName: 'dtb_other_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "other_config_id" },
        ]
      },
    ]
  });
};
