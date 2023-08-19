var express = require('express');
var router = express.Router();
const ctrlothers = require('../controller/others')
const ctrlposts = require('../controller/articles')

router.get('/',ctrlposts.home)
router.get('/login',ctrlothers.login)
router.get('/register',ctrlothers.register)
router.get('/about',ctrlothers.about)
router.get('/contact',ctrlothers.contact)

module.exports = router;
