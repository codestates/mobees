const { checkAccessToken } = require('../tokenFunctions')
const { user } = require('../../models')
const { post } = require('../../models');

module.exports = async (req, res) => {
  
  const page = req.query.page || 0;
  const pageAsNumber = Number.parseInt(page);
  const size = 8;
  const start = pageAsNumber * size;

  const jwt = checkAccessToken(req)
  const { email } = jwt

  if (!jwt) {
    res.status(401).json( { data : null, message : 'Not authorized' })
  }
  
  if (email) {
    const userData = await user.findOne({
      where : {
        email
      }
    }).catch(err => console.log(err))

    const usersPosts = await user.findAll({
      where : {
        id : userData.id
      },
      include : [{ 
        model : post,
        attributes: ["id", "image", "total_likes"]
      }]
    }).catch(err => console.log(err))

    const postCount = userData.count;
    if (postCount < start) {
      res.status(204).send({ message : "Posts no Longer exist" })
    }

    let myMovie = usersPosts[0].posts

    myMovie = myMovie.slice(start, start + size)

    res.status(200).json({ 
      data : { myMovie },
      message : 'ok' 
    })
  }
};