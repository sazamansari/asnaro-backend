const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_constants', {
    id: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "注釈"
    }
  }, {
    sequelize,
    tableName: 'mtb_constants',
    timestamps: false
  });
};
