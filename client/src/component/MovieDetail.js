import React from "react";
import styled from "styled-components";

const MovieDetail_ul = styled.ul`
  max-width: 700px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  box-sizing: border-box;
  grid-gap: 20px;
  list-style: none;
  > li {
    width: auto;
    box-shadow: 2px 3px 4px #ddd;
    min-height: 500px;
    border: 1px solid #fff;
    border-radius: 10px;
  }
`;

const Movie_list_post_image = styled.div`
  width: auto;
  min-height: 480px;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  /* transform: scale(0, -1); */
`;

const MovieDetail = () => {
  return (
    <MovieDetail_ul>
      <li>
        <Movie_list_post_image></Movie_list_post_image>
      </li>
      <li>
        <Movie_list_post_image></Movie_list_post_image>
      </li>
    </MovieDetail_ul>
  );
};

export default MovieDetail;
