import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div
        className="bottom_logo"
        onClick={() => {
          history.push("/");
        }}
      ></div>
      <div className="address">© Copyright ⓒ 2022 MoBeeS YeongYangJae</div>
    </div>
  );
};

export default Footer;
