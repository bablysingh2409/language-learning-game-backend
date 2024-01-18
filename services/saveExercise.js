const mongoose = require('mongoose');
const exerciseData = require('../exerciseData');
const Exercise=require('../models/Exercise');


const saveExerciseToDB = async () => {
    try {
        for (const exercise of exerciseData) {
             const existingExercise= await Exercise.findOne({language:exercise.language ,question:exercise.question});
             if(!existingExercise){
                await Exercise.create(exercise)
             }
             else{
                console.log('exercise already exist');
             }
        }
    } catch (err) {
        console.error('Error saving exercises:', error.message);
    } finally {
        mongoose.connection.close();
    }

}

module.exports=saveExerciseToDB;