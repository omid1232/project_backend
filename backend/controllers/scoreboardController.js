const Player = require('../models/Player');

// Fetch top 5 players by score
const getTopPlayers = async (req, res) => {
    try {
        const topPlayers = await Player.find()
            .sort({ score: -1 }) // Sort by score in descending order
            .limit(5); // Limit to top 5 players

        res.json(topPlayers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top players.' });
    }
};

module.exports = { getTopPlayers };
