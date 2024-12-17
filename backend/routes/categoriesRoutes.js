// routes/categoriesRoutes.js

const express = require('express');
const router = express.Router();
const { getAllCategories, createCategory } = require('../controllers/categoriesController');

// Route to get all categories
router.get('/', getAllCategories);

// Route to create a new category
router.post('/', createCategory);

module.exports = router;

