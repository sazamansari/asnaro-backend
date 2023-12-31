const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_templates', {
    template_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "テンプレートコード"
    },
    template_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "テンプレート名"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_templates',
    timestamps: false,
    indexes: [
      {
        name: "template_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_code" },
        ]
      },
    ]
  });
};
