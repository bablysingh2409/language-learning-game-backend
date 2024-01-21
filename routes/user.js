const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const verifyUser=require('../middlewares/verifyToken');


router.post('/submit-score/:id', UserController.submitScore);
router.get('/get-scores/:id', UserController.getUserScores);


module.exports = router;
