const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_auto_message', {
    auto_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "自動メッセージID"
    },
    send_from_dist: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "送信元判別"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メッセージ本文"
    }
  }, {
    sequelize,
    tableName: 'dtb_auto_message',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "auto_message_id" },
        ]
      },
    ]
  });
};
