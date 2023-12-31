const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_question', {
    question_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "質問ナンバー"
    },
    checksheet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "アンケートID"
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "質問ID"
    },
    question_title: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "質問名"
    },
    option_item: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "質問項目"
    },
    kind: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "質問タイプ"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ショップID"
    }
  }, {
    sequelize,
    tableName: 'dtb_question',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "question_no" },
        ]
      },
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
