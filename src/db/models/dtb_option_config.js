const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_option_config', {
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
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "オプション指定方法"
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "オプション名"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_option_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "seq" },
        ]
      },
    ]
  });
};
