import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Login_div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;

  > .loginmodal {
    width: 480px;
    height: 500px;
    background-color: white;
    position: relative;
    top: 15%;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 8px;
    /* background: #fff; */
    border: 1px solid #8b8585;
    > .close {
      width: 28px;
      height: 28px;
      color: #8b8585;
      float: right;
      font-size: 30px;
      cursor: pointer;
    }
    > .login_div {
      width: 260px;
      height: 375px;
      box-sizing: border-box;
      margin: 65px auto 0 auto;

      > .loginId {
        width: 252px;
        height: 35px;
        margin: 10px auto;
        outline: none;
      }
      > .password {
        width: 252px;
        height: 35px;
        margin: 20px auto 15px auto;
      }

      > .sign_div {
        width: 200px;
        margin: 20px auto;
        border-top: 1px solid #ddd;
        background-color: antiquewhite;
      }
      > .join {
        width: 257px;
        height: 40px;
        border-radius: 3px;
        margin: 35px auto 30px auto;
        background-color: #2b2828;
        cursor: pointer;
        line-height: 40px;
      }

      > .socialjoin {
        width: 257px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #2b2828;
        cursor: pointer;
        line-height: 40px;
      }
    }
  }
`;

const Login = ({ closeModal, setIsLogin, LoginData }) => {
  const history = useHistory();
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <Login_div>
      <div className="loginmodal">
        <div className="close" onClick={(e) => closeModal(e)}>
          &times;
        </div>
        <div className="login_div">
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#2b2828",
            }}
          >
            LOGIN
          </p>
          <input
            name="email"
            className="loginId"
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={(e) => {
              setIdValue(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (
                  idValue === LoginData.email &&
                  passwordValue === LoginData.password
                ) {
                  setIsLogin(true);
                  history.push("/");
                  closeModal(e);
                }
              }
            }}
            // style="border: 1px solid #ddd;"
            // onChange={this.loginHandler}
          />
          <input
            name="password"
            className="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            maxLength="12"
            // onChange={this.loginHandler}
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (
                  idValue === LoginData.email &&
                  passwordValue === LoginData.password
                ) {
                  setIsLogin(true);
                  history.push("/");
                  closeModal(e);
                }
              }
            }}
          />
          <div className="sign_div"></div>
          <div
            className="join"
            onClick={() => {
              history.push("signup");
              closeModal();
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#FCFCFC",
                textAlign: "center",
              }}
            >
              JOIN
            </p>
          </div>
          <div className="socialjoin">
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#2b2828",
                textAlign: "center",
                marginTop: "0px",
              }}
            >
              GitHub 로그인
            </p>
          </div>
        </div>
      </div>
    </Login_div>
  );
};

export default Login;
