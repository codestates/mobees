import React from "react";
import styled from "styled-components";

const Mypage_div = styled.div`
  width: 1024px;
  height: 600px;
  margin: 45px auto;
  position: relative;
  box-sizing: border-box;

  > ul {
    width: 50%;
    height: 500px;
    list-style: none;
    padding-left: 0;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    border: 1px solid #8b8585;

    /* > .mypage_image {
      width: 100px;
      height: 100px;
      background-color: #128761;
      margin: 45px auto 30px auto;
    } */
    > .mypage_list {
      width: 250px;
      height: 300px;
      background-color: #ddd;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Mypage = () => {
  return (
    <Mypage_div>
      <ul>
        <li className="mypage_image"></li>
        <li className="mypage_list"></li>
      </ul>
    </Mypage_div>
  );
};

export default Mypage;
