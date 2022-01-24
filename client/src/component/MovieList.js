import React from "react";
import styled from "styled-components";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const Movie_list = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;

  box-sizing: border-box;
  grid-gap: 15px;
  /* margin-bottom: 20px; */
  /* background-color: aqua; */
`;

const Li = styled.div`
  min-height: 350px;
  border: 1px solid #8b8585;
  border-radius: 10px;
`;

const MovieList = () => {
  return (
    <>
      <Movie_list>
        <Link to="/detail">
          <Li></Li>
        </Link>
        <Li></Li>
        <Li></Li>
        <Li></Li>
      </Movie_list>
      <Movie_list>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
      </Movie_list>
    </>
  );
};

export default MovieList;
