const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mobile_pagelayout', {
    page_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ページID"
    },
    page_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ページ名"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "URL"
    },
    php_dir: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "PHPパス"
    },
    tpl_dir: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "テンプレートパス"
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ファイル名"
    },
    header_chk: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "ヘッダーチェック"
    },
    footer_chk: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "フッターチェック"
    },
    edit_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "編集フラグ"
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "AUTHORタグ"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "DESCRIPTIONタグ"
    },
    keyword: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "KEYWORDタグ"
    },
    update_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "更新URL"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_mobile_pagelayout',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
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
