import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import MoreBtn from "./MoreBtn";

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
  min-height: 300px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  /* transform: scale(0, -1); */
`;

const MovieList = () => {
  const movie_list = [1, 2, 3, 4, 5, 6, 7, 8];
  const [list, Setlist] = useState(movie_list);
  const history = useHistory();
  return (
    <>
      <Movie_list_ul>
        {list.map(() => (
          <li
            onClick={() => {
              history.push("/detail");
            }}
          >
            <Movie_list_image></Movie_list_image>
          </li>
        ))}
      </Movie_list_ul>
      <MoreBtn></MoreBtn>
    </>
  );
};

export default MovieList;
