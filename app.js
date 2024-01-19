const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const auth=require('./routes/auth');
const user=require('./routes/user');
const saveExerciseToDB=require('./services/saveExercise');
const exercise=require('./routes/exercise');
const Exercise=require('./models/Exercise');
const leaderboard=require('./routes/leaderboard');

const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/languageLearningDB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err) .then(() => {
    console.log('Connected to MongoDB');

    // Checking if data exists before saving
    Exercise.countDocuments({}, (err, count) => {
      if (err) {
        console.error('Error checking existing data:', err.message);
      } else {
        if (count === 0) {
          // if Data doesn't exist,then  save it
          saveExerciseToDB();
        } else {
          console.log('Data already exists in the database.');
        }
      }
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err)));



app.use('/auth',auth);
app.use('/user',user);
app.use('/exercise',exercise);
app.use('/leaderboard',leaderboard);

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errMsg=err.message|| "something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errMsg,
        stack:err.stack
    })
})



app.listen('5800',()=>{
    console.log('server is running on port 5800');
})