const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_search_condition', {
    search_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "検索条件ID"
    },
    search_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "検索名称"
    },
    search_cond_str: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "検索文字列"
    },
    target: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "product\/order\/customer"
    },
    count_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "件数フラグ"
    },
    sql_info: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "検索SQL"
    },
    use_group: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ユーザグループ"
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "削除フラグ"
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "POST値"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_search_condition',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "search_id" },
        ]
      },
    ]
  });
};
