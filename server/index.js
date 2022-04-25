// Importing the required packages
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

const Student_Routes = require('./routes/studentRoutes');
const Course_Routes = require('./routes/courseRoutes');
const Fee_Routes = require('./routes/feeRoutes');
const Hostel_Routes = require('./routes/HostelRoutes')
const User_Routes = require('./routes/userRoutes')
const Auth_Routes = require('./routes/authRoutes')
const LeaveFaculty_Routes = require('./routes/leaveFacultyRoutes')

// Configuring the env file
dotenv.config();

// Initialising the express app
const app = express();

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Connecting the server to the MongoDb database
const dbURI = process.env.MONGO_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    // Starting the server on PORT or 8000
    app.listen(process.env.PORT || 8000, ()=> {
        console.log('Server started' );
    });
})
.catch(err => console.log(err));


// Routes
app.use('/api/student',Student_Routes)
app.use('/api/fee',Fee_Routes)
app.use('/api/courses',Course_Routes)
app.use('/api/hostel',Hostel_Routes)
app.use('/api/user',User_Routes)
app.use('/api/auth',Auth_Routes)
app.use('/api/leaveFaculty',LeaveFaculty_Routes)

app.get('/', (req,res)=> {
    res.send("Server is Running") 
})

