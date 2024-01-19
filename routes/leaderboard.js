const express=require('express');
const leaderBoard=require('../controllers/leaderboard');
const router=express.Router();

router.get('/:language',leaderBoard.getLeaderboardByLanguage);

module.exports=router;
