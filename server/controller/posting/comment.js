const { comment, post } = require("../../models");
const { checkAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // Todo 댓글 작성
  // 쿠키로 jwt 토큰을 받아 유저인지 확인한다.
  // jwt 토큰에서 유저의 닉네임을 가져온다.
  // comments 테이블에 req.body로 받은 값인 comment, user_id, post_id, createdAt, updatedAt 을 추가해준다.
  // posts 테이블의 total_comments를 +1 해준다.
  // 응답은
  // {
  //     data: {
  //         "id": ,
  //         "nickname": ,
  //         "created_at": ,
  //         "comment": ,
  //         "postId": ,
  //     },
  //     message: "ok"
  // }
  // 이런 형식으로 보내준다.

  const postId = Number.parseInt(req.params["postid"]);
  const accessToken = checkAccessToken(req);
  const userComment = req.body.comment;

  if (!userComment) {
    return res
      .status(422)
      .send({ message: "Insufficient parameters supplied" });
  }

  if (!accessToken) {
    return res.status(401).send({ data: null, message: "not authorized" });
  }

  const { id, nickname } = accessToken;

  post
    .findOne({
      where: {
        id: postId,
      },
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send("Post isn't exist");
      }

      result.update({
        total_comments: result.total_comments + 1,
      });
    });

  const newComment = await comment.create({
    comment: userComment,
    user_id: id,
    post_id: postId,
  });

  // console.log(newComment);
  delete newComment.dataValues.user_id;
  newComment.dataValues["nickname"] = nickname;

  return res.status(201).send({
    data: newComment.dataValues,
    message: "ok",
  });
};
