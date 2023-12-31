const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mailmaga_template', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "テンプレートID"
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "件名"
    },
    charge_image: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "添付画像"
    },
    mail_method: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "テキスト種別"
    },
    header: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ヘッダーテキスト"
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ボディテキスト"
    },
    main_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メインタイトル"
    },
    main_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メインコメント"
    },
    main_product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "メイン商品ID"
    },
    sub_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル"
    },
    sub_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント"
    },
    sub_product_id01: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品01"
    },
    sub_product_id02: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品02"
    },
    sub_product_id03: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品03"
    },
    sub_product_id04: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品04"
    },
    sub_product_id05: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品05"
    },
    sub_product_id06: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品06"
    },
    sub_product_id07: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品07"
    },
    sub_product_id08: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品08"
    },
    sub_product_id09: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品09"
    },
    sub_product_id10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品10"
    },
    sub_product_id11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品11"
    },
    sub_product_id12: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "サブ商品12"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
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
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_mailmaga_template',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_id" },
        ]
      },
      {
        name: "template_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_id" },
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
