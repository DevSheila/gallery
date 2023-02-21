const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
// const app = express();

// connecting the database


const db = mongoose;
const SERVER_DB_URI= 'mongodb+srv://Sheila:Sheila%408@trackieapi.ss0ark2.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await db.connect(SERVER_DB_URI,{useNewUrlParser:true,useUnifiedTopology: true},()=>{
      console.log("Connected to DB!");
    })

  } catch (error) {
    console.log(error);
  }
};
connectDB();
// Initializing the app
const app = express();



// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);



 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports = app;