const express = require('express');
const {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require('../controllers/questionsController');

const router = express.Router();

// Routes for questions
router.get('/', getQuestions); // Get all questions
router.post('/', createQuestion); // Create a new question
router.put('/:id', updateQuestion); // Update a question by ID
router.delete('/:id', deleteQuestion); // Delete a question by ID

module.exports = router;
