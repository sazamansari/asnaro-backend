const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_coupon', {
    coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "クーポンID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "顧客ID"
    },
    used_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "使用フラグ"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_coupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
          { name: "customer_id" },
        ]
      },
    ]
  });
};
