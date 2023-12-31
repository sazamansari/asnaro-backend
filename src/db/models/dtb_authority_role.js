const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_authority_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "主キー"
    },
    security_authority_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "権限レベル"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ロールID"
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_authority_role',
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
      {
        name: "security_authority_id",
        using: "BTREE",
        fields: [
          { name: "security_authority_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
