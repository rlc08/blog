var express = require('express');
var router = express.Router();
const ctrlothers = require('../controller/others')



router.get('/login',ctrlothers.login)
router.get('/register',ctrlothers.register)
module.exports = router;
