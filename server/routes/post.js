const router = require('express').Router();
const controller = require('./../controller');

router.post('/', controller.posting)                                 
router.post('/comment/:postid', controller.comment)        // post/comment
router.get('/like/:postid', controller.like)              // post/like
router.delete('/:postid', controller.deletePosting)         // post/like

module.exports = router;