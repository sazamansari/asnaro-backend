const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_cpm', {
    bat_cpm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "CPMバッチID"
    },
    cpm_rank: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "CPMランク"
    },
    enrollment_term: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true,
      comment: "在籍期間"
    },
    buy_times: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "購入回数"
    },
    buy_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "購入金額"
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "人数"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "バッチ実行月"
    }
  }, {
    sequelize,
    tableName: 'dtb_bat_cpm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bat_cpm_id" },
        ]
      },
    ]
  });
};
