import React from "react";
import prev from "../icon/prev_icon.png";
import next from "../icon/next_icon.png";

const Gerne = () => {
  return (
    <div className="gerne ">
      <div className="gerne_list slide_wrapper">
        <div className="gerne_slide prev">
          <img src={prev} className="prev_icon" />
        </div>
        <ul className="slides">
          <li className="slide_btn">코미디</li>
          <li className="slide_btn">로맨스</li>
          <li className="slide_btn">드라마</li>
          <li className="slide_btn">액션</li>
          <li className="slide_btn">스릴러</li>
          <li className="slide_btn">판타지</li>
          <li className="slide_btn">SF</li>
          <li className="slide_btn">호러</li>
        </ul>
        <div className="gerne_slide next">
          <img src={next} className="next_icon" />
        </div>
      </div>
    </div>
  );
};

export default Gerne;
