interface Customers {
    customer_id: number;
    name01: string;
    kana01?: string;
    zip01?: string;
    zip02?: string;
    pref?: number;
    addr01?: string;
    addr02?: string;
    email: string;
    email_mobile?: string;
    tel01?: string;
    tel02?: string;
    tel03?: string;
    fax01?: string;
    fax02?: string;
    fax03?: string;
    password: string;
    reminder?: number;
    reminder_answer?: string;
    secret_key: string;
    note?: string;
    status: number;
    create_date: Date;
    update_date?: Date;
    del_flg: number;
    mailmaga_flg?: number;
    shop_id: number;
    crank_id?: number;
    browsing_history?: string;
    customer_code?: string;
    social_code?: string;
    social_account_id?: string;
    delegate_position: string;
    delegate_name01: string;
    delegate_name02: string;
    delegate_kana01: string;
    delegate_kana02: string;
    charge_name01: string;
    charge_name02: string;
    charge_kana01: string;
    charge_kana02: string;
    corporate_image?: string;
    classified01: string;
    classified02?: string;
    classified03?: string;
    classified04?: string;
    classified05?: string;
    partner_flg: number;
    capital?: string;
    business_content?: string;
    open_time?: string;
    close_time?: string;
    regular_holiday?: string;
    remarks?: string;
    establishment_date?: Date;
    corporate_url?: string;
    employees_number?: number;
    employees_site_area?: string;
    main_customer?: string;
    transaction_bank: string;
    corporate_bank_name: string;
    corporate_branch_name: string;
    corporate_deposit_type: number;
    corporate_account_number: string;
    corporate_account_holder: string;
    holiday_flg1: number;
    holiday_flg2: number;
    holiday_flg3: number;
    holiday_flg4: number;
    holiday_flg5: number;
    holiday_flg6: number;
    holiday_flg7: number;
    usage_id: number;
}


declare namespace Express {
    namespace Multer {
        interface File {
            location?: string;  // Add the 'location' property
        }
    }
}
