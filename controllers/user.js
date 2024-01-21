const User = require('../models/User');

const submitScore = async (req, res,next) => {
  const { language, score } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { [`scores.${language}`]: score } },
      { new: true }
    );

    res.json(updatedUser.scores);
  } catch (err) {
    next(err) 
  }
};

const getUserScores = async (req, res,next) => {
  try {
    const userScores = await User.findById(req.params.id).select('scores');
    res.json(userScores);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  submitScore,
  getUserScores,
};
