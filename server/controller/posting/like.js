// const {accessTokenCheck} = require('../tokenFunctions')
const { post } = require('../../models')

module.exports = async(req, res) => {
  
  console.log(req)
  // const jwt = accessTokenCheck(req)
  // if (!jwt) {
  //   res.status(400).json({message:'Bad request'})
  // }
  
  // const postId = req.params.post-id
  const postId = req.params.postid

  console.log(Number(postId))

  if (!postId) {
    res.status(400).json({message:'Bad request'})
  }
  console.log(" - - - - -- - - - -  -- - - -- - - - - -- - - - - -- -  ")

  if (postId) {
    const postIdNum = Number(postId)
    const likedPost = await post.findOne({
      where : {
        id : postIdNum
      }
    })

    console.log(likedPost)

    if (likedPost) {
      try {
        const totalLikes = likedPost.total_likes
  
        console.log(totalLikes)
  
        likedPost.update({
          total_likes : totalLikes + 1
        })
  
        res.status(201).json({
          data : {
            likeCount: totalLikes
          }, 
          message: 'ok'
        })
      }
      catch (err) {
        res.status(500).send({message: "Internal server error"})
      }
    }
  }
};