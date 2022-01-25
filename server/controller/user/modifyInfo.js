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

  if (!user_name || !password || !nickname) {
    return res
      .status(422)
      .send({ message: "Insufficient parameters supplied" });
  }

  // res.send(user_name);

  user
    .update(
      {
        user_name: req.body.user_name,
        password: req.body.password,
        phone_number: req.body.phone_number,
        nickname: req.body.nickname,
        profile_image: req.body.profile_image,
      },
      {
        where: {
          email: email,
        },
      }
    )
    .then((num) => {
      res.status(201).send({
        message: "UserInfo was updated successfully",
      });

      if (num !== 1) {
        res.status(404).send({
          message: "UserInfo was not updated",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Internet server error" });
    });
};
