const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bkup', {
    bkup_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "バックアップ詳細"
    },
    bkup_memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "バックアップメモ"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_bkup',
    timestamps: false
  });
};
