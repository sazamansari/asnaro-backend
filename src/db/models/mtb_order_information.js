const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_order_information', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "お知らせ内容ID"
    },
    notice_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "お知らせ内容"
    },
    url: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "遷移先"
    },
    important_flg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "重要フラグ"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'mtb_order_information',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
