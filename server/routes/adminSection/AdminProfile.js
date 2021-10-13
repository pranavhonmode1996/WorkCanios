const express = require('express');
const router = express.Router();
const { AddAdminDetails, getAdminProfileDetails } = require('../../controllers/adminSection/AdminProfile');


router.post('/addAdminDetails', AddAdminDetails);
router.get('/getAdminDetails', getAdminProfileDetails);

module.exports = router;