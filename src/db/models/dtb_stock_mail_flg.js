const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_stock_mail_flg', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    productclass_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格ID1"
    },
    productclass_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "規格ID2"
    },
    send_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "送信フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_stock_mail_flg',
    timestamps: false
  });
};
