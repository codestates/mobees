import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Profile_ul = styled.div`
  width: 45%;
  height: 90px;
  list-style: none;
  margin: 0 auto;
  position: relative;

  > .profile_image {
    width: 90px;
    height: 90px;
    box-sizing: border-box;
    border: 1px solid #8b8585;
    border-radius: 50px;
  }
  > .profile_list {
    width: 250px;
    height: 90px;
    border: 1px solid #8b8585;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Profile = () => {
  const history = useHistory();
  return (
    <div className="profile_div">
      <Profile_ul>
        <div
          className="profile_image"
          onClick={() => {
            history.push("/mypage");
          }}
        ></div>
        <div className="profile_list"></div>
      </Profile_ul>
    </div>
  );
};

export default Profile;
