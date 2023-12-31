const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_question_result', {
    result_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "アンケート回答ID"
    },
    checksheet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "アンケートID"
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "質問ID"
    },
    result_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "解答"
    },
    result_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "解答日時"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    name01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名前01"
    },
    name02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名前02"
    },
    kana01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カナ01"
    },
    kana02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カナ02"
    },
    sex: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "性別"
    },
    job: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "職業"
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "誕生日"
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
    tableName: 'dtb_question_result',
    timestamps: false,
    indexes: [
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
