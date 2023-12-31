const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_member', {
    member_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "メンバーID"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "名前"
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "所属"
    },
    login_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ログインID"
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "パスワード"
    },
    authority: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "権限"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ランク"
    },
    work: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "(固定)"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    login_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ログイン日時"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ロールID"
    }
  }, {
    sequelize,
    tableName: 'dtb_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
