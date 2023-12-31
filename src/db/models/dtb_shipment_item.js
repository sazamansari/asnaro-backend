const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_shipment_item', {
    shipping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "出荷ID"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "受注ID"
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "商品名"
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品コード"
    },
    classcategory_name1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格名1"
    },
    classcategory_name2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "規格名2"
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "価格"
    },
    quantity: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "数量"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_shipment_item',
    timestamps: false,
    indexes: [
      {
        name: "dtb_shipment_item_shipping_id_order_id_product_class_id_index",
        using: "BTREE",
        fields: [
          { name: "shipping_id" },
          { name: "order_id" },
          { name: "product_class_id" },
        ]
      },
    ]
  });
};
