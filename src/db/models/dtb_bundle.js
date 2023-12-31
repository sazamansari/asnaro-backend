const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_bundle', {
    bundle_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "バンドルID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ショップID"
    },
    bundle_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "バンドルコード"
    },
    bundle_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "バンドル商品説明"
    },
    bundle_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "数量"
    },
    bundle_quantity_kbn: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "数量区分"
    },
    bundle_kbn: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "割引区分"
    },
    bundle_from: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "有効期間開始日"
    },
    bundle_to: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "有効期間終了日"
    },
    bundle_delive_free_flg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "送料無料フラグ"
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
    bundle_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "キャンペーンID"
    }
  }, {
    sequelize,
    tableName: 'dtb_bundle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bundle_id" },
        ]
      },
    ]
  });
};
