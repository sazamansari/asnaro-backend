const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_pref', {
    pref_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "都道府県ID"
    },
    pref_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "都道府県名"
    },
    rank: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "ランク"
    }
  }, {
    sequelize,
    tableName: 'mtb_pref',
    timestamps: false
  });
};
