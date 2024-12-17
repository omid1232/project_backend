const Player = require('../models/Player'); // Import Player model
const Designer = require('../models/Designer'); // Import Designer model

// Player login
const loginPlayer = async (req, res) => {
    const { username, password } = req.body;
    try {
        const player = await Player.findOne({ username, password });
        if (player) {
            res.status(200).json({ message: 'Player login successful' });
        } else {
            res.status(401).json({ message: 'Invalid player credentials' });
        }
    } catch (err) {
        console.error('Error during player login:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Designer login
const loginDesigner = async (req, res) => {
    const { username, password } = req.body;
    try {
        const designer = await Designer.findOne({ username, password });
        if (designer) {
            res.status(200).json({ message: 'Designer login successful' });
        } else {
            res.status(401).json({ message: 'Invalid designer credentials' });
        }
    } catch (err) {
        console.error('Error during designer login:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const registerPlayer = async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const existingPlayer = await Player.findOne({ username });
        if (existingPlayer) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Create a new player
        const newPlayer = new Player({ username, password });
        await newPlayer.save();

        res.status(201).json({ message: 'Player registered successfully', player: newPlayer });
    } catch (error) {
        console.error('Error registering player:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Designer registration
const registerDesigner = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingDesigner = await Designer.findOne({ username });
        if (existingDesigner) {
            return res.status(400).json({ message: 'Username already exists for a designer' });
        }
        const newDesigner = new Designer({ username, password });
        await newDesigner.save();
        res.status(201).json({ message: 'Designer registered successfully' });
    } catch (err) {
        console.error('Error during designer registration:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { loginPlayer, loginDesigner, registerPlayer, registerDesigner };
