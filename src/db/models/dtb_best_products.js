const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_best_products', {
    best_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ベストID"
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "カテゴリID"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ランク"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "タイトル"
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント"
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
    }
  }, {
    sequelize,
    tableName: 'dtb_best_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "best_id" },
        ]
      },
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
