const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_other_deliv', {
    other_deliv_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "配送先ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "顧客ID"
    },
    name01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名前01"
    },
    name02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名前02"
    },
    kana01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カナ01"
    },
    kana02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カナ02"
    },
    zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "郵便番号01"
    },
    zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "郵便番号02"
    },
    pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "都道府県"
    },
    addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "住所01"
    },
    addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "住所02"
    },
    tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号01"
    },
    tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号02"
    },
    tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "電話番号03"
    }
  }, {
    sequelize,
    tableName: 'dtb_other_deliv',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "other_deliv_id" },
        ]
      },
    ]
  });
};
