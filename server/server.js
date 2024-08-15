const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://salwakha940:khaledsalwa2003@cluster0.0tkfftw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// const requestsRouter = require('./routes/requests');
const attendanceRouter = require('./routes/attendance');

app.use('/attendance', attendanceRouter);

// app.use('/requests', requestsRouter);

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});








































// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');

// const app = express();
// const port = 5000;


// app.listen(5000,()=>{console.log("Server started on port 5000")})

// // Assure-toi d'utiliser l'URI de connexion correct depuis VS Code
// const CONNECTION_STRING = 'mongodb+srv://salwakha940:F8kM5gYh0L80K8ML@cluster0.0tkfftw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const dbName = 'db';
// let db;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get('/api', (req, res) => {
//   console.log('Received request at /api');
//   res.json({ users: ['userOne', 'userTwo', 'userThree', 'userFour'] });
// });

// // Connect to MongoDB and start the server
// MongoClient.connect(CONNECTION_STRING, (error, client) => {
//   if (error) {
//     console.error('Failed to connect to the database');
//     console.error(error);
//     process.exit(1);
//   } else {
//     db = client.db(dbName);
//     console.log('MongoDB Connected to database');

//     app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//   }
// });


























































// const express = require('express')
// var MongoClient =require("mongodb").MongoClient;
// var cors = require("cors");
// const multer = require("multer")
// const app = express()

// app.get("/api",(req,res)=>{
//     res.json({"users":["userOne","userTwo","userThree","userFour"]})
// })

// app.listen(5000,()=>{console.log("Server started on port 5000 ")})


// var CONNECTION_STRING ="mongodb+srv://salwakha940:khaledsalwa2003@cluster0.0tkfftw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// app.listen(5038,()=>{
//     MongoClient.connect(CONNECTION_STRING,(error,client)=>{
//         db=client.db(dbName);
//         console.log("Mongo DB Connected to database");
//     })
// })


// var dbName = "db";
// var db;

















