// controllers/loginController.js

// Player login
const loginPlayer = (req, res) => {
    const { username, password } = req.body;
    console.log('Player login attempt:', { username, password });

    // Mock response for demo
    if (username === 'player' && password === 'password') {
        res.json({ success: true, message: 'Player login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid Player credentials' });
    }
};

// Designer login
const loginDesigner = (req, res) => {
    const { username, password } = req.body;
    console.log('Designer login attempt:', { username, password });

    // Mock response for demo
    if (username === 'designer' && password === 'securepass') {
        res.json({ success: true, message: 'Designer login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid Designer credentials' });
    }
};

module.exports = { loginPlayer, loginDesigner };
