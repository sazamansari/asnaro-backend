const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_store', {
    store_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "実店舗ID"
    },
    store_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "店舗コード"
    },
    store_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "店舗名"
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
    pref_id: {
      type: DataTypes.INTEGER,
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
    },
    fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "FAX番号01"
    },
    fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "FAX番号02"
    },
    fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "FAX番号03"
    },
    s_pickup_time: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "受取開始時間"
    },
    e_pickup_time: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "受取終了時間"
    },
    open_time: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "開店時間"
    },
    close_time: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "閉店時間"
    },
    last_order: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ラストオーダー"
    },
    seat_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "座席数"
    },
    parking_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "駐車場の有無"
    },
    parking_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "駐車可能台数"
    },
    open_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "開店日"
    },
    close_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "閉店日"
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メモ"
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "経度"
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "緯度"
    },
    store_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "店舗メールアドレス"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "作成者ID"
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
      allowNull: true,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    }
  }, {
    sequelize,
    tableName: 'dtb_store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
