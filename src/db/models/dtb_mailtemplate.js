const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mailtemplate', {
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "テンプレートID"
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "テンプレート題名"
    },
    header: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "テンプレートヘッダー"
    },
    footer: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "テンプレートフッター"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 2
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "本文"
    }
  }, {
    sequelize,
    tableName: 'dtb_mailtemplate',
    timestamps: false
  });
};
