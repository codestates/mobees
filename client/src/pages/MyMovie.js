import React from "react";
import MovieList from "../component/MovieList";
import Profile from "../component/Profile";

const MyMovie = () => {
  return (
    <>
      <div className="section">
        <Profile></Profile>
        <MovieList></MovieList>
      </div>
    </>
  );
};

export default MyMovie;
