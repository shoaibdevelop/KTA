const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require ('path');

const app = express();

const db =  require('./config/db').database;

// Database connection
mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('database connected successfully');
        })
        .catch((err) => {
            console.log('Unable to connect',err);

        });

// Defining the port
const port = process.env.PORT || 5001;

// Initialise CORs middleware
app.use(cors());

// Initialise body Parser middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))

//app.use('/static', express.static(path.join(__dirname,'public/assets')));

// Initialise public directory
app.get('/', (req,res) => {
    console.log(req)
    res.sendFile(path.join(__dirname,'public/assets/'))
});


/*
app.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>');
}); */

const recepieRoutes = require('./routes/apis/recepie.route');
app.use('/api/recepies',recepieRoutes);

app.listen(port, () => {
    console.log("server started on port", port);
});