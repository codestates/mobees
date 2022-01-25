import React from "react";
import styled from "styled-components";

const SignUp_div = styled.div`
  width: 1024px;
  height: 600px;
  margin: 50px auto;
  position: relative;
  > ul {
    width: 57%;
    height: 600px;
    margin: 0 auto;
    list-style: none;
    padding-left: 0;
    border-radius: 8px;
    box-sizing: border-box;
    /* background-color: aquamarine; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #8b8585;

    > .signUp_logo {
      width: 200px;
      height: 120px;
      background-color: #ddd;
      margin: 30px auto;
      box-sizing: border-box;
      /* border: 1px solid #8b8585; */
    }

    > .signUp_list {
      width: 350px;
      height: 380px;
      background-color: #ddd;
      /* border: 1px solid #8b8585; */
      margin: 0 auto;
    }
  }
`;

const Sign = () => {
  return (
    <SignUp_div>
      <ul>
        <li className="signUp_logo"></li>
        <li className="signUp_list"></li>
      </ul>
    </SignUp_div>
  );
};

export default Sign;
