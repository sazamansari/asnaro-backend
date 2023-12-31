const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_set_product', {
    set_product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "セット商品ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ショップID"
    },
    set_product_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "セット商品コード"
    },
    set_product_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "セット商品説明"
    },
    set_product_kbn: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "割引区分"
    },
    set_product_from: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "有効期間開始日"
    },
    set_product_to: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "有効期間終了日"
    },
    set_product_delive_free_flg: {
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
    set_product_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "キャンペーンID"
    },
    set_product_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品状態フラグ"
    },
    set_product_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品名"
    },
    set_product_total_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "セット価格"
    }
  }, {
    sequelize,
    tableName: 'dtb_set_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "set_product_id" },
        ]
      },
    ]
  });
};
