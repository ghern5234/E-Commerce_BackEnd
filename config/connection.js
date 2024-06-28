// Set up a connection to a PostgreSQL database

// Load environment variable from a .env file into process.env
require('dotenv').config();

// Import Sequelize library
const Sequelize = require('sequelize');

// Create a sequelze instance for connecting to the database
// Check if a database URL is provided in the environment variables
// If DB_URL is defined, use it to connect to the database
// DB_URL is an environment variable that typically contains a complete connection string or URL for a database.
// This URL provides all the necessary info to connect to the database in a single string, includiong the databse type, username, password, host, port, and database name.
// When a db_URL is provided, it simplifies the database connection setup because all the required information is embedded in a single string.
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL) 
  // If DB_URL is not defined, use individual database connection parameters
  : new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Database username
    process.env.DB_PASSWORD, // Database password
    {
      host: 'localhost',  // Database host
      dialect: 'postgres', // Database dialect (PostgreSQL)
      dialectOptions: {
        decimalNumbers: true, // Option to treat decimal numbers correctly
      },
    });

// Export this Sequelize instance to be used in otehr parts of the application
module.exports = sequelize;
