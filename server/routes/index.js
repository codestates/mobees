const express = require ('express')
const router = express.Router();

const postRouter = require ('./post')
const userRouter = require ('./user')
const mainMovieRouter = require ('./mainMovie')
const myMovieRouter = require ('./myMovie')
const controller = require('./../controller');

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.post('/signup', controller.signup)

router.use('/users', userRouter);               // 복수
router.use('/posts', postRouter);               // 복수
router.use('/mainmovies', mainMovieRouter);    // 복수
router.use('/mymovies', myMovieRouter);        // 복수

module.exports = router;