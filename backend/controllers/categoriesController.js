// controllers/categoriesController.js

const Category = require('../models/Category');

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = new Category({ name });
        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Error creating category' });
    }
};

module.exports = { getAllCategories, createCategory };
