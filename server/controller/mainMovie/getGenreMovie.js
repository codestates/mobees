const { post, genre } = require("../../models");

module.exports = async (req, res) => {
  // post, genre 를 join 한다. (연결 테이블은 join 하지 않는다.)
  // const movieGenre = req.query.genre;
  const movieGenre = req.params.genre;
  const page = req.query.page || 0;
  const pageAsNumber = Number.parseInt(page);
  const size = 8;
  const start = page * size;

  const post_genre = await genre.findAndCountAll({
    // limit: size,
    // offset: pageAsNumber * size,
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
  });

  const postCount = post_genre.count;
  if (postCount < start) {
    return res.status(204).send({ message: "Posts no longer exist" });
  }

  let posts = post_genre.rows[0].dataValues.posts;
  posts = posts.map((el) => {
    delete el.dataValues.posts_genres;
    return el;
  });

  posts = posts.slice(start, start + size);

  res.send({ data: { mainMovie: posts }, message: "ok" });
};
