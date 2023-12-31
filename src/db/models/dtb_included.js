const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_included', {
    included_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "梱包ID"
    },
    deliv_name01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送業者名前01"
    },
    deliv_name02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送業者名前02"
    },
    deliv_kana01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送業者カナ01"
    },
    deliv_kana02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送業者カナ02"
    },
    deliv_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号01"
    },
    deliv_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号02"
    },
    deliv_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号03"
    },
    deliv_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "FAX番号01"
    },
    deliv_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "FAX番号02"
    },
    deliv_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "FAX番号03"
    },
    deliv_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "郵便番号01"
    },
    deliv_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "郵便番号02"
    },
    deliv_pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "都道府県"
    },
    deliv_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "住所01"
    },
    deliv_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "住所02"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
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
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_included',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "included_id" },
        ]
      },
    ]
  });
};
