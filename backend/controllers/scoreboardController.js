const Player = require('../models/Player');

const getTopPlayers = async (req, res) => {
    try {
        const topPlayers = await Player.find()
            .sort({ score: -1 }) 
            .limit(5); 

        res.json(topPlayers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top players.' });
    }
};

module.exports = { getTopPlayers };
