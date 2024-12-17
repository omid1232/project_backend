const express = require('express');
const router = express.Router();
const { getTopPlayers } = require('../controllers/scoreboardController');


router.get('/', getTopPlayers);

module.exports = router;
