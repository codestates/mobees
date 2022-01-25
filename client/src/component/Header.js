import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <div className="header">
        <div className="header_div">
          <div
            className="header_left"
            onClick={() => {
              history.push("/");
            }}
          ></div>
          <div className="header_right">
            <div
              className="serch"
              onClick={() => {
                history.push("/posting");
              }}
            ></div>
            <div
              className="login"
              onClick={() => {
                history.push("/mymovie");
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
