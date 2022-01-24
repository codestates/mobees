import React from "react";
import MovieDetail from "../component/MovieDetail";
import Comments from "../component/Comments";

const MyMovieDetail = () => {
  return (
    <div className="section">
      <MovieDetail></MovieDetail>
      <Comments></Comments>
    </div>
  );
};

export default MyMovieDetail;
