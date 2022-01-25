import React from "react";
import Gerne from "../component/Gerne";
import MovieList from "../component/MovieList";

const Main = () => {
  return (
    <>
      <div className="section">
        <Gerne></Gerne>
        <MovieList></MovieList>
      </div>
    </>
  );
};

export default Main;
