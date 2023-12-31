const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_history', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "受発注ID"
    },
    order_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "注文番号"
    },
    contractor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注者ID"
    },
    orderer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "発注者ID"
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "工程ID"
    },
    order_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "受発注ステータス"
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "受注日"
    },
    accept_cancel_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "受注キャンセルフラグ"
    },
    order_cancel_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "発注キャンセルフラグ"
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "受発注完了日"
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "期限"
    },
    usage_fee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "システム利用料"
    },
    sales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "売上高(税別)"
    },
    sales_tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "売上高(税込)"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税額"
    },
    refund_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "返金請求額総額"
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
    estimate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "見積ID"
    },
    rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "消費税率"
    },
    usage_fee_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "システム利用率"
    },
    status_history: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "ステータス履歴"
    },
    bank_transfer_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "銀行振込フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_history',
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
    ]
  });
};
