const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bloc', {
    bloc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ブロックID"
    },
    bloc_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ブロック名称"
    },
    tpl_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "テンプレートパスファイル"
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "ファイル名称"
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
    deletable_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "端末タイプID"
    }
  }, {
    sequelize,
    tableName: 'dtb_bloc',
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
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
