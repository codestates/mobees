const { post, genre } = require("../../models");

module.exports = (req, res) => {
  // post, genre 를 join 한다. (연결 테이블은 join 하지 않는다.)
  // const movieGenre = req.query.genre;
  const movieGenre = req.params.genre;
  const page = req.query.page || 0;
  const pageAsNumber = Number.parseInt(page);
  const size = 8;

  genre
    .findAndCountAll({
      limit: size,
      offset: pageAsNumber * size,
      include: [
        {
          model: post,
          attributes: ["id", "image", "total_likes", "createdAt"],
        },
      ],
      where: {
        genre: movieGenre,
      },
      order: [["createdAt", "DESC"]],
    })
    .then((result) => {
      const postCount = result.count;
      if (postCount < pageAsNumber * size) {
        return res.status(204).send({ message: "Posts no longer exist" });
      }
      res.send({ data: result, message: "ok" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Internal server error" });
    });
};
