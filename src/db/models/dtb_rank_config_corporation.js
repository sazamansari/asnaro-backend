const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_rank_config_corporation', {
    rank_config_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ランク設定ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    rank_use_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "ランク設定使用フラグ"
    },
    point_use_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "ポイント使用フラグ"
    },
    discount_use_flg: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "割引使用フラグ"
    },
    summary_span: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "対象期間"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日"
    }
  }, {
    sequelize,
    tableName: 'dtb_rank_config_corporation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rank_config_id" },
        ]
      },
    ]
  });
};
