const express = require('express');
const router = express.Router();
const { loginPlayer, loginDesigner } = require('../controllers/loginController');

// Route for player login
router.post('/player', loginPlayer);

// Route for designer login
router.post('/designer', loginDesigner);

module.exports = router;
