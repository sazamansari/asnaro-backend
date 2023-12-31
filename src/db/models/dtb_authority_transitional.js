const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_authority_transitional', {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "店舗タイプ"
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "メンバーID"
    }
  }, {
    sequelize,
    tableName: 'dtb_authority_transitional',
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
