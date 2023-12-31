const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_baseinfo', {
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "会社名"
    },
    company_kana: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "会社名カナ"
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
      type: DataTypes.SMALLINT,
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
    business_hour: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "営業時間"
    },
    law_company: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "販売会社"
    },
    law_manager: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "販売責任者"
    },
    law_zip01: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "販売会社郵便番号01"
    },
    law_zip02: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "販売会社郵便番号02"
    },
    law_pref: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "販売会社都道府県"
    },
    law_addr01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "販売会社住所01"
    },
    law_addr02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "販売会社住所02"
    },
    law_tel01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "販売会社電話番号01"
    },
    law_tel02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "販売会社電話番号02"
    },
    law_tel03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "販売会社電話番号03"
    },
    law_fax01: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "販売会社FAX番号01"
    },
    law_fax02: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "販売会社FAX番号02"
    },
    law_fax03: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "販売会社FAX番号03"
    },
    law_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "販売会社メールアドレス"
    },
    law_url: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "販売会社URL"
    },
    law_term01: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約01"
    },
    law_term02: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約02"
    },
    law_term03: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約03"
    },
    law_term04: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約04"
    },
    law_term05: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約05"
    },
    law_term06: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約06"
    },
    law_term07: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約07"
    },
    law_term08: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約08"
    },
    law_term09: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約09"
    },
    law_term10: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "規約10"
    },
    tax: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 10,
      comment: "消費税率"
    },
    tax_rule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "消費税率ルール"
    },
    email01: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス01"
    },
    email02: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス02"
    },
    email03: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス03"
    },
    email04: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス04"
    },
    email05: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メールアドレス05"
    },
    free_rule: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "無料送料金額"
    },
    shop_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "店舗名"
    },
    shop_kana: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "店舗名カナ"
    },
    pdf_logo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "納品書ロゴ"
    },
    img_imprint: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "見積書印影画像"
    },
    point_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "ポイント付与率"
    },
    welcome_point: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "入会ポイント"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    top_tpl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "トップページテンプレート名"
    },
    product_tpl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "一覧テンプレート名"
    },
    detail_tpl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "詳細テンプレート名"
    },
    mypage_tpl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "マイページテンプレート名"
    },
    good_traded: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "販売状態"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    regular_holiday_ids: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "定休日"
    },
    shop_color: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "店舗カラー"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    shift_business_date: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "営業切替日時"
    },
    invoice_number: {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "請求書番号"
    }
  }, {
    sequelize,
    tableName: 'dtb_baseinfo',
    timestamps: false,
    indexes: [
      {
        name: "shop_id",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
