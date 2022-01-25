const { user } = require("../../models");
const { checkAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = checkAccessToken(req);

  // 토큰이 없거나 이상하면 'not authorized'를 내보낸다.
  // 토큰이 존재하면 해당 유저의 정보를 데이터베이스에서 삭제한다.

  if (!accessTokenData) {
    return res.status(401).send({ data: null, message: "not authorized" });
  }

  const { email } = accessTokenData;

  user
    .destroy({
      where: {
        email,
      },
    })
    .then((result) => {
      return res.status(200).send({ message: "ok" });
    })
    .catch((err) => {
      return res.status(500).send({ message: "Internet server error" });
    });
};


