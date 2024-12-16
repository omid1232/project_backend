const playersData = [
    { name: 'Player1', score: 5000 },
    { name: 'Player2', score: 4500 },
    { name: 'Player3', score: 4200 },
    { name: 'Player4', score: 3900 },
    { name: 'Player5', score: 3500 },
  ];
  
  // Get all players' scores
  const getScoreboard = (req, res) => {
    try {
      // Sort players by score in descending order before sending
      const sortedPlayers = playersData.sort((a, b) => b.score - a.score);
      res.status(200).json(sortedPlayers);
    //   console.log("we are in controller")
    } catch (error) {
      res.status(500).json({ message: 'Error fetching scoreboard data.' });
    }
  };
  
  module.exports = {
    getScoreboard,
  };
  