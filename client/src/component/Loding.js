import React from "react";
import loading from "../icon/loading.gif";
import styled from "styled-components";
const Loding = () => {
  let LoadingImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 65px auto 90px auto;
    /* position: relative;
    left: 50%;
    transform: translate(-50%, -30%); */
  `;

  return (
    <div className="loding">
      Loding..
      {/* <LoadingImg src={loading} className="loading"></LoadingImg> */}
    </div>
  );
};

export default Loding;
