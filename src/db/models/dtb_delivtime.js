const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_delivtime', {
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送業者ID"
    },
    time_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "配送時間ID"
    },
    deliv_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送時間ID"
    },
    deliv_time: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "配送時間"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_delivtime',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time_id" },
          { name: "shop_id" },
        ]
      },
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
