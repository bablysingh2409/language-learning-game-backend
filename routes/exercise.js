const express = require('express');
const router = express.Router();
const exercise = require('../controllers/exercise');
const verifyUser=require('../middlewares/verifyToken');

router.get('/:language',exercise.getExercisesByLanguage);

module.exports = router;
