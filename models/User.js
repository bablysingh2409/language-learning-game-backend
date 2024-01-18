const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    scores: {
      english: { type: Number, default: 0 },
      hindi: { type: Number, default: 0 },
      french: { type: Number, default: 0 },
    },
  });

  const User = mongoose.model('User', userSchema);
  module.exports=User;