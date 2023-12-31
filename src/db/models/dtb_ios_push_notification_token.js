const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_ios_push_notification_token', {
    ios_push_notification_token_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "IOS_PUSH_NOTIFICATION_TOKEN_ID"
    },
    app_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "アプリ名"
    },
    device_token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Push通知デバイストークン"
    },
    pos_udid_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "POS_UDID_ID"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "削除フラグ"
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
    }
  }, {
    sequelize,
    tableName: 'dtb_ios_push_notification_token',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ios_push_notification_token_id" },
        ]
      },
      {
        name: "ix_device_token",
        using: "BTREE",
        fields: [
          { name: "device_token" },
        ]
      },
    ]
  });
};
