const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_contact', {
    contact_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "問い合わせID"
    },
    name01: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "名前01"
    },
    zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "郵便番号01"
    },
    zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "郵便番号02"
    },
    pref: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "都道府県"
    },
    addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "住所01"
    },
    addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "住所02"
    },
    tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号01"
    },
    tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号02"
    },
    tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号03"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス"
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "問い合わせ内容"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "ステータス"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "問い合わせタイトル"
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "企業名"
    }
  }, {
    sequelize,
    tableName: 'dtb_contact',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
    ]
  });
};
