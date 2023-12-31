const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_option_list_config', {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "店舗ID"
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "オプションID"
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "行"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "値"
    }
  }, {
    sequelize,
    tableName: 'dtb_option_list_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "seq" },
          { name: "row" },
        ]
      },
    ]
  });
};
