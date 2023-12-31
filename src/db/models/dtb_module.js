const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_module', {
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "モジュールID"
    },
    module_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "モジュールコード"
    },
    module_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "モジュール名"
    },
    sub_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブ情報"
    },
    auto_update_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "自動アップデートフラグ"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
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
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "商品ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_module',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_id" },
          { name: "shop_id" },
        ]
      },
      {
        name: "ix_shop_id_module_code",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "module_code" },
        ]
      },
    ]
  });
};
