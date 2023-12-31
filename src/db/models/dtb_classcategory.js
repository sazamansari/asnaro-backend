const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_classcategory', {
    classcategory_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "規格分類ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格分類名"
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格ID"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ステータス"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
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
      allowNull: false,
      comment: "店舗ID"
    },
    class_category_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格分類コード"
    }
  }, {
    sequelize,
    tableName: 'dtb_classcategory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "classcategory_id" },
        ]
      },
      {
        name: "rank",
        using: "BTREE",
        fields: [
          { name: "rank" },
        ]
      },
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "dtb_classcategory_update_date_idx",
        using: "BTREE",
        fields: [
          { name: "update_date" },
        ]
      },
      {
        name: "ix_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
