import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect"; // Adjust this import path as per your project structure

// Define the attributes of the Customer model
interface CustomerAttributes {
  customer_id: number;
  name01: string;
  kana01: string;
  zip01: string | null;
  zip02: string | null;
  pref: number | null;
  addr01: string | null;
  addr02: string | null;
  email: string | null;
  email_mobile: string | null;
  tel01: string | null;
  tel02: string | null;
  tel03: string | null;
  fax01: string | null;
  fax02: string | null;
  fax03: string | null;
  password: string | null;
  reminder: number | null;
  reminder_answer: string | null;
  secret_key: string;
  note: string | null;
  status: number;
  create_date: Date;
  update_date: Date | null;
  del_flg: number;
  mailmaga_flg: number | null;
  shop_id: number;
  crank_id: number | null;
  browsing_history: string | null;
  customer_code: string | null;
  social_code: string | null;
  social_account_id: string | null;
  delegate_position: string;
  delegate_name01: string;
  delegate_name02: string;
  delegate_kana01: string;
  delegate_kana02: string;
  charge_name01: string;
  charge_name02: string;
  charge_kana01: string;
  charge_kana02: string;
  corporate_image: string | null;
  classified01: string;
  classified02: string | null;
  classified03: string | null;
  classified04: string | null;
  classified05: string | null;
  isVerified?: boolean;
  partner_flg: number;
  capital: string | null;
  business_content: string | null;
  open_time: string | null;
  close_time: string | null;
  regular_holiday: string | null;
  remarks: string | null;
  establishment_date: Date | null;
  corporate_url: string | null;
  employees_number: number | null;
  employees_site_area: string | null;
  main_customer: string | null;
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
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  usage_id: number;
  Terms_accepted: boolean;
}

// Define which attributes are optional for creation
interface CustomerCreationAttributes extends Optional<CustomerAttributes, "customer_id"> {}

// The Customer model class definition
class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public customer_id!: number;
  public name01!: string;
  public kana01!: string;
  public zip01!: string | null;
  public zip02!: string | null;
  public pref!: number | null;
  public addr01!: string | null;
  public addr02!: string | null;
  public email!: string | null;
  public email_mobile!: string | null;
  public tel01!: string | null;
  public tel02!: string | null;
  public tel03!: string | null;
  public fax01!: string | null;
  public fax02!: string | null;
  public fax03!: string | null;
  public password!: string | null;
  public reminder!: number | null;
  public reminder_answer!: string | null;
  public secret_key!: string;
  public note!: string | null;
  public status!: number;
  public create_date!: Date;
  public update_date!: Date | null;
  public del_flg!: number;
  public mailmaga_flg!: number | null;
  public shop_id!: number;
  public crank_id!: number | null;
  public browsing_history!: string | null;
  public customer_code!: string | null;
  public social_code!: string | null;
  public social_account_id!: string | null;
  public delegate_position!: string;
  public delegate_name01!: string;
  public delegate_name02!: string;
  public delegate_kana01!: string;
  public delegate_kana02!: string;
  public charge_name01!: string;
  public charge_name02!: string;
  public charge_kana01!: string;
  public charge_kana02!: string;
  public corporate_image!: string | null;
  public classified01!: string;
  public classified02!: string | null;
  public classified03!: string | null;
  public classified04!: string | null;
  public classified05!: string | null;
  public isVerified!: boolean; 
  public partner_flg!: number;
  public capital!: string | null;
  public business_content!: string | null;
  public open_time!: string | null;
  public close_time!: string | null;
  public regular_holiday!: string | null;
  public remarks!: string | null;
  public establishment_date!: Date | null;
  public corporate_url!: string | null;
  public employees_number!: number | null;
  public employees_site_area!: string | null;
  public main_customer!: string | null;
  public transaction_bank!: string;
  public corporate_bank_name!: string;
  public corporate_branch_name!: string;
  public corporate_deposit_type!: number;
  public corporate_account_number!: string;
  public corporate_account_holder!: string;
  public holiday_flg1!: number;
  public holiday_flg2!: number;
  public holiday_flg3!: number;
  public holiday_flg4!: number;
  public holiday_flg5!: number;
  public holiday_flg6!: number;
  public holiday_flg7!: number;
  public resetPasswordToken!: string | null;
  public resetPasswordExpires!: Date | null;
  public usage_id!: number;
  public Terms_accepted!: boolean;
}

Customer.init({
  customer_id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name01: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: "0"
  },
  kana01: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: "0"
  },
  zip01: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  zip02: {
    type: DataTypes.STRING(4),
    allowNull: true
  },
  pref: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  addr01: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  addr02: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  email_mobile: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  tel01: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  tel02: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  tel03: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  fax01: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  fax02: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  fax03: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  reminder: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  reminder_answer: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  secret_key: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  note: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1
  },
  create_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  update_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  del_flg: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0
  },
  mailmaga_flg: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  shop_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  crank_id: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  browsing_history: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  customer_code: {
    type: DataTypes.STRING(255),
    allowNull: true,
    unique: true
  },
  social_code: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  social_account_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  delegate_position: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  delegate_name01: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  delegate_name02: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  delegate_kana01: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  delegate_kana02: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  charge_name01: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  charge_name02: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  charge_kana01: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  charge_kana02: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  corporate_image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  classified01: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  classified02: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  classified03: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  classified04: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  classified05: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  partner_flg: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0
  },
  capital: {
    type: DataTypes.STRING(16),
    allowNull: true
  },
  business_content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  open_time: {
    type: DataTypes.TIME,
    allowNull: true
  },
  close_time: {
    type: DataTypes.TIME,
    allowNull: true
  },
  regular_holiday: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  establishment_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  corporate_url: {
    type: DataTypes.STRING(300),
    allowNull: true
  },
  employees_number: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  employees_site_area: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  main_customer: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  transaction_bank: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  corporate_bank_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  corporate_branch_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  corporate_deposit_type: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  corporate_account_number: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  corporate_account_holder: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  holiday_flg1: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  holiday_flg2: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  holiday_flg3: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  holiday_flg4: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  holiday_flg5: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  holiday_flg6: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  holiday_flg7: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  resetPasswordToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  resetPasswordExpires: {
    type: DataTypes.DATE,
    allowNull: true
  },
  usage_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Terms_accepted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  sequelize: connection,
  tableName: 'dtb_customer',
  timestamps: false,
});

export default Customer;
