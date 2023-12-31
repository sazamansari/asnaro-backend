const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_invitation_mail_point_rule', {
    invitation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "紹介ID"
    },
    invitation_point_for_inviter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "紹介者ポイント"
    },
    invitation_point_for_invited_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "友人ポイント"
    },
    invitation_disp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "招待メール表示フラグ"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_invitation_mail_point_rule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invitation_id" },
        ]
      },
    ]
  });
};
