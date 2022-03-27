import React from "react";
import MovieDetail from "../component/MovieDetail";
import Comments from "../component/Comments";

const MainMovieDetail = () => {
  return (
    <div className="section">
      <MovieDetail></MovieDetail>
      <Comments></Comments>
    </div>
  );
};

export default MainMovieDetail;
