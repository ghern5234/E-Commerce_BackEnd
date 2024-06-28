// Import the Category model from the directory
const { Category } = require('../models');

// Define an array of objects where each object represents a category with a 'name' property

const categoryData = [
  {
    name: 'Shirts',
  },
  {
    name: 'Shorts',
  },
  {
    name: 'Music',
  },
  {
    name: 'Hats',
  },
  {
    name: 'Shoes',
  },
];

// Define a function to bulk create categories using the categoryData array
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
