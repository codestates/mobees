import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import github_icon from "../icon/github_icon.png";

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
    height: 540px;
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
        border: 1px solid rgb(0,0,0,0.3);
      }
      > .password {
        width: 252px;
        height: 35px;
        margin: 5px auto 15px auto;
        border: 1px solid rgb(0,0,0,0.3);
      }

      > .sign_div {
        width: 257px;
        height: 40px;
        border-radius: 3px;
        margin: 5px auto 30px auto;
        cursor: pointer;
        line-height: 40px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        background-color: rgb(0,0,0,0.1);
        color:  rgb(0,0,0,0.5);
        &:hover{
          background-color: #ffd900;
          color:#2b2828;
        }
      }
      .line{
        width: 257px;
        height: 1px;
        background-color:  rgb(0,0,0,0.2);
      }
      > .join {
        width: 257px;
        height: 40px;
        border-radius: 3px;
        margin: 35px auto 15px auto;
        background-color: #2b2828;
        cursor: pointer;
        line-height: 40px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
      }

      > .socialjoin {
        position: absolute;
        box-sizing: border-box;
        width: 257px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #2b2828;
        cursor: pointer;
        line-height: 40px;
        border-radius: 20px;
        .git_icon {
          position: absolute;
          top: 8px;
          left :60px;
          width: 20px;
          display: inline-block;
        }
        p {
          float: right;
          width:230px;
          line-height: 40px;
        }
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
          <div className="sign_div">LOGIN</div>
          <div className="line"></div>
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
               <img className="git_icon" src={github_icon} />
              GitHub 로그인
            </p>
          </div>
        </div>
      </div>
    </Login_div>
  );
};

export default Login;
