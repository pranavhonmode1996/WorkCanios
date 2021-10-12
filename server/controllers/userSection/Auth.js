const becrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Users = mongoose.model('User')

const JWT_SEQRET = process.env.JSON_WEB_TOKEN_SEQRET;

const userSignup = async(req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;

    try {
        const checkUser = await Users.findOne({email});

        if(checkUser) return res.json({message: 'User already exists.'});

        if(password !== confirmPassword) return res.json({message: 'password and confirm password dont match'});
        let hashedPassword = await becrypt.hash(password, 12);

        const user = new Users({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        })

        const result = await user.save();
        const token = jwt.sign({email: result.email, id: result._id}, JWT_SEQRET, {expiresIn: '1h'});

        if(result) {
            res.status(200).json({result, token});
        } 
    } catch(error) {
        res.status(500).json({message: 'Something went wrong'});
    }
}

const userSignin = async(req, res) => {
    const {email, password} = req.body;
    try {
        const checkUser = await Users.findOne({email: email});

        if(!checkUser) return res.status(404).json({message: 'Invalid user.'});

        const checkPassword = await becrypt.compare(password, checkUser.password);
        if(!checkPassword) return res.status(400).json({message: 'Invalid credentials'});

        const token = jwt.sign({email: checkUser.email, id: checkUser._id}, JWT_SEQRET, {
            expiresIn: '1h'
        })
        res.status(200).json({result: checkUser, token});
    } catch(error) {
        res.send(500).json({message: 'Something went wrong.'});
    }
}

module.exports = {
    userSignup,
    userSignin
}