const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_settlement', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "取引"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受発注ID"
    },
    gmo_order_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "GMOオーダーID"
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "金額"
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "結果"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_settlement',
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
