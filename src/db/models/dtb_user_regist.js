const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_user_regist', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ユーザID"
    },
    org_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "役職名"
    },
    post_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "組織名"
    },
    name01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "名前01"
    },
    name02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "名前02"
    },
    kana01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "カナ01"
    },
    kana02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "カナ02"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "メールアドレス"
    },
    url: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "URL"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    secret_key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "シークレットキー",
      unique: "secret_key"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "ステータス"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "削除フラグ"
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
    tableName: 'dtb_user_regist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "secret_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "secret_key" },
        ]
      },
    ]
  });
};
