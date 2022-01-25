import React from "react";
import styled from "styled-components";
import PostBtn from "./PostBtn";

const Posting_ul = styled.ul`
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

const Post_image = styled.div`
  width: auto;
  min-height: 480px;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  /* transform: scale(0, -1); */
`;

const Posting = () => {
  return (
    <>
      <Posting_ul>
        <li>
          <Post_image></Post_image>
        </li>
        <li>
          <Post_image></Post_image>
        </li>
      </Posting_ul>
      <PostBtn></PostBtn>
    </>
  );
};

export default Posting;
