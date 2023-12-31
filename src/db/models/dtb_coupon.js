const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_coupon', {
    coupon_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "クーポンID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "クーポン名"
    },
    coupon_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "クーポン画像"
    },
    coupon_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "クーポン種類"
    },
    coupon_value: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "内容"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "開始日時"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "終了日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "作成日時"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_coupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
        ]
      },
    ]
  });
};
