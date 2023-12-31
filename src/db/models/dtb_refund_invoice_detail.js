const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_refund_invoice_detail', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "返金請求詳細ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "取引ID"
    },
    refund_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "返金請求ID"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "内容"
    },
    amount_money: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "請求金額"
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
    tableName: 'dtb_refund_invoice_detail',
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
