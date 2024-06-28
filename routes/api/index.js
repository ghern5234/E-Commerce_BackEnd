// Import specific route handlers from their respective files and associate them with URL paths
const router = require('express').Router(); // Import Express router

// Import route handlers for categories, products, and tags
const categoryRoutes = require('./category-routes'); 
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use the imported routes and prefix them accordingly
router.use('/categories', categoryRoutes); 
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Export the configured router to be used
module.exports = router;
