const { post } = require('../../models')

module.exports = async(req, res) => {

  const postId = req.params.postid

  if (!postId) {
    res.status(400).json({message:'Bad request'})
  }

  if (postId) {
    const likedPost = await post.findOne({
      where : {
        id : postId
      }
    }).catch(() => console.log(err))

    if (likedPost) {
        const totalLikes = likedPost.total_likes
        const likeUp = await likedPost.update({ 
          total_likes : totalLikes + 1 
        }).catch(() => console.log(err))
        
      res.status(201).json({ 
        data : { likeCount: likeUp.total_likes }, 
        message: 'ok' 
      })
    }
  }
};