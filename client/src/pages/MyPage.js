import React from "react";
import Mypage from "../component/Mypage";

const MyPage = ({ LoginData }) => {
  return (
    <div className="section">
      <Mypage LoginData={LoginData}></Mypage>
    </div>
  );
};

export default MyPage;
