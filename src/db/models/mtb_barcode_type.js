const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_barcode_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "名称"
    },
    rank: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "ランク"
    }
  }, {
    sequelize,
    tableName: 'mtb_barcode_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
