import React from "react";
import logo from "../icon/logo_v1.png";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div
        className="bottom_logo"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={logo} className="app_logo" />
      </div>
      <div className="address">© Copyright ⓒ 2022 MoBeeS YeongYangJae</div>
    </div>
  );
};

export default Footer;
