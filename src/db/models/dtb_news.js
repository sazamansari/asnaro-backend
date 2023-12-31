const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_news', {
    news_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ニュースID"
    },
    news_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    news_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "タイトル"
    },
    news_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "本文"
    },
    news_select: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
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
    delivery_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "配信フラグ"
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "配信日"
    },
    news_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "URL"
    }
  }, {
    sequelize,
    tableName: 'dtb_news',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "news_id" },
        ]
      },
      {
        name: "news_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "news_id" },
        ]
      },
    ]
  });
};
