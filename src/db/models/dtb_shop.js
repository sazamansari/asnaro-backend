const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_shop', {
    shop_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "店舗ID"
    },
    shop_key: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "店舗キー",
      unique: "shop_key"
    },
    template_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "テンプレートパス"
    },
    domain_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "ドメイン名"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "ステータス"
    },
    ip_logic_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "IPロジックモジュール使用ステータス"
    }
  }, {
    sequelize,
    tableName: 'dtb_shop',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "shop_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_key" },
        ]
      },
    ]
  });
};
