const { user } = require("../../models");
const { checkAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = checkAccessToken(req);

  if (!accessTokenData) {
    return res.status(401).send({ message: "Not authorized" });
  }

  const { email } = accessTokenData;
  const { user_name, password, phone_number, nickname, profile_image } =
    req.body;

  if (!user_name || !password || !phone_number || !nickname) {
    return res
      .status(422)
      .send({ message: "Insufficient parameters supplied" });
  }

  user
    .update(
      {
        user_name,
        password,
        phone_number,
        nickname,
        profile_image,
      },
      {
        where: {
          email,
        },
      }
    )
    .then((num) => {
      if (num === 1) {
        res.status(201).send({
          message: "UserInfo was updated successfully",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Internet server error" });
    });
};
