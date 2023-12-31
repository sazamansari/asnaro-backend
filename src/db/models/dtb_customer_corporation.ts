import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnect"; // Adjust this import path as per your project structure

// Define the attributes of the DtbCustomerCorporation model
interface DtbCustomerCorporationAttributes {
  id: number;
  customer_id: number;
  corporation_id: number;
  claimname: string;
  credit_id: number;
  credit_rate: number;
  del_flg: number;
  create_date: Date;
  update_date: Date;
  shop_id: number;
}

// Define which attributes are optional for creation
interface DtbCustomerCorporationCreationAttributes extends Optional<DtbCustomerCorporationAttributes, "id"> {}

// The DtbCustomerCorporation model class definition
class DtbCustomerCorporation extends Model<DtbCustomerCorporationAttributes, DtbCustomerCorporationCreationAttributes> implements DtbCustomerCorporationAttributes {
  public id!: number;
  public customer_id!: number;
  public corporation_id!: number;
  public claimname!: string;
  public credit_id!: number;
  public credit_rate!: number;
  public del_flg!: number;
  public create_date!: Date;
  public update_date!: Date;
  public shop_id!: number;
}

DtbCustomerCorporation.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "ID"
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "顧客ID"
  },
  corporation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "会社ID"
  },
  claimname: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: "請求先"
  },
  credit_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "掛け払い方法"
  },
  credit_rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "掛け率"
  },
  del_flg: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "削除フラグ"
  },
  create_date: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: "作成日時"
  },
  update_date: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: "更新日時"
  },
  shop_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "店舗ID"
  }
}, {
  sequelize: sequelizeConnection, // pass the sequelize instance
  tableName: 'dtb_customer_corporation',
  timestamps: false,
  modelName: 'DtbCustomerCorporation' // This adds a name to the model
});

export default DtbCustomerCorporation;