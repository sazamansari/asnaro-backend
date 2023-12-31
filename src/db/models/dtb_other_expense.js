const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_other_expense', {
    other_expense_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "その他費用ID"
    },
    estimate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "見積ID"
    },
    expense_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "その他費用名"
    },
    quantity: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "その他数量"
    },
    unit_price: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "その他単価"
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "その他金額"
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
    ng_check: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dtb_other_expense',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "other_expense_id" },
        ]
      },
    ]
  });
};
