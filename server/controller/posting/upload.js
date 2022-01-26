const { post } = require('../../models')
const { user } = require('../../models')
const { genre } = require('../../models')             
const {posts_genres} = require('../../models')

const {checkAccessToken} = require('../tokenFunctions')

module.exports = async (req, res) => {
  const jwt = checkAccessToken(req)

  // verifying token
  if (!jwt) {
    res.status(401).send({data: null, message: 'not authorized'})
  }
  // if token valid,
  else {
    const { email } = jwt;
    const userInfo = await user.findOne({
      where : {email : email}
    }).catch(() => console.log(err))

    const userId = userInfo.dataValues.id
    const { image, movie_title, movie_theater, movie_date, movie_time, movie_seat, movie_genre } = req.body

      // check the requested data
    if (!image || !movie_title || !movie_theater || !movie_date || !movie_time || !movie_seat || !movie_genre) {
      res.status(422).send({data: null, message: 'Insufficient parameters supplied'})
    }
      // if got token & all the data
    else {
      const newPost = await post.create({
        user_id : userId,
        image,
        movie_title,
        movie_theater,
        movie_date,
        movie_time,
        movie_seat
      }).catch(() => console.log(err))

      // find the genre record
      const genreRecord = await genre.findOne({
        where : ({
          genre : movie_genre
        })
      }).catch(() => console.log(err))
      
      // update through table
      await posts_genres.create({
        post_id : newPost.id,
        genre_id : genreRecord.id
      }).catch(() => console.log(err))

      // await post.addPosts_Genres([genreRecord.id])

      res.status(201).json({ 
        data : { uploading : newPost}, 
        message : 'ok'
      })
    }
  }
};