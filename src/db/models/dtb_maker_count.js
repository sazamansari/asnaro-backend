const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_maker_count', {
    maker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "メーカーID"
    },
    product_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品数"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_maker_count',
    timestamps: false
  });
};
