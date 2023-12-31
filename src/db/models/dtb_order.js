const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "受注ID"
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受注親ID"
    },
    order_temp_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
      comment: "顧客備考"
    },
    order_name01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客名前01"
    },
    order_name02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客名前02"
    },
    order_kana01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客カナ01"
    },
    order_kana02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客カナ02"
    },
    order_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客Email"
    },
    order_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "顧客電話番号01"
    },
    order_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "顧客電話番号02"
    },
    order_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "顧客電話番号03"
    },
    order_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "顧客FAX番号01"
    },
    order_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "顧客FAX番号02"
    },
    order_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "顧客FAX番号03"
    },
    order_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "顧客郵便番号01"
    },
    order_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "顧客郵便番号02"
    },
    order_pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客都道府県"
    },
    order_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客住所01"
    },
    order_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "顧客住所01"
    },
    order_sex: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "顧客性別"
    },
    order_birth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "顧客誕生日"
    },
    order_job: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客職業"
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
      comment: "配送先カナ02"
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
      comment: "割引額"
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
      comment: "使用ポイント"
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
      comment: "税金額"
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "合計額"
    },
    payment_total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "支払い合計"
    },
    is_tax_free: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "免税適用フラグ"
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
      comment: "配送ナンバー"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "受注ステータス"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
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
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    commit_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "出荷日時"
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
      comment: "配送希望日"
    },
    conveni_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コンビニ使用欄"
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
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "キャンペーンID"
    },
    credit_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "掛け率"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    shipping_no: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "送り状番号"
    },
    store_receipt: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "受取店舗フラグ"
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受取店舗ID"
    },
    pickup_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "受取日時"
    },
    udid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "UDID"
    },
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "担当者ID"
    },
    staff_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "担当者名"
    },
    pos_flg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "POSフラグ"
    },
    receipt_price_card: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "クレジット支払金額"
    },
    receipt_price_cash: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "キャッシュ支払金額"
    },
    receipt_price_emoney: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "電子マネー支払金額"
    },
    receipt_price_debit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "デビット支払金額"
    },
    receipt_price_gift1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "商品券01支払金額"
    },
    receipt_price_gift2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "商品券02支払金額"
    },
    clientele: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "客層"
    },
    pos_order_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "POS受注ID"
    },
    balance: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "お釣り"
    },
    deposit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "預り額"
    },
    discount_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "全体割引額"
    },
    tax_rule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 2,
      comment: "税率ルール"
    },
    tax_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0,
      comment: "税率"
    },
    have_point: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "レシート再印字用：購入時点の所有ポイント"
    },
    prememory_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "プリメモリボタン番号"
    },
    prememory_string: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "プリメモリボタン文字列"
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
    },
    receipt_existence_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "領収書出力フラグ"
    },
    device_info: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "デバイス情報"
    },
    http_header: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "HTTPヘッダ"
    }
  }, {
    sequelize,
    tableName: 'dtb_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "dtb_order_udid_idx",
        using: "BTREE",
        fields: [
          { name: "udid" },
        ]
      },
      {
        name: "ix_order_temp_id",
        using: "BTREE",
        fields: [
          { name: "order_temp_id" },
        ]
      },
      {
        name: "dtb_order_create_date_idx",
        using: "BTREE",
        fields: [
          { name: "create_date" },
        ]
      },
      {
        name: "ix_shop_id_create_date",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "create_date" },
        ]
      },
      {
        name: "ix_shop_id_update_date",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "update_date" },
        ]
      },
      {
        name: "ix_staff_id_shop_id",
        using: "BTREE",
        fields: [
          { name: "staff_id" },
          { name: "shop_id" },
        ]
      },
      {
        name: "dtb_order_customer_id_shop_id_del_flg_index",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "shop_id" },
          { name: "del_flg" },
        ]
      },
    ]
  });
};
