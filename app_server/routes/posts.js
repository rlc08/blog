var express = require('express');
var router = express.Router();
 
const {getFeedPosts , getUserposts } = require('../controller/posts');
const {verifyToken} = require('../../middleware/auth');

// read home page
router.get('/',verifyToken, getFeedPosts);
router.get('/:userId/posts',verifyToken,getUserposts);

module.exports = router;