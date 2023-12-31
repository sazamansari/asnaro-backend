const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mail_history', {
    send_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "送信ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注ID"
    },
    send_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "配信日時"
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "メールテンプレートID"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "件名"
    },
    mail_body: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メール本文"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    mail_from: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "送信元メールアドレス"
    },
    mail_to: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "送信先メールアドレス"
    },
    mail_cc: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "CCメールアドレス"
    },
    mail_bcc: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "BCCメールアドレス"
    },
    success_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "送信成功フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_mail_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "send_id" },
        ]
      },
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "ix_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
