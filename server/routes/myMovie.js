const router = require('express').Router();
const controller = require('./../controller');

router.get('/', controller.getMyMovie)
router.get('/:genre', controller.getMyMovieDetail)

module.exports = router;