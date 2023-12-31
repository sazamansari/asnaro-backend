const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_present', {
    present_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "プレゼントID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
    },
    exec_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "実施済フラグ"
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
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "SHOP ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受注ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_present',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "present_id" },
        ]
      },
    ]
  });
};
