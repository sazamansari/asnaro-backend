const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_order_daily_age', {
    order_count: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "購入件数"
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "購入合計"
    },
    total_average: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "購入平均"
    },
    start_age: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "開始年齢"
    },
    end_age: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "終了年齢"
    },
    member: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "会員"
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "購入日"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "集計日"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_bat_order_daily_age',
    timestamps: false,
    indexes: [
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
