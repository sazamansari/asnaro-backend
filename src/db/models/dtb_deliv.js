const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_deliv', {
    deliv_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "配送業者ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名前"
    },
    service_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サービス名"
    },
    confirm_url: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "確認URL"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "ステータス"
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
      comment: "作成ID"
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
    deliv_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_deliv',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deliv_id" },
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
