const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_analysis_setting', {
    analysis_setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "分析設定ID"
    },
    abc_enabled: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "ABC分析バッチ有効フラグ"
    },
    rfm_enabled: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "RFM分析バッチ有効フラグ"
    },
    cpm_enabled: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "CPM分析バッチ有効フラグ"
    },
    abc_borders: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ABC分析設定値"
    },
    rfm_ranks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "RFM分析設定値"
    },
    cpm_borders: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "CPM分析設定値"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_analysis_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "analysis_setting_id" },
        ]
      },
    ]
  });
};
