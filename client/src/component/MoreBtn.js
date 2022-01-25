import React, { useState } from "react";
import Loding from "./Loding";

const MoreBtn = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading === false ? (
        <div
          className="more"
          onClick={() => {
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
