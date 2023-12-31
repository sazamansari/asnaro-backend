import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnect"; // Adjust this import path as per your project structure

interface DtbTermsAttributes {
    id: number;
    userId: number; // Assuming this still points to a user, but not directly referencing
    termsAccepted: boolean;
    create_date: Date;
    update_date: Date;
  }
  
  interface DtbTermsCreationAttributes extends Optional<DtbTermsAttributes, "id"> {}
  
  class DtbTerms extends Model<DtbTermsAttributes, DtbTermsCreationAttributes> implements DtbTermsAttributes {
    public id!: number;
    public userId!: number;
    public termsAccepted!: boolean;
    public create_date!: Date;
    public update_date!: Date;
  }
  
  DtbTerms.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ユーザーID"
    },
    termsAccepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "利用規約同意フラグ"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize: sequelizeConnection,
    tableName: 'dtb_terms',
    timestamps: true,
    modelName: 'DtbTerms'
  });
  
  export default DtbTerms;