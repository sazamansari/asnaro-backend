const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_customer_delivfree', {
    customer_delivfree_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "顧客ID"
    },
    delivfree_kbn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "送料無料区分(1:キャンペーン)"
    },
    delivfree_kbn_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "送料無料区分関連テーブルID"
    },
    exec_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "実施済みフラグ"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "登録日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "SHOP ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_customer_delivfree',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_delivfree_id" },
        ]
      },
    ]
  });
};
