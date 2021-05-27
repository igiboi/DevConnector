//* fetching profiles, updating profiles 
// it will handle registring user adding user
const express = require('express');
const router = express.Router();

//* @route    GET api/profile
//* @desc     Test route
//* @access   Public 
router.get('/', (req, res) => res.send('Profile route')); 

module.exports = router; 