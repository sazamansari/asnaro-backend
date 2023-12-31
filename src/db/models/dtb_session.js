const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_session', {
    sess_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "セッションID"
    },
    sess_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "セッションデータ"
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
    tableName: 'dtb_session',
    timestamps: false,
    indexes: [
      {
        name: "dtb_session_sess_id_key",
        using: "BTREE",
        fields: [
          { name: "sess_id", length: 32 },
        ]
      },
    ]
  });
};
