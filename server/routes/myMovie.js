const router = require('express').Router();
const controller = require('./../controller');

router.get('/', controller.getMyMovie)
<<<<<<< HEAD
router.get('/:postid', controller.getMyMovieDetail)
=======
router.get('/view/:postid', controller.getMyMovieDetail)
>>>>>>> feat/github-access-token

module.exports = router;