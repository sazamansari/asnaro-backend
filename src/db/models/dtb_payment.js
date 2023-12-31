const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_payment', {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "支払いID"
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "支払い方法"
    },
    charge: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "手数料"
    },
    rule: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "支払い下限"
    },
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "配送業者ID"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    fix: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "固定"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "ステータス"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    couponcode_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "クーポンコード使用可否"
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
    payment_image: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "画像"
    },
    upper_rule: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "支払い上限"
    },
    charge_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "手数料フラグ"
    },
    rule_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "下限ルール"
    },
    upper_rule_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "上限ルール"
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "モジュールID"
    },
    module_path: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "モジュールパス"
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
    module_code: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "モジュールコード"
    },
    credit_flg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: "クレジットフラグ"
    },
    credit_closingdate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "クレジット締め日"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    use_present: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "プレゼント時の支払い方法フラグ"
    },
    payment_cooporate_kbn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "決済代行会社区分"
    },
    payment_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "利用決済区分"
    },
    use_download: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 3,
      comment: "ダウンロード使用可否"
    },
    receipt_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "領収書ダウンロード可否"
    },
    cacco_settle_method: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "O-PLUX決済方法選択"
    }
  }, {
    sequelize,
    tableName: 'dtb_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "dtb_payment_update_date_idx",
        using: "BTREE",
        fields: [
          { name: "update_date" },
        ]
      },
    ]
  });
};
