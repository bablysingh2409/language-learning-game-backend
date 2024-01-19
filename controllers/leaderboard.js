const User = require('../models/User');

const getLeaderboardByLanguage = async (req, res) => {
  const { language } = req.params;

  try {
    let leaderboard = await User.find({ [`scores.${language}`]: { $gt: 0 } })
        .sort({ [`scores.${language}`]: -1 })
        .limit(10); 
    

    res.json(leaderboard.map(user => ({ name: user.name, scores: user.scores[language] })));
  } catch (error) {
    console.error('Error fetching leaderboard:', error.message);
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
};

module.exports = {
  getLeaderboardByLanguage,
  
};
