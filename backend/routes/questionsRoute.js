const express = require('express');
const router = express.Router();
const { createQuestion } = require('../controllers/questionsController');

router.post('/', createQuestion);

module.exports = router;
