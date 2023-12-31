const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_refund_invoice', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "返金請求ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "取引ID"
    },
    orderer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "発注者ID"
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "請求理由"
    },
    sales_tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税込総額"
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "返金額合計"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税額"
    },
    agree_flg_contractor: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "受注者合意フラグ"
    },
    agree_flg_orderer: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "発注者合意フラグ"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "返金請求書ステータス"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日時"
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
    }
  }, {
    sequelize,
    tableName: 'dtb_refund_invoice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
