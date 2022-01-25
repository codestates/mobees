// import React from "react";
// import { Link, Route, Switch, useHistory } from "react-router-dom";

// const Header = () => {
//   const history = useHistory();
//   return (
//     <>
//       <div className="header">
//         <div className="header_div">
//           <div
//             className="header_left"
//             onClick={() => {
//               history.push("/");
//             }}
//           ></div>
//           <div className="header_right">
//             <div
//               className="serch"
//               onClick={() => {
//                 history.push("/posting");
//               }}
//             ></div>
//             <div
//               className="login"
//               onClick={() => {
//                 history.push("/mymovie");
//               }}
//             ></div>
import React, { useState } from "react";
import logo from "../icon/logo_v1.png";
import login from "../icon/login_icon.png";
import profile from "../icon/user_icon.png";
import posting from "../icon/posting_icon.png";
import search from "../icon/search_icon.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../component/Login";

const Header = (props) => {
  let [dropMenu, setdropMenu] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let Dropdown = styled.div`
    width: 100px;
    height: 100px;
    background-color: aqua;
    position: absolute;
    z-index: 9999;
    ${dropMenu ? `` : `display: none`};
  `;

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <div className="header_div">
          <div className="header_left">
            <Link to="/">
              <img src={logo} className="app_logo" />
            </Link>
          </div>
          <div className="header_right">
            <div className="search">
              <img src={search} className="search_icon" />
            </div>
            {props.isLogin ? (
              <div className="posting">
                <Link to="/posting">
                  <div
                    onClick={() => {
                      setdropMenu(false);
                    }}
                  >
                    <img src={posting} className="posting_icon" />
                  </div>
                </Link>
              </div>
            ) : null}
            {props.isLogin ? (
              <div className="profile_img">
                <img
                  onClick={() => {
                    setdropMenu(!dropMenu);
                  }}
                  src={profile}
                  className="profile_btn"
                />
                <Dropdown>
                  <div className="dropmenu_box">
                    <div className="dropmenu_content">
                      <Link to="/mymovie">
                        <div
                          onClick={() => {
                            setdropMenu(!dropMenu);
                          }}
                        >
                          my movie
                        </div>
                      </Link>
                      <Link to="/mypage">
                        <div
                          onClick={() => {
                            setdropMenu(!dropMenu);
                          }}
                        >
                          my page
                        </div>
                      </Link>
                      <Link to="/">
                        <div
                          onClick={() => {
                            setdropMenu(!dropMenu);
                            props.setIsLogin(false);
                          }}
                        >
                          log out
                        </div>
                      </Link>
                    </div>
                  </div>
                </Dropdown>
              </div>
            ) : (
              <div
                className="login"
                onClick={(e) => {
                  openModal(e);
                }}
              >
                <img src={login} className="login_btn" />
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen === true ? (
        <Login
          closeModal={closeModal}
          setIsLogin={props.setIsLogin}
          LoginData={props.LoginData}
        ></Login>
      ) : null}
    </>
  );
};

export default Header;
