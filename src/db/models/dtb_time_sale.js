const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_time_sale', {
    time_sale_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "タイムセールID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ショップID"
    },
    time_sale_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "タイムセールコード"
    },
    time_sale_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "タイトル"
    },
    time_sale_kbn: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "割引区分"
    },
    time_sale_from: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "有効期間開始日"
    },
    time_sale_to: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "有効期間終了日"
    },
    time_sale_delive_free_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "送料無料フラグ"
    },
    time_sale_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "割引金額(率)"
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
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    time_sale_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "キャンペーン設定"
    }
  }, {
    sequelize,
    tableName: 'dtb_time_sale',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time_sale_id" },
        ]
      },
    ]
  });
};
