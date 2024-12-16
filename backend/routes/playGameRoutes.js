const express = require('express');
const router = express.Router();
const {
    getCurrentQuestion,
    getAnsweredQuestions,
    submitAnswer
} = require('../controllers/playGameController');

// Routes for Play Game
router.get('/current_question', getCurrentQuestion);
router.get('/answered_questions', getAnsweredQuestions);
router.post('/submit_answer', submitAnswer);

module.exports = router;
