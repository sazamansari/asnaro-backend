const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_social_login', {
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
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "ディレクトリ名"
    },
    class_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "クラス名"
    }
  }, {
    sequelize,
    tableName: 'mtb_social_login',
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
