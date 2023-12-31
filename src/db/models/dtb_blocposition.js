const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_blocposition', {
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ページID"
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ターゲットID"
    },
    bloc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ブロックID"
    },
    bloc_row: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ブロック行番"
    },
    filename__: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ファイル名"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "端末タイプID"
    }
  }, {
    sequelize,
    tableName: 'dtb_blocposition',
    timestamps: false,
    indexes: [
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
