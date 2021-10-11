const express = require('express');
const router = express.Router();
const { AddAdminDetails } = require('../../controllers/adminSection/AdminProfile');


router.get('/addAdminDetails', AddAdminDetails);

module.exports = router;