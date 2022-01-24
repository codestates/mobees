import React from "react";
import Gerne from "../component/Gerne";
import MovieList from "../component/MovieList";
import MoreBtn from "../component/MoreBtn";
const Main = () => {
  return (
    <>
      <div className="section">
        <Gerne></Gerne>
        <MovieList></MovieList>
        <MoreBtn></MoreBtn>
      </div>
    </>
  );
};

export default Main;
