const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_category', {
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "カテゴリID"
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カテゴリ名"
    },
    parent_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "親カテゴリID"
    },
    mapping_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "階層"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    category_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カテゴリーコード"
    }
  }, {
    sequelize,
    tableName: 'dtb_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "dtb_category_category_id_key",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "dtb_category_update_date_idx",
        using: "BTREE",
        fields: [
          { name: "update_date" },
        ]
      },
      {
        name: "ix_category_name",
        using: "BTREE",
        fields: [
          { name: "category_name" },
        ]
      },
    ]
  });
};
