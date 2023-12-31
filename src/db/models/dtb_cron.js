const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_cron', {
    cron_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "定時実行処理ID"
    },
    minute: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "実行時間（分）"
    },
    hour: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "実行時間（時）"
    },
    day: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "実行時間（日）"
    },
    month: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "実行時間（月）"
    },
    wday: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "実行時間（曜日）"
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント"
    },
    enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "有効無効フラグ(0=無効,1=有効)"
    },
    last_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "最終実行時ステータス(0=未実行,1=成功,2=失敗,3=実行中)"
    },
    last_exec_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "最終実行日時"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    },
    arguments: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コマンド引数"
    },
    working_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "作業用データ"
    },
    last_info: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "最終実行情報"
    },
    last_error: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "最終エラー情報"
    }
  }, {
    sequelize,
    tableName: 'dtb_cron',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cron_id" },
        ]
      },
    ]
  });
};
