const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_couponcode', {
    couponcode_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "クーポンコードID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ショップID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "クーポンタイトル"
    },
    couponcode_type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "対象者（クーポンタイプ）"
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "クーポンコード"
    },
    code_group: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "クーポンコードグループ"
    },
    discount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "値引額"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "有効期間開始日"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "有効期間終了日"
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "管理用メモ"
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
    }
  }, {
    sequelize,
    tableName: 'dtb_couponcode',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "couponcode_id" },
        ]
      },
      {
        name: "shop_id_code_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "code" },
        ]
      },
    ]
  });
};
