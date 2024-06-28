// Import the Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the databse connection from the configuration file
const sequelize = require('../config/connection.js');

// Define a new class 'Category' that extends Sequelize's 'Model' class
class Category extends Model {}

// Initialize the 'Category' model (table) with it's columns and configuration
Category.init(
  {
    // Define the name column
    name: {
       type: DataTypes.STRING,
       allowNull: false
    },
    // Define the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    // Pass the Sequelize instance (database connection) to the model
    sequelize,
    timestamps: false, // Disable automatic timestamp columns
    freezeTableName: true, // Use the exact table name provided
    underscored: true, // Use underscored field names in the table
    modelName: 'category', // Set the model name to 'category'
  }
);

// Export the 'Category' model to be used
module.exports = Category;
