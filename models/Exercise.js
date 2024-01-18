const mongoose=require('mongoose');


const exerciseSchema=new mongoose.Schema({
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctOption: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    language: { type: String, required: true },
})

module.exports=mongoose.model('Exercise',exerciseSchema);