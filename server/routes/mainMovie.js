const router = require('express').Router();
const controller = require('./../controller');   
// 1. controller 폴더 안에 index.js 파일 만들어서
// 2. controller 안에 전부 js 파일로, 파일 안에 객체 속성으로 구분


router.get('/', controller.getMainMovie)
router.get('/:genre', controller.getGenreMovie)
router.get('/view/:post-id', controller.getMainMovieDetail)

module.exports = router;


