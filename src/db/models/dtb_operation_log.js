const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_operation_log', {
    operation_log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "操作ログID"
    },
    member: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "メンバー"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "日付"
    },
    page: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ページ"
    },
    mode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "モード"
    },
    post_value: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "POST値"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_operation_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "operation_log_id" },
        ]
      },
    ]
  });
};
