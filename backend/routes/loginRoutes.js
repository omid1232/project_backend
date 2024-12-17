const express = require('express');
const router = express.Router();
const { 
    loginPlayer, 
    loginDesigner, 
    registerPlayer, 
    registerDesigner 
} = require('../controllers/loginController');

// Route for player login
router.post('/player', loginPlayer);

// Route for designer login
router.post('/designer', loginDesigner);

// Route for player registration
router.post('/register/player', registerPlayer);

// Route for designer registration
router.post('/register/designer', registerDesigner);

module.exports = router;


