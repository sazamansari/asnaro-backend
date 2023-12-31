const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_mail_temp', {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "メールアドレス"
    },
    mail_flag: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "メールフラグ"
    },
    temp_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "一時ID",
      unique: "temp_id"
    },
    end_flag: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "終了フラグ"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    },
    create_data: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_mail_temp',
    timestamps: false,
    indexes: [
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "temp_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "temp_id" },
        ]
      },
    ]
  });
};
