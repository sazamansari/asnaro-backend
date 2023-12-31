const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_session_adodb', {
    sesskey: {
      type: DataTypes.BLOB,
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "セッションキー"
    },
    expiry: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "有効時間"
    },
    expireref: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "",
      comment: "有効期限文字"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    },
    sessdata: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "セッション情報"
    }
  }, {
    sequelize,
    tableName: 'dtb_session_adodb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sesskey" },
        ]
      },
      {
        name: "sess2_expiry",
        using: "BTREE",
        fields: [
          { name: "expiry" },
        ]
      },
      {
        name: "sess2_expireref",
        using: "BTREE",
        fields: [
          { name: "expireref" },
        ]
      },
    ]
  });
};
