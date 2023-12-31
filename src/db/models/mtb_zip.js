const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtb_zip', {
    code: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "コード"
    },
    old_zipcode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "旧郵便番号コード"
    },
    zipcode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "郵便番号コード"
    },
    state_kana: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "県名カナ"
    },
    city_kana: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "市名カナ"
    },
    town_kana: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "町名カナ"
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "県名"
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "市名"
    },
    town: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "町名"
    },
    flg1: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "フラグ1"
    },
    flg2: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "フラグ2"
    },
    flg3: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "フラグ3"
    },
    flg4: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "フラグ4"
    },
    flg5: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "フラグ5"
    },
    flg6: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "フラグ6"
    }
  }, {
    sequelize,
    tableName: 'mtb_zip',
    timestamps: false
  });
};
