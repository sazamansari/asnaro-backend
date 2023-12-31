const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_search_cols', {
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "対象ID"
    },
    col_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "カラム番号"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名前"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "型"
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名称"
    },
    items: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "値"
    },
    relate_column: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "関連カラム"
    },
    label2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名称2"
    },
    func: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "変換関数"
    },
    param: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "パラメータ"
    },
    align: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "alignタグ"
    },
    td_class: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "tdclassタグ"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "ステータス"
    },
    writable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "編集可否"
    },
    write_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "編集タイプ"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ランク"
    }
  }, {
    sequelize,
    tableName: 'dtb_search_cols',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "target_id" },
          { name: "col_id" },
        ]
      },
    ]
  });
};
