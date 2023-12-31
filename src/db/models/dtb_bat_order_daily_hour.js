const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_order_daily_hour', {
    total_order: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "購入件数"
    },
    member: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "会員"
    },
    nonmember: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "非会員"
    },
    men: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "男性"
    },
    women: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "女性"
    },
    men_member: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "男性会員"
    },
    men_nonmember: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "男性非会員"
    },
    women_member: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "女性会員"
    },
    women_nonmember: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0,
      comment: "女性非会員"
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
    hour: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "購入時間"
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
    tableName: 'dtb_bat_order_daily_hour',
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
