const { checkAccessToken } = require('../tokenFunctions')
const { user } = require('../../models')
const { post } = require('../../models')

module.exports = async (req, res) => {
  
  const jwt = checkAccessToken(req).email

  if (!jwt) {
    res.status(401).json( { data : null, message : 'Not authorized' })
  }
  
  const { email } = jwt
  if (email) {

    const reqUser = await user.findOne({
      include : [{model : post}],
      where : { email },
    })

    console.log("       -      who     -     0   o   ", reqUser)
  }


  res.status(200).json({ message : 'ok' })
};