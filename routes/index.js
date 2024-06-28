const router = require('express').Router(); // Import the Express router
const apiRoutes = require('./api'); // Import the API routes from the './api' directory

// Use the imported API routes and prefix them with '/api'
// Any route that starts with '/api' will be handled by 'apiRoutes'
router.use('/api', apiRoutes);

// Define a fallback route for any requests that do not match the API routes
// This will send a simple HTML response indicating a wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


// Export the router to be used in other parts of the application
module.exports = router;