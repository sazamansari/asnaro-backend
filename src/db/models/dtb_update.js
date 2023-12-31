const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_update', {
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "モジュールID"
    },
    module_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "モジュール名"
    },
    now_version: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "現在バージョン"
    },
    latest_version: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "最終バージョン"
    },
    module_explain: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "モジュールパス"
    },
    main_php: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "実行PHP"
    },
    extern_php: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "拡張PHP"
    },
    install_sql: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "インストールSQL"
    },
    uninstall_sql: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "アンインストールSQL"
    },
    other_files: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "その他のファイル"
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
      allowNull: true,
      comment: "更新日時"
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "リリース日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_update',
    timestamps: false,
    indexes: [
      {
        name: "module_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_id" },
        ]
      },
    ]
  });
};
