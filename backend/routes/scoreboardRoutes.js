const express = require('express');
const router = express.Router();
const { getTopPlayers } = require('../controllers/scoreboardController');

// Route to fetch top 5 players
router.get('/', getTopPlayers);

module.exports = router;
