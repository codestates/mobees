import React from "react";
import styled from "styled-components";

const Comment = styled.div`
  max-width: 650px;
  height: 350px;
  /* background-color: #ddd; */
  margin: 50px auto;

  > .like_comment {
    width: 150px;
    height: 50px;
    background-color: #ddd;
  }

  > .comments {
    width: auto;
    height: 100px;
    margin: 25px auto;
    background-color: #ddd;
  }

  > .comment_make {
    width: auto;
    height: 100px;
    margin: 25px auto;
    background-color: #ddd;
  }
`;

const Comments = () => {
  return (
    <Comment>
      <div className="like_comment"></div>
      <div className="comments"></div>
      <hr></hr>
      <div className="comment_make"></div>
    </Comment>
  );
};

export default Comments;
