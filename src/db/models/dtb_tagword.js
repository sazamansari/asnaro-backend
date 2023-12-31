const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_tagword', {
    tagword_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "タグID"
    },
    tagword_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "タグ名"
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "カウント"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ランク"
    },
    delivery_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "配信フラグ"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_tagword',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tagword_id" },
        ]
      },
    ]
  });
};
