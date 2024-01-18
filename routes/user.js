const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const verifyUser=require('../middlewares/verifyToken');


router.post('/submit-score/:id',verifyUser, UserController.submitScore);
router.get('/get-scores/:id',verifyUser, UserController.getUserScores);


module.exports = router;
