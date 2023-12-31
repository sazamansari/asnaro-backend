const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_sales', {
    sales_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "セールID"
    },
    sales_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "セール名"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "開始日時"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "終了日時"
    },
    rank: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ランク"
    },
    banner: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "バナー画像"
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
    }
  }, {
    sequelize,
    tableName: 'dtb_sales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sales_id" },
        ]
      },
    ]
  });
};
