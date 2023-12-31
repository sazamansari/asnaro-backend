const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_snva', {
    snva_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ナビプラス連携ID"
    },
    enabled: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "有効化フラグ"
    },
    domain: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "管理画面ドメイン"
    },
    serialkey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "シリアルキー"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_snva',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "snva_id" },
        ]
      },
    ]
  });
};
