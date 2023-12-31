const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_gift_list', {
    gift_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ギフトID"
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "行番号"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ショップID"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ギフト選択肢名"
    }
  }, {
    sequelize,
    tableName: 'dtb_gift_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gift_id" },
          { name: "list_id" },
          { name: "shop_id" },
        ]
      },
    ]
  });
};
