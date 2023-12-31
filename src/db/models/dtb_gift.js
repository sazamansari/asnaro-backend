const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_gift', {
    gift_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ギフトID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ショップID"
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ギフトコード"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ギフト名"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "並び順"
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
    tableName: 'dtb_gift',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gift_id" },
        ]
      },
    ]
  });
};
