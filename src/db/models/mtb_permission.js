const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_permission', {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "名称"
    },
    rank: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "ランク"
    }
  }, {
    sequelize,
    tableName: 'mtb_permission',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id", length: 255 },
        ]
      },
    ]
  });
};
