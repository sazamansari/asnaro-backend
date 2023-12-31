const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_migration', {
    version: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    apply_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_migration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "version" },
        ]
      },
    ]
  });
};
