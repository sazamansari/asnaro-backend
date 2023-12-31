const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_product_gift', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注ID"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
    },
    gift_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ギフトID"
    },
    gift_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ギフト選択肢ID"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "数量"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ショップID"
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
    gift_ids: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "注文時にギフトID群"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_product_gift',
    timestamps: false,
    indexes: [
      {
        name: "idx_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "idx_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_product_class_id",
        using: "BTREE",
        fields: [
          { name: "product_class_id" },
        ]
      },
    ]
  });
};
