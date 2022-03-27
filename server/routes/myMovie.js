const router = require('express').Router();
const controller = require('./../controller');

router.get('/', controller.getMyMovie)
router.get('/:postid', controller.getMyMovieDetail)
router.get('/view/:postid', controller.getMyMovieDetail)

module.exports = router;