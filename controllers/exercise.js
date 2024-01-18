const Exercise=require('../models/Exercise');


const getExercisesByLanguage= async (req,res,next)=>{
    const {language}=req.params;
    try{  
        const exercises=await Exercise.find({language});
        res.status(200).json(exercises);
    }
    catch(err){
        next(err);
    }
}

module.exports={getExercisesByLanguage};