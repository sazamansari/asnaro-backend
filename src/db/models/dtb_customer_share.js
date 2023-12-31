const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_share', {
    customer_share_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "顧客共有フラグ"
    },
    cart_share_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "カート共有フラグ"
    },
    category_share_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "カテゴリ共有フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_share',
    timestamps: false
  });
};
