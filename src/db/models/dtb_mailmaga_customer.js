const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mailmaga_customer', {
    mailmaga_customer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "メルマガ会員ID"
    },
    name01: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "名前01"
    },
    name02: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "名前02"
    },
    kana01: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "カナ01"
    },
    kana02: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "カナ02"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "メールアドレス"
    },
    email_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "モバイルメールアドレス"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ノート"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "ステータス"
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
    mailmaga_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "メルマガ配信フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_mailmaga_customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mailmaga_customer_id" },
        ]
      },
    ]
  });
};
