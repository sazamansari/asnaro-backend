const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_estimate', {
    estimate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "見積ID"
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
    estimate_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "依頼者名"
    },
    dept_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "部署名"
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
    charge: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "手数料"
    },
    tax: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "税"
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "合計"
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
    credit_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "掛け率"
    },
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "配送業者ID"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ステータス"
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "発効日"
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "有効期限"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "見積書タイトル"
    },
    estimate_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "見積番号"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
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
    estimate_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "見積書発行日"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受発注ID"
    },
    costomer_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "取引先企業名"
    },
    corporate_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "自社企業名"
    },
    zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "自社郵便番号01"
    },
    zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "自社郵便番号02"
    },
    pref: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "自社都道府県"
    },
    addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "自社住所01"
    },
    addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "自社住所02"
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "納期"
    },
    transport_costs: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "運搬費用"
    },
    contract_agree: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "受注者合意フラグ"
    },
    orderer_agree: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "発注者合意フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_estimate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "estimate_id" },
        ]
      },
    ]
  });
};
