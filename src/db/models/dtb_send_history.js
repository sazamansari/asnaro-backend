const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_send_history', {
    send_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "送信ID"
    },
    mail_method: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "テキスト種別"
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "件名"
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "本文"
    },
    send_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "送信数"
    },
    complete_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "送信完了数"
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "送信開始日時"
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "送信終了日時"
    },
    search_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "検索条件"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
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
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_send_history',
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
    ]
  });
};
