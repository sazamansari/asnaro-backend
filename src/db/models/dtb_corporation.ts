import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/dbConnect"; // Adjust this import path as per your project structure

class Corporation extends Model {}

Corporation.init({
    corporation_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "会社ID"
    },
    corporate_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "会社名"
    },
    corporate_kana: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "会社名カナ"
    },
    chargename01: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "担当者様名前01"
    },
    chargename02: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "担当者様名前02"
    },
    chargekana01: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "担当者様カナ01"
    },
    chargekana02: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "担当者様カナ02"
    },
    corporate_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "メールアドレス"
    },
    corporate_zip01: {
        type: DataTypes.STRING(3),
        allowNull: true,
        comment: "郵便番号01"
    },
    corporate_zip02: {
        type: DataTypes.STRING(4),
        allowNull: true,
        comment: "郵便番号02"
    },
    corporate_pref: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        comment: "都道府県"
    },
    corporate_addr01: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "住所01"
    },
    corporate_addr02: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "住所02"
    },
    corporate_tel01: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "電話番号01"
    },
    corporate_tel02: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "電話番号02"
    },
    corporate_tel03: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "電話番号03"
    },
    corporate_fax01: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "FAX番号01"
    },
    corporate_fax02: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "FAX番号02"
    },
    corporate_fax03: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "FAX番号03"
    },
    crank_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        comment: "会員ランクID"
    },
    credit: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: true,
        comment: "掛け払い"
    },
    note: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "備考"
    },
    status: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
        comment: "ステータス"
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
    shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "店舗ID"
    },
    corporate_customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "会員ID"
    },
    corporate_bank_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "請求書表示銀行名"
    },
    corporate_branch_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "請求書表示支店名"
    },
    corporate_account_kbn: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "請求書表示口座区分"
    },
    corporate_account_number: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "請求書表示口座番号"
    },
    corporate_account_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "請求書表示口座名義"
    },
    corporate_bill_message01: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "請求書表示メッセージ01"
    },
    corporate_bill_message02: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "請求書表示メッセージ02"
    },
    corporate_bill_message03: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "請求書表示メッセージ03"
    },
    corporate_receipt_message01: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "領収書表示メッセージ01"
    },
    corporate_receipt_message02: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "領収書表示メッセージ02"
    },
    corporate_receipt_message03: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "領収書表示メッセージ03"
    }
}, {
    sequelize:sequelize,
    tableName: 'dtb_corporation',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "corporation_id" },
            ]
        },
        // Include other indexes if there are any
    ],
    modelName: 'Corporation'
});

export default Corporation;