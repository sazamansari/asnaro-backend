const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_shipping', {
    shipping_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      comment: "配送番号"
    },
    shipping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "出荷ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "受注ID"
    },
    shipping_name01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先名前01"
    },
    shipping_name02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先名前02"
    },
    shipping_kana01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先カナ01"
    },
    shipping_kana02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先カナ02"
    },
    shipping_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号01"
    },
    shipping_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号02"
    },
    shipping_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号03"
    },
    shipping_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号01"
    },
    shipping_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号02"
    },
    shipping_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号03"
    },
    shipping_pref: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "配送先都道府県"
    },
    shipping_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "配送先郵便番号01"
    },
    shipping_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "配送先郵便番号02"
    },
    shipping_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先住所01"
    },
    shipping_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先住所02"
    },
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送先業者ID"
    },
    time_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "配送時間ID"
    },
    shipping_time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "お届け時間"
    },
    shipping_num: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "出荷番号"
    },
    shipping_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "お届け日"
    },
    shipping_commit_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "出荷日時"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
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
      allowNull: false,
      comment: "店舗ID"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "発送状況"
    }
  }, {
    sequelize,
    tableName: 'dtb_shipping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shipping_id" },
          { name: "order_id" },
        ]
      },
      {
        name: "dtb_shipping_order_id_index",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "shipping_number",
        using: "BTREE",
        fields: [
          { name: "shipping_number" },
        ]
      },
    ]
  });
};
