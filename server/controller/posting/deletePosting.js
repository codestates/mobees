
const { post } = require('../../models')
const { posts_genres } = require('../../models')
// const { checkAccessToken } = require('../tokenFunctions')

module.exports = async (req, res) => {
  
  const postId = req.params.postid
  // const userId = checkAccessToken(req).userId

  if (!postId) {
    res.status(400).json({message:'Bad request'})
  }
  
  const isFk = await posts_genres.findOne({
    where : {
      post_id : postId
    }
  }).catch(err => console.log(err))
  
  if (isFk) {
    await posts_genres.destroy({
      where : {
        post_id : postId
      }
    }).catch(err => console.log(err))
  }

  try {
    await post.destroy({ where : { id : postId } })
    await res.redirect(302, '/my-movies')
    // res.status(200).json({ message : 'Deleted successfully'})
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message : 'Internal server error' })
  }
};