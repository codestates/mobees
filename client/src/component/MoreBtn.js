import React, { useState } from "react";
import Loding from "./Loding";

const MoreBtn = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading === false ? (
        <div
          className="more"
          onClick={() => {
            props.setList([...props.list, 0,0,0,0,0,0,0,0])
            setLoading(true);
          }}
        >
          more
        </div>
      ) : (
        <Loding></Loding>
      )}
    </>
  );
};

export default MoreBtn;
