const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_stock_mail', {
    stock_mail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "入荷通知メールID"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "メールアドレス"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    productclass_id1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品規格1"
    },
    productclass_id2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品規格2"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_stock_mail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stock_mail_id" },
        ]
      },
      {
        name: "ix_email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
