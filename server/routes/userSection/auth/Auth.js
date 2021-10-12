const express = require('express');
const { userSignin, userSignup } = require('../../../controllers/userSection/Auth');
const router = express.Router();

router.post('/signin', userSignin);
router.post('/signup', userSignup);

module.exports = router;