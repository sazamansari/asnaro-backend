const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_campaign_order', {
    campaign_order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "キャンペーン受注ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "注文ID"
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "キャンペーンID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "顧客ID"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "顧客備考"
    },
    order_name01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客名前01"
    },
    order_name02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客名前02"
    },
    order_kana01: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客カナ01"
    },
    order_kana02: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "顧客カナ02"
    },
    order_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者メールアドレス"
    },
    order_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者電話番号01"
    },
    order_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者電話番号02"
    },
    order_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者電話番号03"
    },
    order_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者FAX番号01"
    },
    order_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者FAX番号02"
    },
    order_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "注文者FAX番号03"
    },
    order_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "注文者郵便番号01"
    },
    order_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "注文者郵便番号02"
    },
    order_pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者都道府県"
    },
    order_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者住所01"
    },
    order_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "注文者住所02"
    },
    order_sex: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "注文者性別"
    },
    order_birth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "注文者誕生日"
    },
    order_job: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "注文者職業"
    },
    deliv_name01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先名前01"
    },
    deliv_name02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先名前02"
    },
    deliv_kana01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先カナ01"
    },
    deliv_kana02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先カナ02"
    },
    deliv_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号01"
    },
    deliv_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号02"
    },
    deliv_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先電話番号03"
    },
    deliv_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号01"
    },
    deliv_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号02"
    },
    deliv_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "配送先FAX番号03"
    },
    deliv_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "配送先郵便番号01"
    },
    deliv_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "配送先郵便番号02"
    },
    deliv_pref: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先都道府県"
    },
    deliv_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先住所01"
    },
    deliv_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "配送先住所02"
    },
    payment_total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "支払い合計"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    }
  }, {
    sequelize,
    tableName: 'dtb_campaign_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "campaign_order_id" },
        ]
      },
    ]
  });
};
