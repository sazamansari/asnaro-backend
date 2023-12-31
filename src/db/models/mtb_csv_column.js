const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_csv_column', {
    no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "番号"
    },
    csv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "CSV_ID"
    },
    col: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "カラム"
    },
    disp_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "項目名"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ランク"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "ステータス"
    }
  }, {
    sequelize,
    tableName: 'mtb_csv_column',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no" },
        ]
      },
    ]
  });
};
