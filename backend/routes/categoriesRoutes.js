const express = require('express');
const { getCategories } = require('../controllers/categoriesController');
const router = express.Router();

// Route to get categories
router.get('/', getCategories);

module.exports = router;
