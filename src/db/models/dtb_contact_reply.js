const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_contact_reply', {
    contact_reply_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "お問い合わせ返信ID"
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "お問い合わせID"
    },
    direction: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "宛先"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "タイトル"
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "問い合わせ内容"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "ステータス"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_contact_reply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact_reply_id" },
        ]
      },
    ]
  });
};
