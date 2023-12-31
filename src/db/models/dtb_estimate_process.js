const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_estimate_process', {
    est_detail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "工程内容ID"
    },
    estimate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "見積ID"
    },
    drawing_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工程内容図番"
    },
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工程内容品名"
    },
    quantity: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工程内容数量"
    },
    unit_price: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工程内容単価"
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "工程内容金額"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    ng_check: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dtb_estimate_process',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "est_detail_id" },
        ]
      },
    ]
  });
};
