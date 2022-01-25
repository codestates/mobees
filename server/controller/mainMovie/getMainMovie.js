const { post } = require("../../models");

module.exports = (req, res) => {
  // 페이지 넘버가 없으면 0으로 지정해주고 최상위 8개의 게시물이 나오도록 한다.
  // 페이지 넘버는 +1 씩 더해지면 그 다음 8개의 게시물이 나타난다.

  const page = req.query.page || 0;
  const pageAsNumber = Number.parseInt(page);
  const size = 8;

  post
    .findAndCountAll({
      limit: size,
      offset: pageAsNumber * size,
      order: [["createdAt", "DESC"]],
    })
    .then((result) => {
      const postCount = result.count;
      if (postCount < pageAsNumber * size) {
        return res.status(204).send("Posts no longer exist.");
      }
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Internal server error" });
    });
};
