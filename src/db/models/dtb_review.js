const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_review', {
    review_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "レビューID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    reviewer_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "入力者名"
    },
    reviewer_url: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "入力者URL"
    },
    sex: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "性別"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    recommend_level: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "お勧めレベル"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "タイトル"
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "コメント"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 2,
      comment: "ステータス"
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
    tableName: 'dtb_review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "review_id" },
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
