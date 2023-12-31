const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_csv_sql', {
    sql_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "SQLID"
    },
    sql_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "名称"
    },
    csv_sql: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "SQL文"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_csv_sql',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sql_id" },
        ]
      },
    ]
  });
};
