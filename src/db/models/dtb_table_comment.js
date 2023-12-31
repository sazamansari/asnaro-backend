const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_table_comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    table_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "テーブル名"
    },
    column_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "カラム名"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "説明"
    }
  }, {
    sequelize,
    tableName: 'dtb_table_comment',
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
