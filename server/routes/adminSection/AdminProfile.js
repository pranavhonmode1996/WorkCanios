const express = require('express');
const router = express.Router();
const { AddAdminDetails } = require('../../controllers/adminSection/AdminProfile');


router.post('/addAdminDetails', AddAdminDetails);

module.exports = router;