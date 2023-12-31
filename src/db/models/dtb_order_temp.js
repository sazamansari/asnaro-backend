const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_temp', {
    order_temp_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "受注一時ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "顧客ID"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メッセージ"
    },
    order_name01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "注文者名前01"
    },
    order_name02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "注文者名前02"
    },
    order_kana01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "注文者カナ01"
    },
    order_kana02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "注文者カナ02"
    },
    order_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者メールアドレス"
    },
    order_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者電話番号01"
    },
    order_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者電話番号02"
    },
    order_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者電話番号03"
    },
    order_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者FAX番号01"
    },
    order_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者FAX番号02"
    },
    order_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者FAX番号03"
    },
    order_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "注文者郵便番号01"
    },
    order_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "注文者郵便番号02"
    },
    order_pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者都道府県"
    },
    order_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者住所01"
    },
    order_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者住所02"
    },
    order_sex: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "注文者性別"
    },
    order_birth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "注文者誕生日"
    },
    order_job: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "注文者職業"
    },
    deliv_name01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先名前01"
    },
    deliv_name02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先名前02"
    },
    deliv_kana01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先カナ01"
    },
    deliv_kana02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先カナ01"
    },
    deliv_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号01"
    },
    deliv_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号02"
    },
    deliv_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号03"
    },
    deliv_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号01"
    },
    deliv_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号02"
    },
    deliv_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号03"
    },
    deliv_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "配送先郵便番号01"
    },
    deliv_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "配送先郵便番号02"
    },
    deliv_pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先都道府県"
    },
    deliv_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先住所01"
    },
    deliv_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先住所02"
    },
    subtotal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "小計"
    },
    discount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引"
    },
    deliv_fee: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "配送料"
    },
    charge: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "手数料"
    },
    use_point: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "利用ポイント"
    },
    add_point: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "加算ポイント"
    },
    birth_point: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "誕生日ポイント"
    },
    coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "クーポンID"
    },
    coupon_label: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "クーポン名"
    },
    coupon_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "クーポン価格"
    },
    tax: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "税額"
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "合計金額"
    },
    payment_total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "支払い合計"
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "支払いID"
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "支払い方法"
    },
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "配送業者ID"
    },
    deliv_time_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "配送時間ID"
    },
    deliv_time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送時間"
    },
    deliv_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送番号"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    mail_flag: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "メールフラグ"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ステータス"
    },
    deliv_check: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "配送チェック"
    },
    point_check: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ポイントチェック"
    },
    loan_result: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ローン結果"
    },
    credit_result: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "クレジット結果"
    },
    credit_msg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "クレジットメッセージ"
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
    deliv_date: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送日時"
    },
    conveni_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コンビニ番号"
    },
    cell01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "携帯番号01"
    },
    cell02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "携帯番号02"
    },
    cell03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "携帯番号03"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受注ID"
    },
    memo01: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ01"
    },
    memo02: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ02"
    },
    memo03: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ03"
    },
    memo04: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ04"
    },
    memo05: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ05"
    },
    memo06: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ06"
    },
    memo07: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ07"
    },
    memo08: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ08"
    },
    memo09: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ09"
    },
    memo10: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ10"
    },
    session: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "セッション情報"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    order_customer_property1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客属性1"
    },
    order_customer_property2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客属性2"
    },
    order_customer_property3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客属性3"
    },
    order_customer_property4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客属性4"
    },
    customer_delivfree_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "送料無料フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_temp',
    timestamps: false,
    indexes: [
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "ix_order_temp_Id",
        using: "BTREE",
        fields: [
          { name: "order_temp_id" },
        ]
      },
    ]
  });
};
