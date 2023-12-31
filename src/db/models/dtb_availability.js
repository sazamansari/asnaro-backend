const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_availability', {
    availability_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "空き状況ID"
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "工程ID"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "空き状況ステータス"
    },
    availability_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "空き状況日付"
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
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_availability',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "availability_id" },
        ]
      },
    ]
  });
};
