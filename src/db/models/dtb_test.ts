const { Model, DataTypes } = require('sequelize');
const sequelize = require('./path/to/your/sequelize/connection'); // Adjust the path to your Sequelize connection

class Test extends Model {}

Test.init({
  // Example fields for a User model
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
 
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  
  // Other fields like address, phone, etc.
  // ...
}, {
  sequelize,
  modelName: 'test',
  timestamps: true, // Enable timestamps for createdAt and updatedAt
  paranoid: true, // Enable soft deletes
  underscored: true, // Use snake_case rather than camelCase for column names
  // Other model options
});

module.exports = Test;