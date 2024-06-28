// Import seed functions from various seed files
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Import the sequelize instance for database connection
const sequelize = require('../config/connection');

// Define an asynchronous function to seed all data
const seedAll = async () => {
  // Sync the database and force drop all tables and recreate them
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // Seed the categories table
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  // Seed the products table
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  // Seed the tages table
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  // Seed the product tags table (associative table)
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  // Exit the process
  process.exit(0);
};

// Execute the seedAll function to seed data
seedAll();
