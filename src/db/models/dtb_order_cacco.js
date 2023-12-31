const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_cacco', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "注文ID"
    },
    shipping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "注文ID"
    },
    regist_flg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "イベント登録フラグ"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ステータス"
    },
    try_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "実行回数"
    },
    event_id: {
      type: DataTypes.STRING(47),
      allowNull: false,
      comment: "イベントID"
    },
    event_result: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "審査結果コード"
    },
    order_cacco_data: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "レスポンスデータ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_cacco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "shipping_id" },
        ]
      },
    ]
  });
};
