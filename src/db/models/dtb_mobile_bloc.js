const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_mobile_bloc', {
    bloc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "モバイルブロックID"
    },
    bloc_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "モバイルブロック名"
    },
    tpl_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "テンプレートパス"
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "ファイル名"
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
    php_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "PHPパス"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_mobile_bloc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bloc_id" },
        ]
      },
      {
        name: "filename",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "filename" },
          { name: "shop_id" },
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
