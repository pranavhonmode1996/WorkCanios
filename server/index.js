const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.APP_PORT || 4000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    exposedHeaders: 'x-access-token',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// catch 404 and forword to error handler
app.use(function(req, res, next) {
    res.status(400).send();
})

// creating server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})