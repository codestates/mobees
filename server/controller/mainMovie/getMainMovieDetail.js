const { post, comment, user } = require("../../models");

module.exports = async (req, res) => {
  const postId = parseInt(req.params["postid"]);

  if (!postId) {
    return res.status(401).send({ data: null, message: "Not authorized" });
  }

  // 영화 상세 정보
  const movie = await post.findOne({
    where: {
      id: postId,
    },
    attributes: [
      "id",
      "image",
      "total_likes",
      "total_comments",
      "movie_title",
      "movie_review",
    ],
  });

  if (!movie) {
    return res.status(404).send({ message: "Post is not exist" });
  }

  // 포스트 댓글 목록
  let comments = await comment.findAll({
    include: [
      {
        model: user,
      },
    ],
    where: {
      post_id: postId,
    },
    attributes: ["id", "createdAt", "comment", "post_id", "user.nickname"],
    order: [["createdAt", "DESC"]],
  });

  comments = comments.map((elem) => {
    let commentData = elem.dataValues;
    let userNickname = commentData.user.nickname;
    commentData["nickname"] = userNickname;
    delete commentData.user;
    return commentData;
  });

  const movieDetail = movie.dataValues;

  return res.status(200).send({
    data: {
      mainMovieView: movieDetail,
      comment: comments,
    },
    message: "ok",
  });
};
