import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_div">
          <div className="header_left">
            <Link to="/">
              <div>dfdfd</div>
            </Link>
          </div>
          <div className="header_right">
            <div className="serch"></div>
            <div className="login"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
