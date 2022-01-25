import React from "react";
import MovieDetail from "../component/MovieDetail";
import Comments from "../component/Comments";
import Profile from "../component/Profile";

const MyMovieDetail = () => {
  return (
    <div className="section">
      <Profile></Profile>
      <MovieDetail></MovieDetail>
      <Comments></Comments>
    </div>
  );
};

export default MyMovieDetail;
