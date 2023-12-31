const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_volume_config', {
    rank_config_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ランク設定ID"
    },
    crank_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "顧客ランクID"
    },
    order_volume_min: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "受注金額下限"
    },
    order_volume_max: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "受注金額上限"
    },
    point_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "ポイント率"
    },
    discount_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引率"
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
    tableName: 'dtb_order_volume_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rank_config_id" },
          { name: "crank_id" },
        ]
      },
    ]
  });
};
