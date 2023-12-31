const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_send_customer', {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    mailmaga_customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "メルマガ会員ID"
    },
    send_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "送信ID"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "顧客名"
    },
    send_flag: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "送信ステータス"
    }
  }, {
    sequelize,
    tableName: 'dtb_send_customer',
    timestamps: false,
    indexes: [
      {
        name: "dtb_send_customer_customer_id_key",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "ix_email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "ix_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
