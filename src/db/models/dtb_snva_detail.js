const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_snva_detail', {
    snva_detail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ナビプラス詳細ID"
    },
    bloc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ブロックID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "レコメンド名称"
    },
    tmpl_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "テンプレートID"
    },
    enabled: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "有効化フラグ"
    },
    changeable: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "編集可能フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_snva_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "snva_detail_id" },
        ]
      },
    ]
  });
};
