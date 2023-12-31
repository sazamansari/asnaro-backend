const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mobile_kara_mail', {
    kara_mail_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "空メールID"
    },
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "セッションID"
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "送信フラグ"
    },
    next_url: {
      type: DataTypes.STRING(300),
      allowNull: false,
      comment: "次のURL"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス"
    },
    receive_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "受信日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_mobile_kara_mail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kara_mail_id" },
        ]
      },
      {
        name: "kara_mail_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kara_mail_id" },
        ]
      },
      {
        name: "dtb_mobile_kara_mail_token_key",
        using: "BTREE",
        fields: [
          { name: "token", length: 64 },
        ]
      },
      {
        name: "dtb_mobile_kara_mail_create_date_key",
        using: "BTREE",
        fields: [
          { name: "create_date" },
        ]
      },
      {
        name: "dtb_mobile_kara_mail_receive_date_key",
        using: "BTREE",
        fields: [
          { name: "receive_date" },
        ]
      },
    ]
  });
};
