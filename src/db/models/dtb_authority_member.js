const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_authority_member', {
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
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "メンバーID"
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    },
    update_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_authority_member',
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
          { name: "member_id" },
        ]
      },
      {
        name: "dtb_authority_member_member_id",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
