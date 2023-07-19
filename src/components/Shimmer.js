import React from "react";

const ShimmerUI = () => {
  return (
    <div className="resturant-list">
      {Array(25)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-box"></div>
        ))}
    </div>
  );
};

export default ShimmerUI;
