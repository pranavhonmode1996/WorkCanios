const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.APP_PORT || 4000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

require('../server/models/AdminProfile');
require('../server/models/UserSignup');
const adminProfile = require('./routes/adminSection/AdminProfile');
const auth = require('./routes/userSection/auth/Auth');

const MONGO_URI = process.env.MONGO_URL;

const corsOptions = {
    exposedHeaders: 'x-access-token',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cookieParser());

app.use('/adminProfile', adminProfile);
app.use('/user', auth);

// mongoDB atlas connection
mongoose.connect(`${MONGO_URI}`, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('successfully connected to mongodb database');
})

mongoose.connection.on('error', () => {
    console.log('Error while connecting to the mongodb database');
})

// catch 404 and forword to error handler
app.use(function(req, res, next) {
    res.status(400).send();
})

// creating server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})