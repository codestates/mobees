
const { post } = require('../../models')
const { posts_genres } = require('../../models')

module.exports = async (req, res) => {
  
  const postId = req.params.postid

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
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message : 'Internal server error' })
  }
  
  res.status(200).json({ message : 'Deleted successfully'})
};