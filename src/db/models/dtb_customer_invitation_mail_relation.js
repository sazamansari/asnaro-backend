const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_invitation_mail_relation', {
    invitation_key: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "紹介キー"
    },
    device_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "デバイスID"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_invitation_mail_relation',
    timestamps: false,
    indexes: [
      {
        name: "device_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "device_id" },
        ]
      },
    ]
  });
};
