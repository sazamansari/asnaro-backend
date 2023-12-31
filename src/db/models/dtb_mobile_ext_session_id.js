const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mobile_ext_session_id', {
    session_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "セッションID"
    },
    param_key: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "パラメータキー"
    },
    param_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "パラメータ値"
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "URL"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_mobile_ext_session_id',
    timestamps: false,
    indexes: [
      {
        name: "dtb_mobile_ext_session_id_param_key_key",
        using: "BTREE",
        fields: [
          { name: "param_key", length: 64 },
        ]
      },
      {
        name: "dtb_mobile_ext_session_id_param_value_key",
        using: "BTREE",
        fields: [
          { name: "param_value", length: 64 },
        ]
      },
      {
        name: "dtb_mobile_ext_session_id_url_key",
        using: "BTREE",
        fields: [
          { name: "url", length: 64 },
        ]
      },
      {
        name: "dtb_mobile_ext_session_id_create_date_key",
        using: "BTREE",
        fields: [
          { name: "create_date" },
        ]
      },
    ]
  });
};
