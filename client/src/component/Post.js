import React, { useState } from "react";
import styled from "styled-components";
import PostBtn from "./PostBtn";
import borCode from "../icon/barcode_icon.png";
import addPost from "../icon/add_image.png";

const Posting_ul = styled.ul`
  max-width: 700px;
  margin: 30px auto 50px auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  /* background-color: chartreuse; */
  box-sizing: border-box;
  grid-gap: 20px;
  list-style: none;
  > li {
    width: auto;
    box-shadow: 2px 3px 4px #ddd;
    /* background-color: cadetblue; */
    min-height: 500px;
    border: 1px solid #fff;
    border-radius: 10px;
  }
`;

const Post_image = styled.div`
  width: 308px;
  min-height: 480px;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  /* border: 1px solid #ddd; */
  position: relative;
  background-color: rgb(0, 0, 0, 0.05);
  /* transform: scale(0, -1); */
  .posting_image {
    width: 100px;
    height: 100px;
    /* background-color: crimson; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    > div {
      width: 40px;
      height: 40px;
      /* background-color: darkblue; */
      margin: 0 auto;
      > img {
        width: 40px;
        height: 40px;
        /* margin-top: -5px; */
      }
    }
    .posting_img {
      width: 230px;
      height: 35px;
      /* margin: 15px auto; */
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid rgb(0, 0, 0, 0.3);
      outline: 0;
    }
  }
`;

const Post_infor = styled.div`
  width: 308px;
  min-height: 480px;
  border-radius: 10px;
  margin: 10px;
  /* background-color: coral; */
  box-sizing: border-box;
  border: 1px solid #ddd;
  position: relative;
  > .post_infor_div {
    /* background-color: cornsilk; */
    width: 234px;
    min-height: 420px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    input {
      width: 230px;
      height: 35px;
      /* margin: 15px auto; */
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid rgb(0, 0, 0, 0.3);
      outline: 0;
      /* display: inline-block; */
    }
    input::placeholder {
      color: rgb(0, 0, 0, 0.4);
    }
    > .movie_title {
      margin: 0 auto 10px auto;
    }
    > .movie_theater {
      margin: 10px auto;
    }
    > .movie_date {
      width: 100%;
      height: 35px;
      margin: 10px auto;
    }
    input[type="datetime-local"]:valid {
      color: rgb(0, 0, 0, 0.4);
    }
    > .movie_seat {
      width: 230px;
      height: 35px;
      margin: 10px auto;
    }
    .barcode_image {
      width: 200px;
      height: 50px;
      /* background-color: crimson; */
      margin: 29px auto 0 auto;
      > img {
        width: 200px;
        height: 50px;
      }
    }
  }
  /* transform: scale(0, -1); */
`;

const MovieReview = styled.div`
  box-sizing: border-box;
  width: 233px;
  height: 100px;
  margin: 20px auto;
  /* margin-top: 25px; */
  /* margin-left: 40px; */
  /* padding: 15px; */
  /* display: inline-block; */
  /* float: left; */
  border: 1px solid rgb(0, 0, 0, 0.1);
  /* margin: 15px auto; */
  /* background-color: burlywood; */
  textarea {
    box-sizing: border-box;
    /* margin-top: 10px; */
    width: 100%;
    /* border-radius: 10px; */
    height: 100%;
    border: 1px solid rgb(0, 0, 0, 0);
    outline: 0;
  }
  textarea::placeholder {
    color: rgb(0, 0, 0, 0.4);
  }
`;

const Posting = () => {
  let [imgUrl, setImgUrl] = useState("");
  let [title, setTitle] = useState("");
  let [theater, setTheater] = useState("");
  let [dateTime, setDateTime] = useState("");
  let [seat, setSeat] = useState("");
  let [comment, setComment] = useState("");

  return (
    <>
      <Posting_ul>
        <li>
          <Post_image>
            <div className="posting_image">
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: "rgb(0, 0, 0, 0.4)",
                  // marginTop: "2px",
                }}
              >
                Post Image
              </p>
              <div>
                <img src={addPost}></img>
              </div>
            </div>

            <input
              name="posting_img"
              className="posting_img"
              type="text"
              placeholder="이미지URL을 입력해주세요"
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              value={imgUrl}
            />
          </Post_image>
        </li>
        <li>
          <Post_infor>
            <div className="post_infor_div">
              <input
                name="movie_title"
                className="movie_title"
                type="text"
                placeholder="영화 제목을 입력해주세요."
                maxLength="30"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
              <input
                name="movie_theater"
                className="movie_theater"
                type="text"
                placeholder="영화관을 입력해주세요."
                maxLength="30"
                onChange={(e) => {
                  setTheater(e.target.value);
                }}
                value={theater}
              />
              <input
                name="movie_date"
                className="movie_date"
                type="datetime-local"
                onChange={(e) => {
                  setDateTime(e.target.value);
                }} //2021-12-22T00:43
                value={dateTime}
              />
              {/* <input
              name="movie_time"
              className="movie_time"
              type="time"
              // onChange={this.loginHandler}
            /> */}
              <input
                name="movie_seat"
                className="movie_seat"
                type="text"
                maxLength="5"
                placeholder="좌석을 입력해주세요.                    ex. D11"
                onChange={(e) => {
                  setSeat(e.target.value);
                }}
                value={seat}
              />
              <MovieReview>
                {/* <p className="username">Mobees_username</p> */}
                <textarea
                  id="comment_writing"
                  maxLength={100}
                  placeholder="한줄평을 작성해주세요"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  value={comment}
                ></textarea>
              </MovieReview>
              <div className="barcode_image">
                <img src={borCode}></img>
              </div>
            </div>
          </Post_infor>
        </li>
      </Posting_ul>
      <PostBtn
        imgUrl={imgUrl}
        title={title}
        theater={theater}
        seat={seat}
        comment={comment}
        info={dateTime}
      ></PostBtn>
    </>
  );
};

export default Posting;
