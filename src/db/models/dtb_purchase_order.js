const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_purchase_order', {
    purchase_order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "発注書ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受発注ID"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    acceptance_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "検収期間"
    },
    sales_tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税込金額"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税額"
    },
    rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "税率"
    },
    confirm_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "発注確定フラグ"
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
    }
  }, {
    sequelize,
    tableName: 'dtb_purchase_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purchase_order_id" },
        ]
      },
    ]
  });
};
