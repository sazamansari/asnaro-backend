const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_bulletinboard', {
    message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "メッセージID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受発注ID"
    },
    order_number: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "注文番号"
    },
    contractor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注者ID"
    },
    orderer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "発注者ID"
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "工程ID"
    },
    process_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工程名"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メッセージ"
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ファイルパス"
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ファイル名"
    },
    image_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "画像フラグ"
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "送信者ID"
    },
    is_contractor_read: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "受注者既読フラグ"
    },
    is_orderer_read: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "発注者既読フラグ"
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
    message_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "メッセージステータス"
    },
    del_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_bulletinboard',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
};
