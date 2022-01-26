import React from "react";
import styled from "styled-components";

const PostingBtn = styled.div`
  width: 120px;
  height: 40px;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 100px;
  color: rgb(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #ffd900;
    color: #000;
  }
`;

const PostBtn = ({ imgUrl, title, theater, seat, comment, info }) => {
  return (
    <PostingBtn
      className="post"
      onClick={() => {
        let obj = {};
        obj.image = imgUrl;
        obj.movie_title = title;
        obj.movie_theater = theater;
        obj.movie_seat = seat;
        obj.comment_writing = comment;
        let arr = info.split("T");
        obj.movie_date = arr[0];
        obj.movie_time = arr[1] + ":00";
      }}
    >
      POST
    </PostingBtn>
  );
};

export default PostBtn;
