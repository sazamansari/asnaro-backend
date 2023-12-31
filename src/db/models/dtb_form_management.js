const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_form_management', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "帳票管理ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "取引ID"
    },
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "帳票ID"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    confirm_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dtb_form_management',
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
    ]
  });
};
