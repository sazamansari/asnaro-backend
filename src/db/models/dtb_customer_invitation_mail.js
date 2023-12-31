const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_invitation_mail', {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "顧客ID"
    },
    invitation_key: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "紹介キー"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_invitation_mail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
