import React from "react";
import MovieList from "../component/MovieList";
import Profile from "../component/Profile";

const MyMovie = ({ LoginData }) => {
  return (
    <>
      <div className="section">
        <Profile LoginData={LoginData}></Profile>
        <MovieList></MovieList>
      </div>
    </>
  );
};

export default MyMovie;
