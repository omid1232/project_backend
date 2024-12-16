const express = require('express');
const { getScoreboard } = require('../controllers/scoreboardController');

const router = express.Router();

// Route to get the scoreboard
router.get('/', getScoreboard);

module.exports = router;
