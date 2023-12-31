const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_class', {
    class_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "規格ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格名"
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    class_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格コード"
    }
  }, {
    sequelize,
    tableName: 'dtb_class',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "class_id" },
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
        name: "dtb_class_update_date_idx",
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
