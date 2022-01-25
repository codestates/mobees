import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import MoreBtn from "./MoreBtn";
import like from "../icon/likeAfter_icon2.png";

const Movie_list_ul = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 5px;
  box-sizing: border-box;
  grid-gap: 20px;

  /* background-color: aqua; */
  list-style: none;

  > li {
    width: auto;
    box-shadow: 2px 3px 4px #ddd;
    min-height: 350px;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Movie_list_image = styled.div`
  width: auto;
  min-height: 310px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  /* transform: scale(0, -1); */
`;
const Movie_like = styled.div`
  width: 19%;
  min-height: 24px;
  float: right;
  cursor: pointer;
  margin: 10px;
  margin-top: 0;
  box-sizing: border-box;
  /* transform: scale(0, -1); */
  > ul {
    width: 100%;
    height: 100%;
    margin-top: 4px;
    list-style: none;
    padding-left: 0;

    > .like_image {
      width: 15px;
      height: 15px;
    }
    > .like_count {
      width: 50%;
      height: 15px;
      float: right;
      line-height: 15px;
      margin-right: 2px;
      text-align: right;
      font-size: 15px;
      font-weight: 500;
      /* background-color: #fdf; */
    }
  }
`;

const MovieList = () => {
  const movie_list = [23, 45, 34, 27, 55, 63, 12, 32];
  const [list, Setlist] = useState(movie_list);
  const history = useHistory();
  return (
    <>
      <Movie_list_ul>
        {list.map((el) => (
          <li
            onClick={() => {
              history.push("/detail");
            }}
          >
            <Movie_list_image></Movie_list_image>
            <Movie_like>
              <ul>
                <img className="like_image" src={like}></img>
                <li className="like_count">{el}</li>
              </ul>
            </Movie_like>
          </li>
        ))}
      </Movie_list_ul>
      <MoreBtn></MoreBtn>
    </>
  );
};

export default MovieList;
