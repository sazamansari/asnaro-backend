const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_ec_campaign', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "注文ID"
    },
    ec_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "キャンペーンID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ショップID"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_ec_campaign',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "ec_campaign_id" },
        ]
      },
    ]
  });
};
