const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_subscribe_order', {
    subscribe_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "定期購入ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
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
    tax: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "税額"
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "合計数"
    },
    payment_total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "支払い合"
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
      comment: "配送伝票番号"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    deliv_date: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送希望日時"
    },
    subscribe_interval: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "定期購入間隔"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    origin_order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "元受注ID"
    },
    gateway_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ゲートウェイステータス"
    },
    gateway_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ゲートウェイID"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    },
    lastorder_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最終オーダー日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_subscribe_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscribe_id" },
        ]
      },
    ]
  });
};
