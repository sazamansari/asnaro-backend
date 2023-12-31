const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_order_information', {
    information_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "お知らせID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受発注ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "企業ID"
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "定型文ID"
    },
    information_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "表示日"
    },
    order_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "受発注No."
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "工程ID"
    },
    information_url: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "URL"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
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
    important_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "重要フラグ"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    delivery_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "配信フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_order_information',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "information_id" },
        ]
      },
    ]
  });
};
