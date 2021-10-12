const mongoose = require('mongoose');

const userSignupSchema = new mongoose.Schema({
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    email: { type: String, required: false},
    password: { type: String, required: false}
})

mongoose.model('User', userSignupSchema);