const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_blacklist', {
    blacklist_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ブラックリストID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "メールアドレス"
    },
    tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号01"
    },
    tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号02"
    },
    tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号03"
    },
    allshop: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "全店舗"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
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
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_blacklist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "blacklist_id" },
        ]
      },
    ]
  });
};
