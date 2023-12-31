const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bat_rfm', {
    bat_rfm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "RFMバッチID"
    },
    r: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "R値"
    },
    f: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "F値"
    },
    m: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "M値"
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "人数"
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      comment: "購入金額"
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
    tableName: 'dtb_bat_rfm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bat_rfm_id" },
        ]
      },
    ]
  });
};
