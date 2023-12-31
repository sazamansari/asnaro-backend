const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_module_update_logs', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ログID"
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "モジュールID"
    },
    buckup_path: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "バックアップパス"
    },
    error_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "エラーフラグ"
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "エラー文"
    },
    ok: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "成功文"
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
    tableName: 'dtb_module_update_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
